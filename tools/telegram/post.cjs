const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const token = fs.readFileSync(path.join(DIR, '.token'), 'utf8').trim();
const channel = process.env.TG_CHANNEL || '@DealoraPrime';
const products = JSON.parse(fs.readFileSync(path.join(DIR, 'products.json'), 'utf8'));

async function api(method, params = {}) {
  const qs = new URLSearchParams(Object.entries({ chat_id: channel, ...params }));
  const r = await fetch(`https://api.telegram.org/bot${token}/${method}?${qs}`);
  const j = await r.json();
  if (!j.ok) throw new Error(`${method} failed: ${JSON.stringify(j.description || j)}`);
  return j.result;
}

function stars(rating) {
  const full = Math.round(rating);
  return '⭐'.repeat(full) + '☆'.repeat(5 - full);
}

function buildMsg(p) {
  const lines = [
    `🔥 *${p.name}*`,
    ``,
    `🏷️ Brand: *${p.brand}*`,
    `⭐ ${stars(p.rating)} ${p.rating} / 5`,
    ``,
    p.description,
    ``,
    `✨ *Key Features:*`
  ];
  (p.features || []).slice(0, 5).forEach(f => lines.push(`   • ${f}`));
  lines.push(``, `🛒 Best price yahan dekho: ${p.affiliateLink}`);
  return lines.join('\n');
}

(async () => {
  const args = process.argv.slice(2);
  let text;
  if (args.includes('--id')) {
    const id = Number(args[args.indexOf('--id') + 1]);
    const p = products.find(x => x.id === id);
    if (!p) throw new Error(`No product with id ${id}`);
    text = buildMsg(p);
    console.log('Posting product:', p.name);
  } else if (args.includes('--text')) {
    text = args.slice(args.indexOf('--text') + 1).join(' ');
  } else {
    console.log('Usage:');
    console.log('  node post.js --id <productId>');
    console.log('  node post.js --text "custom message"');
    console.log('Products:', products.map(p => `${p.id} = ${p.name}`).join('\n'));
    process.exit(0);
  }
  const res = await api('sendMessage', { text, parse_mode: 'Markdown', disable_web_page_preview: 'false' });
  console.log('POSTED OK -> message_id', res.message_id, 'to', res.chat.title || res.chat.username);
})().catch(e => { console.error('ERROR:', e.message); process.exit(1); });
