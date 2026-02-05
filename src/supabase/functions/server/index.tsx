import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import { createAdminClient, verifyAuth } from "./auth.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-9581034c/health", (c) => {
  return c.json({ status: "ok" });
});

// Admin signup endpoint - Creates the first admin user
app.post("/make-server-9581034c/auth/signup", async (c) => {
  try {
    const { email, password, name } = await c.req.json();

    if (!email || !password) {
      return c.json({ error: "Email and password are required" }, 400);
    }

    const supabase = createAdminClient();

    // Create user with admin privileges
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { 
        name: name || 'Admin',
        role: 'admin'
      },
      // Automatically confirm the user's email since an email server hasn't been configured.
      email_confirm: true
    });

    if (error) {
      console.error('Error creating admin user:', error);
      return c.json({ error: error.message }, 400);
    }

    return c.json({ 
      success: true, 
      message: 'Admin user created successfully',
      userId: data.user.id 
    });

  } catch (error) {
    console.error('Error in signup endpoint:', error);
    return c.json({ error: 'Internal server error during signup' }, 500);
  }
});

// Get all users - Admin only
app.get("/make-server-9581034c/auth/users", async (c) => {
  try {
    const authHeader = c.req.header("Authorization");
    const authResult = await verifyAuth(authHeader);

    if (!authResult.authenticated) {
      return c.json({ error: authResult.error }, 401);
    }

    const supabase = createAdminClient();

    // Get all users (paginated)
    const { data, error } = await supabase.auth.admin.listUsers({
      page: 1,
      perPage: 1000
    });

    if (error) {
      console.error('Error fetching users:', error);
      return c.json({ error: error.message }, 400);
    }

    return c.json({ 
      success: true, 
      users: data.users 
    });

  } catch (error) {
    console.error('Error in list users endpoint:', error);
    return c.json({ error: 'Internal server error while fetching users' }, 500);
  }
});

// Delete user - Admin only
app.delete("/make-server-9581034c/auth/users/:userId", async (c) => {
  try {
    const authHeader = c.req.header("Authorization");
    const authResult = await verifyAuth(authHeader);

    if (!authResult.authenticated) {
      return c.json({ error: authResult.error }, 401);
    }

    const userId = c.req.param("userId");
    
    if (!userId) {
      return c.json({ error: "User ID is required" }, 400);
    }

    const supabase = createAdminClient();

    // Delete user
    const { error } = await supabase.auth.admin.deleteUser(userId);

    if (error) {
      console.error('Error deleting user:', error);
      return c.json({ error: error.message }, 400);
    }

    return c.json({ 
      success: true, 
      message: 'User deleted successfully' 
    });

  } catch (error) {
    console.error('Error in delete user endpoint:', error);
    return c.json({ error: 'Internal server error while deleting user' }, 500);
  }
});

