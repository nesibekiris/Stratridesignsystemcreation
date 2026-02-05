import { useState, useEffect } from 'react';
import { UserPlus, Trash2, Mail, AlertCircle, CheckCircle, Shield } from 'lucide-react';
import { projectId, publicAnonKey } from '../../../utils/supabase/info';
import { supabase } from '../../../utils/supabase/client';

interface User {
  id: string;
  email: string;
  created_at: string;
  user_metadata?: {
    name?: string;
    role?: string;
  };
}

export function UserManagementEditor() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  // New user form
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserPassword, setNewUserPassword] = useState('');
  const [newUserName, setNewUserName] = useState('');
  const [isCreating, setIsCreating] = useState(false);

  // Load users on mount
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    setIsLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        setError('You must be logged in to view users');
        setIsLoading(false);
        return;
      }

      // Get all users via server endpoint
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-9581034c/auth/users`,
        {
          headers: {
            'Authorization': `Bearer ${user.session?.access_token || ''}`
          }
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }

      const data = await response.json();
      setUsers(data.users || []);
    } catch (err: any) {
      console.error('Error loading users:', err);
      setError(err.message || 'Failed to load users');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsCreating(true);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-9581034c/auth/signup`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`
          },
          body: JSON.stringify({
            email: newUserEmail,
            password: newUserPassword,
            name: newUserName
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create user');
      }

      setSuccess(`User ${newUserEmail} created successfully!`);
      setNewUserEmail('');
      setNewUserPassword('');
      setNewUserName('');
      
      // Reload users list
      await loadUsers();

      // Clear success message after 5 seconds
      setTimeout(() => setSuccess(''), 5000);

    } catch (err: any) {
      setError(err.message || 'Failed to create user');
    } finally {
      setIsCreating(false);
    }
  };

  const handleDeleteUser = async (userId: string, email: string) => {
    if (!confirm(`Are you sure you want to delete user ${email}? This action cannot be undone.`)) {
      return;
    }

    setError('');
    setSuccess('');

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error('You must be logged in to delete users');
      }

      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-9581034c/auth/users/${userId}`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${user.session?.access_token || ''}`
          }
        }
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to delete user');
      }

      setSuccess(`User ${email} deleted successfully`);
      
      // Reload users list
      await loadUsers();

      // Clear success message after 5 seconds
      setTimeout(() => setSuccess(''), 5000);

    } catch (err: any) {
      setError(err.message || 'Failed to delete user');
    }
  };

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h2 
          className="font-serif text-3xl font-medium mb-2"
          style={{ color: '#1E2A45' }}
        >
          User Management
        </h2>
        <p 
          className="font-sans text-sm"
          style={{ color: '#1E2A45', opacity: 0.7 }}
        >
          Manage admin users who can access the CMS panel
        </p>
      </div>

      {/* Create New User Form */}
      <div 
        className="bg-white border rounded-md p-6 mb-6"
        style={{ borderColor: '#E8E4DF' }}
      >
        <div className="flex items-center gap-2 mb-4">
          <UserPlus className="w-5 h-5" style={{ color: '#184A5A' }} />
          <h3 
            className="font-sans text-lg font-medium"
            style={{ color: '#1E2A45' }}
          >
            Add New Admin User
          </h3>
        </div>

        <form onSubmit={handleCreateUser} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label 
                className="block font-sans text-sm font-medium mb-2"
                style={{ color: '#1E2A45' }}
              >
                Full Name
              </label>
              <input
                type="text"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
                placeholder="Admin Name"
                required
                disabled={isCreating}
                className="w-full px-4 py-2.5 border rounded-md font-sans text-sm focus:outline-none focus:ring-2 transition-all disabled:opacity-50"
                style={{ 
                  borderColor: '#E8E4DF',
                  color: '#1E2A45'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#184A5A';
                  e.target.style.boxShadow = '0 0 0 3px rgba(24, 74, 90, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#E8E4DF';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Email */}
            <div>
              <label 
                className="block font-sans text-sm font-medium mb-2"
                style={{ color: '#1E2A45' }}
              >
                Email Address
              </label>
              <input
                type="email"
                value={newUserEmail}
                onChange={(e) => setNewUserEmail(e.target.value)}
                placeholder="admin@example.com"
                required
                disabled={isCreating}
                className="w-full px-4 py-2.5 border rounded-md font-sans text-sm focus:outline-none focus:ring-2 transition-all disabled:opacity-50"
                style={{ 
                  borderColor: '#E8E4DF',
                  color: '#1E2A45'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#184A5A';
                  e.target.style.boxShadow = '0 0 0 3px rgba(24, 74, 90, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#E8E4DF';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label 
              className="block font-sans text-sm font-medium mb-2"
              style={{ color: '#1E2A45' }}
            >
              Password (min. 8 characters)
            </label>
            <input
              type="password"
              value={newUserPassword}
              onChange={(e) => setNewUserPassword(e.target.value)}
              placeholder="••••••••"
              required
              minLength={8}
              disabled={isCreating}
              className="w-full px-4 py-2.5 border rounded-md font-sans text-sm focus:outline-none focus:ring-2 transition-all disabled:opacity-50"
              style={{ 
                borderColor: '#E8E4DF',
                color: '#1E2A45'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#184A5A';
                e.target.style.boxShadow = '0 0 0 3px rgba(24, 74, 90, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#E8E4DF';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          <button
            type="submit"
            disabled={isCreating}
            className="px-6 py-2.5 rounded-md font-sans font-medium text-sm shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 hover:shadow-[0_2px_4px_rgba(0,0,0,0.12)] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            style={{ 
              backgroundColor: '#184A5A',
              color: '#FEFBF8',
              borderWidth: '1px',
              borderColor: '#135268'
            }}
          >
            {isCreating ? 'Creating User...' : 'Create User'}
          </button>
        </form>
      </div>

      {/* Success/Error Messages */}
      {success && (
        <div 
          className="flex items-start gap-2 p-4 rounded-md border mb-6"
          style={{ 
            backgroundColor: 'rgba(24, 74, 90, 0.05)',
            borderColor: 'rgba(24, 74, 90, 0.2)'
          }}
        >
          <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#184A5A' }} />
          <p className="text-sm font-sans" style={{ color: '#184A5A' }}>
            {success}
          </p>
        </div>
      )}

      {error && (
        <div 
          className="flex items-start gap-2 p-4 rounded-md border mb-6"
          style={{ 
            backgroundColor: 'rgba(220, 38, 38, 0.05)',
            borderColor: 'rgba(220, 38, 38, 0.2)'
          }}
        >
          <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#dc2626' }} />
          <p className="text-sm font-sans" style={{ color: '#dc2626' }}>
            {error}
          </p>
        </div>
      )}

      {/* Users List */}
      <div 
        className="bg-white border rounded-md overflow-hidden"
        style={{ borderColor: '#E8E4DF' }}
      >
        <div 
          className="px-6 py-4 border-b"
          style={{ 
            backgroundColor: 'rgba(24, 74, 90, 0.03)',
            borderColor: '#E8E4DF'
          }}
        >
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5" style={{ color: '#184A5A' }} />
            <h3 
              className="font-sans text-lg font-medium"
              style={{ color: '#1E2A45' }}
            >
              Existing Admin Users
            </h3>
          </div>
        </div>

        {isLoading ? (
          <div className="p-8 text-center">
            <div 
              className="w-8 h-8 border-4 border-t-transparent rounded-full animate-spin mx-auto mb-3"
              style={{ borderColor: '#184A5A', borderTopColor: 'transparent' }}
            ></div>
            <p className="font-sans text-sm" style={{ color: '#1E2A45', opacity: 0.7 }}>
              Loading users...
            </p>
          </div>
        ) : users.length === 0 ? (
          <div className="p-8 text-center">
            <p className="font-sans text-sm" style={{ color: '#1E2A45', opacity: 0.7 }}>
              No users found
            </p>
          </div>
        ) : (
          <div className="divide-y" style={{ borderColor: '#E8E4DF' }}>
            {users.map((user) => (
              <div 
                key={user.id}
                className="p-6 hover:bg-[#FEFBF8] transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Mail className="w-4 h-4" style={{ color: '#9FB7C8' }} />
                      <p 
                        className="font-sans font-medium"
                        style={{ color: '#1E2A45' }}
                      >
                        {user.email}
                      </p>
                    </div>
                    {user.user_metadata?.name && (
                      <p 
                        className="font-sans text-sm ml-6"
                        style={{ color: '#1E2A45', opacity: 0.7 }}
                      >
                        {user.user_metadata.name}
                      </p>
                    )}
                    <p 
                      className="font-sans text-xs ml-6 mt-1"
                      style={{ color: '#1E2A45', opacity: 0.5 }}
                    >
                      Created: {new Date(user.created_at).toLocaleDateString()}
                    </p>
                  </div>

                  <button
                    onClick={() => handleDeleteUser(user.id, user.email)}
                    className="p-2 rounded-md hover:bg-red-50 transition-colors group"
                    title="Delete user"
                  >
                    <Trash2 
                      className="w-4 h-4 group-hover:scale-110 transition-transform"
                      style={{ color: '#dc2626' }}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Info Box */}
      <div 
        className="mt-6 p-4 rounded-md border"
        style={{ 
          backgroundColor: 'rgba(159, 183, 200, 0.05)',
          borderColor: 'rgba(159, 183, 200, 0.2)'
        }}
      >
        <p className="font-sans text-sm" style={{ color: '#1E2A45', opacity: 0.7 }}>
          💡 <strong>Note:</strong> New users will receive their credentials via email. They can log in to <code>/fredo</code> using email + password or Google OAuth (if configured).
        </p>
      </div>
    </div>
  );
}
