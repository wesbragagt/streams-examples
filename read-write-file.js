const fs = require('fs')

const readable = fs.createReadStream('lorem.txt', 'utf8')
const writeable = fs.createWriteStream('write_lorem.txt', 'utf8')

readable.on('data', (chunk)=>{
	writeable.write(chunk)
})

readable.on('end', ()=>{
	console.log('done')
})

