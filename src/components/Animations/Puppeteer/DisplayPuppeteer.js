
const puppeteer = require('puppeteer');

async function takeFullScreenshot(page, deficiency, pageToScreenshot) {
    await page.emulateVisionDeficiency(deficiency);
    await page.screenshot({
        path: `./images/screenshots/emulated_deficiencies/${deficiency}-fullPage.png`,    // path to output screenshot
        fullPage: true
    })
}

const DisplayPuppeteer = async () => {
    const browser = await puppeteer.launch();

    try {
        const page = await browser.newPage();

        const deficiencies = [
            'achromatopsia',    // black & white
            'deuteranopia',     // green color blindness
            'protanopia',       // red color blindness
            'tritanopia',       // blue color blindness
            'blurredVision',    // blurred vision
            // 'none'   // normal vision
        ]

        const urls = [
            `${document.location.origin}/`,
            `${document.location.origin}/chartDisplay`,
            `${document.location.origin}/buttonWorkshop`,
            `${document.location.origin}/animations`,
            // `${document.location.origin}/`,
        ]

        // store all pages (search and click on all <a> tags then store their urls?) -- still working on this part
        // find page with a click, store the root, go as far as possible then screenshot whilst backtracking? -- not sure I like this idea because it will add too much complexity with checking navigation -- not entirely sure yet
        // search file structure for html files and screenshot those -- only works for static site generation (primarily file structures that have html files and not react programs that have specifically js files that build everything)


        // loop through pages
        // loop through deficiencies
        for(const deficiency of deficiencies) {
            // need to figure out how pages are going to be passed
            // await takeFullScreenshot(page, deficiency, '')
        }
    }
    catch (err) {
        console.error(err);
    } finally {
        // always close the browser when finished
        await browser.close();
    }
}

export {DisplayPuppeteer};