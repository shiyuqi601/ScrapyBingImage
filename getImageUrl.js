const download = require('image-downloader')
 
async function downloadImage({ job_name, imageUrl }) {
	const options = {
	  url: imageUrl,
	  dest: `./images/${ job_name }.jpg`
	}
	 
	download.image(options)
	  .then(({ filename, image }) => {
	    //console.log('File saved to', filename)
	  })
	  .catch((err) => {
	    console.error(err)
	  })
}

async function getImageUrl({ i, page, job_name }) {
	await page.goto(`https://www.bing.com/images/search?q=${ job_name }&qs=n&form=QBIR&qft=%20filterui%3Alicense-L2_L3_L4%20filterui%3Aphoto-photo&sp=-1&pq=teache&sc=8-6&sk=&cvid=A40F13F3800645D1A2799D7287E5A9C1`);
	try{
		var flag = await page.waitForSelector('#mmComponent_images_1',{timeout:1000});
	} catch (e){
		console.log(i + " " + `${ job_name } NOT FOUND`);
		return;
	}

	const selector = '#mmComponent_images_1 > ul:nth-child(1) > li:nth-child(1) > div > div.imgpt > a';
	var img = await page.waitForSelector(selector);
	const img_parent = await page.$eval(selector, el => el.getAttribute('m'));
	const imageUrl = JSON.parse(img_parent)['purl'];
	job_name = job_name.replace(/[^A-Za-z0-9]/g, '');
	downloadImage({ job_name, imageUrl});
}
module.exports = getImageUrl;