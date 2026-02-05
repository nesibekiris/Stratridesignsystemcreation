import { useState } from 'react';
import { Lock, Mail, AlertCircle } from 'lucide-react';
import { supabase } from '../utils/supabase/client';

interface AdminLoginProps {
  onLogin: (email: string, password: string) => Promise<boolean>;
}

export function AdminLogin({ onLogin }: AdminLoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const success = await onLogin(email, password);
      if (!success) {
        setError('Invalid email or password. Access denied.');
      }
    } catch (err) {
      setError('Authentication failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    setIsLoading(true);

    try {
      // Google OAuth sign in
      // IMPORTANT: You must complete setup at https://supabase.com/docs/guides/auth/social-login/auth-google
      const { data, error: oauthError } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/fredo`
        }
      });

      if (oauthError) {
        console.error('Google OAuth error:', oauthError);
        setError('Google authentication failed. Make sure Google OAuth is configured in Supabase.');
        setIsLoading(false);
      }
      // User will be redirected to Google, no need to set loading false
    } catch (err: any) {
      console.error('Google login error:', err);
      setError('Failed to initiate Google login. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: '#FEFBF8' }}
    >
      <div className="w-full max-w-md">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <h1 
            className="font-serif text-4xl font-medium mb-2"
            style={{ color: '#1E2A45' }}
          >
            STRATRI
          </h1>
          <p 
            className="font-sans text-sm"
            style={{ color: '#1E2A45', opacity: 0.7 }}
          >
            Admin Access
          </p>
        </div>

        {/* Login Form */}
        <div 
          className="bg-white rounded-sm border p-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
          style={{ borderColor: '#E8E4DF' }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Lock 
              className="w-5 h-5" 
              style={{ color: '#184A5A' }}
            />
            <h2 
              className="font-sans text-xl font-medium"
              style={{ color: '#1E2A45' }}
            >
              Secure Login
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input */}
            <div>
              <label 
                htmlFor="email" 
                className="block font-sans text-sm font-medium mb-2"
                style={{ color: '#1E2A45' }}
              >
                Email Address
              </label>
              <div className="relative">
                <Mail 
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
                  style={{ color: '#9FB7C8' }}
                />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  required
                  disabled={isLoading}
                  className="w-full pl-10 pr-4 py-3 border rounded-sm font-sans text-sm focus:outline-none focus:ring-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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

            {/* Password Input */}
            <div>
              <label 
                htmlFor="password" 
                className="block font-sans text-sm font-medium mb-2"
                style={{ color: '#1E2A45' }}
              >
                Password
              </label>
              <div className="relative">
                <Lock 
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
                  style={{ color: '#9FB7C8' }}
                />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  disabled={isLoading}
                  className="w-full pl-10 pr-4 py-3 border rounded-sm font-sans text-sm focus:outline-none focus:ring-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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

            {/* Error Message */}
            {error && (
              <div 
                className="flex items-start gap-2 p-3 rounded-sm border"
                style={{ 
                  backgroundColor: 'rgba(220, 38, 38, 0.05)',
                  borderColor: 'rgba(220, 38, 38, 0.2)'
                }}
              >
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#dc2626' }} />
                <p className="text-sm font-sans" style={{ color: '#dc2626' }}>
                  {error}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-sm font-sans font-medium text-sm shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 hover:shadow-[0_3px_6px_rgba(0,0,0,0.12)] active:translate-y-0 active:shadow-[0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              style={{ 
                backgroundColor: '#184A5A',
                color: '#FEFBF8',
                borderWidth: '1px',
                borderColor: '#135268'
              }}
            >
              {isLoading ? 'Authenticating...' : 'Access Admin Panel'}
            </button>
          </form>

          {/* Security Notice */}
          <div className="mt-6 pt-6 border-t" style={{ borderColor: '#E8E4DF' }}>
            <p className="text-xs font-sans text-center" style={{ color: '#1E2A45', opacity: 0.5 }}>
              🔒 This area is protected. Authorized access only.
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-xs font-sans text-center mt-6" style={{ color: '#1E2A45', opacity: 0.4 }}>
          All login attempts are monitored and logged.
        </p>
      </div>
    </div>
  );
}