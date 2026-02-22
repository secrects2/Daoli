import fs from 'fs';
import https from 'https';
import path from 'path';

function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, response => {
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', err => {
            fs.unlink(dest, () => reject(err));
        });
    });
}

async function run() {
    if (!fs.existsSync('exact_dom.html')) {
        console.log('exact_dom.html not found');
        return;
    }
    const dom = fs.readFileSync('exact_dom.html', 'utf8');

    // extract all src="..." and url(...)
    const srcRegex = /src=["']([^"']+\.(png|jpe?g|svg|webp|gif))["']/gi;
    const urlRegex = /url\(["']?([^"')]+\.(png|jpe?g|svg|webp|gif))["']?\)/gi;

    const urls = [];
    let match;
    while ((match = srcRegex.exec(dom)) !== null) {
        urls.push(match[1]);
    }
    while ((match = urlRegex.exec(dom)) !== null) {
        urls.push(match[1]);
    }

    // extract CSS urls as well just in case target.css has them
    const targetCss = fs.readFileSync('target.css', 'utf8');
    while ((match = urlRegex.exec(targetCss)) !== null) {
        urls.push(match[1]);
    }

    const uniqueUrls = [...new Set(urls)];
    console.log(`Found ${uniqueUrls.length} unique asset URLs`);

    const baseUrl = 'https://ry5ao6ry7lpuk.ok.kimi.link';
    const publicDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir);
    }

    for (const url of uniqueUrls) {
        let absoluteUrl = url;
        if (url.startsWith('/')) {
            absoluteUrl = baseUrl + url;
        } else if (!url.startsWith('http')) {
            absoluteUrl = baseUrl + '/' + url;
        }

        // strip query params for filename
        const urlWithoutQuery = url.split('?')[0];
        const assetPathMatch = urlWithoutQuery.match(/(?:assets\/)?([^\/]+)$/);
        const filename = assetPathMatch ? assetPathMatch[1] : path.basename(urlWithoutQuery);

        // determine directory based on origin URL
        const isAssetsDir = url.includes('/assets/');
        let targetDir = publicDir;

        if (isAssetsDir) {
            targetDir = path.join(publicDir, 'assets');
            if (!fs.existsSync(targetDir)) {
                fs.mkdirSync(targetDir, { recursive: true });
            }
        }

        const destPath = path.join(targetDir, filename);

        console.log(`Downloading ${absoluteUrl} to ${destPath}`);
        try {
            await downloadFile(absoluteUrl, destPath);
            console.log('Success:', destPath);
        } catch (e) {
            console.error('Failed to download:', absoluteUrl, e.message);
        }
    }
    console.log('All downloads completed');
}

run().catch(console.error);
