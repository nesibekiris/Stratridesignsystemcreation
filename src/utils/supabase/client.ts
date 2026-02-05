import { createClient as createSupabaseClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from './info';

// Create Supabase client singleton
export const supabase = createSupabaseClient(
  `https://${projectId}.supabase.co`,
  publicAnonKey
);

// Auth helpers
export const authHelpers = {
  // Sign in with email and password
  async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) {
      console.error('Sign in error:', error.message);
      return { success: false, error: error.message };
    }
    
    return { success: true, user: data.user, session: data.session };
  },

  // Get current session
  async getSession() {
    const { data, error } = await supabase.auth.getSession();
    
    if (error) {
      console.error('Get session error:', error.message);
      return { success: false, error: error.message };
    }
    
    return { success: true, session: data.session };
  },

  // Get current user
  async getUser() {
    const { data, error } = await supabase.auth.getUser();
    
    if (error) {
      console.error('Get user error:', error.message);
      return { success: false, error: error.message };
    }
    
    return { success: true, user: data.user };
  },

  // Sign out
  async signOut() {
    const { error } = await supabase.auth.signOut();
    
    if (error) {
      console.error('Sign out error:', error.message);
      return { success: false, error: error.message };
    }
    
    return { success: true };
  },

  // Check if user is authenticated
  async isAuthenticated() {
    const { session } = await this.getSession();
    return !!session;
  },

  // Listen to auth state changes
  onAuthStateChange(callback: (event: string, session: any) => void) {
    return supabase.auth.onAuthStateChange(callback);
  }
};
