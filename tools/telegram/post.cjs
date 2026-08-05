const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const token = fs.readFileSync(path.join(DIR, '.token'), 'utf8').trim();
const channel = process.env.TG_CHANNEL || '@DealoraPrime';
const SITE = 'https://Dealora-prime.github.io/';
const products = JSON.parse(fs.readFileSync(path.join(DIR, 'products.json'), 'utf8'));

async function api(method, params = {}) {
  for (let attempt = 0; attempt < 6; attempt++) {
    const r = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params)
    });
    const j = await r.json();
    if (j.ok) return j.result;
    if (j.parameters && j.parameters.retry_after) {
      const wait = (j.parameters.retry_after || 3) * 1000;
      console.log(`  rate limit -> waiting ${wait / 1000}s`);
      await new Promise(res => setTimeout(res, wait));
      continue;
    }
    throw new Error(`${method} failed: ${JSON.stringify(j.description || j)}`);
  }
  throw new Error(`${method}: gave up after retries`);
}

function stars(rating) {
  return '⭐'.repeat(Math.round(rating)) + '☆'.repeat(5 - Math.round(rating));
}

function buildCaption(p) {
  const lines = [
    `🔥 *${p.name}*`,
    ``,
    `🏷️ Brand: *${p.brand}*   |   ⭐ ${stars(p.rating)} ${p.rating}/5`,
    ``,
    p.description,
    ``
  ];
  const feats = (p.features || []).slice(0, 4);
  if (feats.length) {
    lines.push(`✨ *Key Features:*`);
    feats.forEach(f => lines.push(`   • ${f}`));
    lines.push(``);
  }
  lines.push(`🛒 *Best price dekho:* ${p.affiliateLink}`);
  lines.push(`🌐 Dealora Prime: ${SITE}`);
  return lines.join('\n').slice(0, 1024);
}

function urlFor(img) {
  return img.startsWith('http') ? img : SITE + img;
}

async function postProduct(p) {
  const caption = buildCaption(p);
  const images = (p.gallery && p.gallery.length) ? p.gallery : [p.image];
  if (images.length === 1) {
    const res = await api('sendPhoto', {
      chat_id: channel, photo: urlFor(images[0]),
      caption, parse_mode: 'Markdown'
    });
    console.log(`POSTED ${p.id} (photo) -> msg ${res.message_id}`);
  } else {
    const media = images.slice(0, 10).map((img, i) => ({
      type: 'photo', media: urlFor(img),
      ...(i === 0 ? { caption, parse_mode: 'Markdown' } : {})
    }));
    const res = await api('sendMediaGroup', { chat_id: channel, media });
    console.log(`POSTED ${p.id} (album ${media.length}) -> msgs ${res.map(m => m.message_id).join(',')}`);
  }
  return new Promise(r => setTimeout(r, 2500));
}

(async () => {
  const args = process.argv.slice(2);
  if (args.includes('--id')) {
    const id = Number(args[args.indexOf('--id') + 1]);
    const p = products.find(x => x.id === id);
    if (!p) throw new Error(`No product id ${id}`);
    console.log('Posting:', p.name);
    await postProduct(p);
  } else if (args.includes('--all')) {
    console.log('Posting all', products.length, 'products...');
    for (const p of products) {
      await postProduct(p);
    }
    console.log('ALL DONE');
  } else {
    console.log('Usage:');
    console.log('  node post.js --id <productId>   (photo album post)');
    console.log('  node post.js --all              (post every product)');
    console.log('Products:', products.map(p => `${p.id} = ${p.name}`).join('\n'));
    process.exit(0);
  }
})().catch(e => { console.error('ERROR:', e.message); process.exit(1); });
