import fs from 'fs';

const filesToReplace = ['target.js', 'target.css', 'index.html', 'style.css', 'main.js'];
const searchUrl = 'https://ry5ao6ry7lpuk.ok.kimi.link';

filesToReplace.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        if (content.includes(searchUrl)) {
            let newContent = content.split(searchUrl).join('');
            fs.writeFileSync(file, newContent);
            console.log(`Successfully replaced URLs in ${file}`);
        }
    }
});
