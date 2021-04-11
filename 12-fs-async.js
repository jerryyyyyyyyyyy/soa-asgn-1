// FS module - Asynchronous
const {readFile, writeFiel, writeFile} = require('fs')
console.log('start');
readFile('./path/first-file.txt', 'utf8', (err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    //offloads this task
    readFile('./path/sec-file.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result
        writeFile('./path/result-async.txt',
        `Resulting File Created: ${first}, ${second}`
        ,(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('Task Done')
        })
    })
})
// continues with the code.
console.log('Starting Next Task');