export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { page, userAgent, timestamp, referrer } = req.body || {};

  // Get IP from Vercel headers
  const ip = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown';

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'ECH Alerts <noreply@roundtables.cc>',
        to: 'trtfounder@protonmail.com',
        subject: `ECH Login — ${page || '/'}`,
        html: `
          <div style="font-family:system-ui,sans-serif;max-width:500px;padding:20px">
            <h2 style="margin:0 0 16px;font-size:18px;color:#1a1a1a">New Login on EconomicCrimeHub.org</h2>
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr><td style="padding:6px 12px 6px 0;color:#888;white-space:nowrap">Page</td><td style="padding:6px 0">${page || '/'}</td></tr>
              <tr><td style="padding:6px 12px 6px 0;color:#888;white-space:nowrap">IP</td><td style="padding:6px 0">${ip}</td></tr>
              <tr><td style="padding:6px 12px 6px 0;color:#888;white-space:nowrap">Time</td><td style="padding:6px 0">${timestamp || new Date().toISOString()}</td></tr>
              <tr><td style="padding:6px 12px 6px 0;color:#888;white-space:nowrap">Referrer</td><td style="padding:6px 0">${referrer || 'direct'}</td></tr>
              <tr><td style="padding:6px 12px 6px 0;color:#888;white-space:nowrap">User Agent</td><td style="padding:6px 0;word-break:break-all;font-size:12px">${userAgent || 'unknown'}</td></tr>
            </table>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Resend error:', err);
      return res.status(500).json({ error: 'Email send failed' });
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error('Notify error:', e);
    return res.status(500).json({ error: 'Internal error' });
  }
}
