import fs from 'fs';
const text = fs.readFileSync('target.js', 'utf8');
const allUrls = text.match(/https?:\/\/[^\s"'<>]+/g) || [];
const uniqueUrls = [...new Set(allUrls)];
fs.writeFileSync('urls2.txt', uniqueUrls.join('\n'));
console.log('URLs extracted:', uniqueUrls.length);
