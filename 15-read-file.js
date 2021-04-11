// EVENT LOOP EXAMPLE
const {readFile} = require('fs')
console.log('starting a first task')
// check file path
readFile('./path/first-file.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    console.log('First Task Completed')
})
console.log('Starting the next task')