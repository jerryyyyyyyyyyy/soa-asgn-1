// code blocking event loop

const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end('Home')
    }
    if(req.url == '/about'){
        // Blocking Code
        for( let i = 0; i < 1000; i++){
            for(let j = 0; j < 1000; j++){
                console.log(`${i} ${j}`)
            }
        }
        res.end('About')
    }
    res.end('Error')

})
server.listen(5000, ()=>{
    console.log('Server Ready at PORT 5000');
})