const puppeteer = require('puppeteer');
const getImageUrl = require('./getImageUrl');
const getTitles = require('./getTitles');

(async () => {
	try {
		const browser = await puppeteer.launch({ headless: false });
		const page = await browser.newPage();
		await page.setViewport({ width: 1280, height: 960 });

		const title_list = await getTitles('./jobTitle_list.txt');
		const not_found_list = [];
		for (var i = 0; i < title_list.length; i++) {
			var job_name = title_list[i];
			console.log(i + ' loading image for', job_name, '...');
			const imageUrl = await getImageUrl({ i, page, job_name });
		}
	} catch (err) {
		console.log(err);
	}
})();