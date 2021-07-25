const { pipeline } = require('stream');
const fs = require('fs');
const zlib = require('zlib');

pipeline(
	fs.createReadStream('lorem.txt', 'utf8'),
	zlib.createGzip(),
	fs.createWriteStream('lorem.gzip'),
	(err) => {
		if(err){
			console.log(err)
		}else {
			console.log('pipeline success')
		}
	}
)

