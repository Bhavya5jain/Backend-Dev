const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    const message = `Received request for ${req.url}`;
    fs.appendFile("ActivityLog",`[${new Date().toLocaleString()}] - ${message}\n`, (err) => {
            if (err) {
                console.error("Failed to write to log file:", err);
            }
    });

    const parseUrl = require('url').parse(req.url,true);
        const {name,age}= parseUrl.query;
        console.log(name);
        console.log(age);

    switch (req.url) {
        case "/":
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end('Welcome to the Home Page\n');
            break;
        case "/about":
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end('This is the About Page\n');
            break;
        case "/allLogs":
            fs.readFile("ActivityLog",'utf8',(err,data)=>{
                if(err){
                    res.writeHead(500,{'Content-Type':'text/plain'});
                    res.end('Error reading log file\n');
                }else{
                    res.writeHead(200,{'Content-Type':'text/plain'});
                    res.end(data);
                }
            });
            break;
        default:
            res.writeHead(404,{'Content-Type':'text/plain'});
            res.end('404 Not Found\n');
            break;

        
    }
})

server.listen(3000,()=>{
    console.log(`Server running at http://Localhost:3000/`);
})
