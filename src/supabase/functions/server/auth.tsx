import { createClient } from 'jsr:@supabase/supabase-js@2';

// Create admin client with service role for user creation
export function createAdminClient() {
  return createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
  );
}

// Create user client for regular operations
export function createUserClient() {
  return createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_ANON_KEY') ?? '',
  );
}

// Verify user is authenticated
export async function verifyAuth(authHeader: string | null) {
  if (!authHeader) {
    return { authenticated: false, error: 'No authorization header' };
  }

  const token = authHeader.replace('Bearer ', '');
  const supabase = createUserClient();

  const { data: { user }, error } = await supabase.auth.getUser(token);

  if (error || !user) {
    return { authenticated: false, error: 'Invalid token' };
  }

  return { authenticated: true, user };
}
