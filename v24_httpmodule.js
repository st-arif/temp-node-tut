const http=require('http');
const server=http.createServer((req,res)=>{
    // res.write("Welcome to our home page")
    // res.end();
    if(req.url=='/'){
        res.end("welcome to our home page")
        return ;
    }
    if(req.url=='/about'){
        res.end("here is our short history")
        return ;

    }
    res.end("<h1>OOps!</h1><p>Page can't be found</p>")
})
server.listen(3000);
