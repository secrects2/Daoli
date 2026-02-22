import fs from 'fs';
const text = fs.readFileSync('target.js', 'utf8');
const allUrls = text.match(/https:\/\/[^"'\\]+\.(png|jpe?g|svg|webp)/gi) || [];
const uniqueUrls = [...new Set(allUrls)];
fs.writeFileSync('urls.txt', uniqueUrls.join('\n'));
console.log('URLs extracted:', uniqueUrls.length);
