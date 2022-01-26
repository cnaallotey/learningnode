const http = require ('http');
const path = require('path')
const fs = require('fs')
const os = require('os')

//create folder
// fs.mkdir(path.join(__dirname, 'nodeproject', {}, (err)=>{
//     if (err) throw err;
//     console.log('folder created...')
// }))

//create and write to file 
// fs.writeFile(
//     path.join(__dirname,  'hello.txt'), 
// 'hello world', err => 
// {
//     if (err) throw err;
//     console.log('file is writen....')
// })


// fs.readFile(path.join(__dirname, 'hello.txt'), 'utf8', (err, data)=> {
//     if(err) throw err;
//     console.log(data)
// });

//rename file
// fs.rename(path.join(__dirname, 'helloworld.txt'),
// path.join(__dirname, 'helloworlds.txt'), err => {
//     if (err) throw err
//     console.log('file renamed')

// })

// os platform
console.log(os.platform())

//cpu architecture
console.log(os.arch())

//cpu cores
console.log(os.cpus())

//memory
//console.log(os)



