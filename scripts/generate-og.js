import puppeteer from 'puppeteer-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
    try {
        const browser = await puppeteer.launch({
            executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
            headless: "new"
        });
        const page = await browser.newPage();
        await page.setViewport({ width: 1200, height: 630 });

        const fileUrl = 'file:///' + path.join(__dirname, '..', 'public', 'og-image.html').replace(/\\/g, '/');
        console.log("Loading URL: ", fileUrl);

        await page.goto(fileUrl, { waitUntil: 'networkidle0' });
        await page.screenshot({ path: path.join(__dirname, '..', 'public', 'og-image.png') });
        await browser.close();

        console.log("Screenshot successfully saved to public/og-image.png");
    } catch (e) {
        console.error("Error generating screenshot:", e);
    }
})();