// Fetch TechLetter articles from techletter.co RSS feed
app.get("/make-server-9581034c/techletter", async (c) => {
  try {
    // Try the correct RSS feed URL first, then fallbacks
    const possibleUrls = [
      "https://www.techletter.co/feed",  // Correct URL first
      "https://techletter.co/feed",
      "https://www.techletter.co/rss",
      "https://techletter.co/rss",
      "https://www.techletter.co/feed.xml",
      "https://techletter.co/feed.xml"
    ];
    
    let xmlText = null;
    let successUrl = null;
    
    // Try each URL until one works
    for (const url of possibleUrls) {
      try {
        const response = await fetch(url);
        if (response.ok) {
          xmlText = await response.text();
          successUrl = url;
          console.log(`Successfully fetched TechLetter from: ${url}`);
          break;
        }
      } catch (err) {
        console.log(`Failed to fetch from ${url}`);
      }
    }
    
    // If RSS feed not available, return mock data for demo purposes
    if (!xmlText) {
      console.log('RSS feed not available, returning mock TechLetter articles');
      const mockArticles = [
        {
          title: 'Building AI Literacy Across Your Organization',
          summary: 'Why AI literacy is foundational to good governance, and practical approaches to building it across leadership and teams.',
          link: 'https://techletter.co/building-ai-literacy',
          date: 'January 5, 2026',
          category: 'Techletter',
          visual: 'literacy' as const
        },
        {
          title: 'AI Governance in Financial Services: Lessons from Early Adopters',
          summary: 'How banks and fintech companies are building governance structures that balance innovation with regulatory compliance and risk management.',
          link: 'https://techletter.co/financial-services-governance',
          date: 'December 12, 2025',
          category: 'Techletter',
          visual: 'waves' as const
        },
        {
          title: 'The EU AI Act Enters Force: What Organizations Need to Know',
          summary: 'Breaking down the implementation timeline, compliance requirements, and strategic implications of Europe\'s landmark AI regulation.',
          link: 'https://techletter.co/eu-ai-act-guide',
          date: 'December 5, 2025',
          category: 'Techletter',
          visual: 'framework' as const
        },
        {
          title: 'Building AI Literacy: A Practical Roadmap for Leadership Teams',
          summary: 'A step-by-step approach to building AI understanding across your organization, from executives to frontline teams.',
          link: 'https://techletter.co/leadership-roadmap',
          date: 'November 18, 2025',
          category: 'Techletter',
          visual: 'literacy' as const
        },
        {
          title: 'Risk Management in AI Systems: A Framework for 2026',
          summary: 'Modern approaches to identifying, assessing, and mitigating risks in AI deployments across different organizational contexts.',
          link: 'https://techletter.co/risk-framework-2026',
          date: 'November 10, 2025',
          category: 'Techletter',
          visual: 'concentric' as const
        },
        {
          title: 'Navigating Multi-Jurisdictional AI Compliance',
          summary: 'How global organizations are managing compliance across EU AI Act, US state laws, and other emerging AI regulations.',
          link: 'https://techletter.co/multi-jurisdictional-compliance',
          date: 'October 28, 2025',
          category: 'Techletter',
          visual: 'policy' as const
        }
      ];
      
      return c.json({ 
        success: true, 
        articles: mockArticles,
        isMockData: true
      });
    }
    
    // Parse RSS XML
    const items: any[] = [];
    const itemMatches = xmlText.matchAll(/<item>([\s\S]*?)<\/item>/g);
    
    for (const match of itemMatches) {
      const itemXml = match[1];
      
      // Match title (try CDATA first, then plain text)
      const titleMatch = itemXml.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/) || itemXml.match(/<title>(.*?)<\/title>/);
      
      // Match description/content
      const descMatch = itemXml.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/) || 
                        itemXml.match(/<content:encoded><!\[CDATA\[(.*?)\]\]><\/content:encoded>/) ||
                        itemXml.match(/<description>(.*?)<\/description>/);
      
      const linkMatch = itemXml.match(/<link>(.*?)<\/link>/);
      const pubDateMatch = itemXml.match(/<pubDate>(.*?)<\/pubDate>/);
      
      if (titleMatch && linkMatch) {
        // Clean up summary - remove HTML tags and limit length
        let summary = '';
        if (descMatch) {
          summary = descMatch[1]
            .replace(/<[^>]*>/g, '') // Remove HTML tags
            .replace(/&nbsp;/g, ' ') // Replace &nbsp;
            .replace(/&amp;/g, '&')  // Replace &amp;
            .replace(/&quot;/g, '"') // Replace &quot;
            .replace(/&#39;/g, "'")  // Replace &#39;
            .trim()
            .slice(0, 200);
        }
        
        items.push({
          title: titleMatch[1].trim(),
          summary: summary,
          link: linkMatch[1].trim(),
          date: pubDateMatch ? new Date(pubDateMatch[1]).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          }) : '',
          category: 'Techletter',
          visual: 'literacy' as const
        });
      }
    }
    
    console.log(`Parsed ${items.length} TechLetter articles from ${successUrl}`);
    
    return c.json({ 
      success: true, 
      articles: items.slice(0, 10), // Return latest 10 articles
      isMockData: false
    });

  } catch (error) {
    console.error('Error fetching TechLetter:', error);
    // Return empty array instead of error
    return c.json({ 
      success: true, 
      articles: [],
      message: 'Error fetching RSS feed'
    });
  }
});

Deno.serve(app.fetch);