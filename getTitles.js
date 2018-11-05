const fs = require('fs-extra');

async function getTitles(file) {
	const data = await fs.readFile(file, 'utf8');

	const title_list = data.split('\r').map(s => s.split('\t')[1]);
	return title_list;
}

module.exports = getTitles;
