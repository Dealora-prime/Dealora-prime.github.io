const fs = require('fs');
const src = fs.readFileSync('C:\\Users\\ashwin.megha\\Dealora\\js\\script.js', 'utf8');
const start = src.indexOf('const products = [');
const end = src.indexOf('];', start) + 1;
const arrSrc = src.slice(start, end);
const products = eval('(' + arrSrc.replace(/^const products = /, '') + ')');
const out = products.map(p => ({
  id: p.id,
  name: p.name,
  brand: p.brand,
  category: p.category,
  rating: p.rating,
  description: p.description,
  features: p.features || [],
  image: p.image,
  gallery: p.gallery || [],
  affiliateLink: p.affiliateLink
}));
fs.writeFileSync('C:\\Users\\ashwin.megha\\Dealora\\tools\\telegram\\products.json', JSON.stringify(out, null, 2));
console.log('Exported', out.length, 'products');
