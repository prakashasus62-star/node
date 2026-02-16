// file sysytem module
// const fs = require('fs');
// create folder
// if (!fs.existsSync('./myfolder')) {
//     fs.mkdir('myfolder', (err) => {
//         if (err) {
//             console.log(err.message);
//         }
//         else {
//             console.log("folder created successfully");
//         }
//     })
// }
// write file

// fs.writeFile('./myfolder/hello.txt', "Hello world", (err) => {
//     if (err) {
//         console.log(err.message);
//     } else {
//         console.log("File written successfully");
//     }
// })
// Read file
// C
//     fs.readFile('./myfolder/hello.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err.meassage);
//     }
//     else{
//         console.log(data);
//     }
// })
// }
// append file or delete file
// if(fs.existsSync('./myfolder/hello.txt')){
//     fs.unlink('./myfolder/hello.txt', (err) => {
//         if (err) {
//             console.log(err.message);
//         }
//         else {
//             console.log("file deleted successfully");
//         }
// });
// }
// // folder delete
// if(fs.existsSync('./myfolder')){
//     fs.rmdir('./myfolder', (err) => {
//         if (err){
//             console.log(err.message);

//         }
//         else{
//             console.log("folder deleted successfully");
//         }
// });
// }