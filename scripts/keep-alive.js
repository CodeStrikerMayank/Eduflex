/**
 * EduFlex 24/7 Keep-Alive Pinger
 * 
 * Automatically pings your Render deployment every 10 minutes to prevent
 * Render Free Tier from spinning down into a 60-second cold-start.
 * 
 * Usage:
 *   node scripts/keep-alive.js https://your-eduflex-app.onrender.com
 */

const https = require('https');
const http = require('http');

const targetUrl = process.argv[2] || process.env.PING_TARGET_URL;

if (!targetUrl) {
  console.error('Error: Please provide your Render URL.');
  console.log('Usage: node scripts/keep-alive.js https://your-eduflex-app.onrender.com');
  process.exit(1);
}

const pingUrl = targetUrl.replace(/\/$/, '') + '/api/health';
const INTERVAL_MS = 10 * 60 * 1000; // 10 minutes

console.log(`Starting EduFlex Keep-Alive service...`);
console.log(`Target: ${pingUrl}`);
console.log(`Interval: Every 10 minutes (prevents Render 15-min idle sleep)\n`);

function ping() {
  const protocol = pingUrl.startsWith('https') ? https : http;
  const start = Date.now();

  protocol.get(pingUrl, (res) => {
    let body = '';
    res.on('data', chunk => body += chunk);
    res.on('end', () => {
      const duration = Date.now() - start;
      console.log(`[${new Date().toISOString()}] Ping OK - Status ${res.statusCode} in ${duration}ms (App kept warm)`);
    });
  }).on('error', (err) => {
    console.error(`[${new Date().toISOString()}] Ping Failed:`, err.message);
  });
}

// Initial ping on start
ping();

// Recurring interval
setInterval(ping, INTERVAL_MS);
