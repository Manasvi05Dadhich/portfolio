const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '_parts');
const files = fs.readdirSync(dir).sort();
let html = '';
for (const f of files) {
  html += fs.readFileSync(path.join(dir, f), 'utf8');
}
fs.writeFileSync(path.join(__dirname, 'index.html'), html, 'utf8');
console.log('Done! index.html written (' + html.length + ' bytes)');