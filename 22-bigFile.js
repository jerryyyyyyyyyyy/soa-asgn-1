const {writeFileSync} = require('fs')
for(let i = 0; i < 1000; i++){
    writeFileSync('./path/big-file.txt', `Hello World ${i}`, {flag: 'a'})
}