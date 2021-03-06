const {readFile} = require('fs')
const path = require('path')

const getText = (path) =>{
    return new Promise((resolve,reject)=>{

        readFile(path, 'utf8', (err,data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })

    })
}

// getText('./path/first-file.txt')
// .then((result) => console.log(result))
// .catch((err) => console.log(err))

const start = async() =>{
    const first = await getText('./path/first-file.txt')
}