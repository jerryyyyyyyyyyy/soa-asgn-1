// FileSyste, fs module. synchronous

// destructure approach
const {readFileSync, writeFileSync} = require('fs') 
console.log('start');
const first = readFileSync('./path/first-file.txt', 'utf-8')
const second = readFileSync('./path/sec-file.txt', 'utf-8')

writeFileSync(
    './path/result-sync.txt', 
    `Resulting file created: ${first},${second}`,
    {flag:'a'}
)
console.log('Task Done');
console.log('Starting The Next Task');