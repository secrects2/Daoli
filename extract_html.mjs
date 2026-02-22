import { chromium } from 'playwright';
import fs from 'fs';

async function extract() {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://ry5ao6ry7lpuk.ok.kimi.link', { waitUntil: 'networkidle' });

    // wait for any animations or data to load
    await page.waitForTimeout(3000);

    const content = await page.evaluate(() => {
        return document.getElementById('root').innerHTML;
    });

    fs.writeFileSync('exact_dom.html', content);
    console.log('DOM extracted to exact_dom.html');
    await browser.close();
}

extract().catch(console.error);
