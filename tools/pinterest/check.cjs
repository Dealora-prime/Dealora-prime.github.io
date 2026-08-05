const fs = require('fs');
const path = require('path');
const token = fs.readFileSync(path.join(__dirname, '.token'), 'utf8').trim();
const BASE = 'https://api.pinterest.com/v5';
async function api(method, ep, body) {
  const r = await fetch(BASE + ep, {
    method,
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined
  });
  const txt = await r.text();
  let j; try { j = JSON.parse(txt); } catch { j = txt; }
  if (!r.ok) throw new Error(`${method} ${ep} ${r.status}: ${typeof j === 'string' ? j : JSON.stringify(j)}`);
  return j;
}
(async () => {
  try {
    const me = await api('GET', '/user_account');
    console.log('USER:', JSON.stringify({ username: me.username, name: me.full_name, id: me.id }));
    const boards = await api('GET', '/boards?page_size=25');
    console.log('BOARDS:', (boards.items || []).map(b => `${b.id} | ${b.name}`).join('\n') || '(none)');
  } catch (e) { console.error('ERROR:', e.message); process.exit(1); }
})();
