// EVENT LOOP EXAMPLE
// Server
const http = require('http')
const server = http.createServer((req,res)=>{
    console.log('Request Event')
    res.end('Hello World')
})
server.listen(5000, ()=>{
    console.log('Server is listening on PORT 5000');
})