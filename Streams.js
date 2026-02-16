const fs = require('fs');
const readstream = fs.createReadStream('./docs/Hugefile.txt', 'utf8');
const writestream = fs.createWriteStream('./docs/Hugefilecopy.txt');
// readstream.on('data', (chunk) =>{
//     // console.log('\nnew Buffer\n');
//     // console.log(chunk
//     // );

//     writestream.write(chunk);
// })
readstream.pipe(writestream);