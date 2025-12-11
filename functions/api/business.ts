// Example Cloudflare Pages Function for business data API
// Access via: /api/business

interface Env {
  DB: D1Database;  // Cloudflare D1 binding
  BUSINESS_DATA: KVNamespace;  // Cloudflare KV binding
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  try {
    const { request, env } = context;
    const data = await request.json();

    // Example: Save business data to D1 database
    // Uncomment when D1 is configured in wrangler.toml
    /*
    const result = await env.DB.prepare(
      'INSERT INTO businesses (name, entity_type, state, created_at) VALUES (?, ?, ?, ?)'
    ).bind(
      data.businessName,
      data.entityType,
      data.state,
      new Date().toISOString()
    ).run();
    */

    // Example: Cache in KV for quick access
    // Uncomment when KV is configured in wrangler.toml
    /*
    await env.BUSINESS_DATA.put(
      `business:${data.businessName}`,
      JSON.stringify(data),
      { expirationTtl: 86400 } // 24 hours
    );
    */

    return new Response(JSON.stringify({
      success: true,
      message: 'Business data saved successfully',
      // id: result.meta.last_row_id
    }), {
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function onRequestGet(context: { request: Request; env: Env }) {
  try {
    const { request, env } = context;
    const url = new URL(request.url);
    const businessName = url.searchParams.get('name');

    if (!businessName) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Business name parameter required'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Example: Retrieve from KV
    // Uncomment when KV is configured
    /*
    const cached = await env.BUSINESS_DATA.get(`business:${businessName}`, 'json');
    if (cached) {
      return new Response(JSON.stringify({
        success: true,
        data: cached,
        source: 'cache'
      }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }
    */

    // Example: Query D1 database
    // Uncomment when D1 is configured
    /*
    const result = await env.DB.prepare(
      'SELECT * FROM businesses WHERE name = ?'
    ).bind(businessName).first();

    return new Response(JSON.stringify({
      success: true,
      data: result,
      source: 'database'
    }), {
      headers: { 'Content-Type': 'application/json' }
    });
    */

    return new Response(JSON.stringify({
      success: true,
      message: 'API endpoint ready - configure D1/KV in wrangler.toml to enable'
    }), {
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
