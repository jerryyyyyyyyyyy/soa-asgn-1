// HTTP MODULE
const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.write('HOME PAGE')
    }
    if(req.url == '/about'){
        res.end('History')
    }
    res.end(`
    <h1>OOPS</h1>
    <p>Resource Not Found..</p>
    <a href="/">Home</a>
    `)
})
server.listen(5000)