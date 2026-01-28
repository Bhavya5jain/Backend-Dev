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

server.listen(3000, () => {
  console.log("Server started on port 3000");
});

/*
const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {

  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const { name, email } = parsedUrl.query;

  switch (pathname) {

    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>Welcome to Home Page</h1>");
      break;

    case "/about":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(
        `<h1>About Us</h1>
         <p>Hello I am ${name || "Guest"}</p>
         <p>Email: ${email || "Not provided"}</p>`
      );
      break;

    case "/contact":
      const user = {
        id: 1,
        name: "Satvik",
        contact: "7080809670"
      };

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(
        `<h1>Contact Us</h1>
         <p>Contact: ${user.contact}</p>`
      );
      break;

    case "/alllogs":
      fs.readFile("./activity.log", "utf-8", (err, data) => {
        if (err) {
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end("No logs found");
        } else {
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end(data);
        }
      });
      break;

    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 Page Not Found</h1>");
  }
});

server.listen(3000, () => {
  console.log("Server started on port 3000");
});
*/


// const os = require('os');

// console.log("Operating System Info:");
// const totalMem = os.totalmem() / (1024*1024*1024); // converting bytes to GB
// const freeMem = os.freemem() / (1024*1024*1024);

// const platform = os.platform(); // current os ka naam

// const cpus = os.cpus(); // array of objects
// console.log(`Total Memory: ${totalMem.toFixed(2)} GB`);
// console.log(`Free Memory: ${freeMem.toFixed(2)} GB`);
// console.log(`Platform: ${platform}`);
// console.log(`CPU Count: ${cpus.length}`);
// console.log("CPU Details:", cpus);

// const userInfo = os.userInfo();
// console.log("User Info:", userInfo);
// // home directory, username, shell etc

// const uptime = os.uptime(); // in seconds
// console.log(`System Uptime: ${(uptime/3600).toFixed(2)} hours`);


// const fs = require('fs');


// fs.copyFile('source.txt', 'destination.txt', (err) => {
//     if (err) {
//         console.log("Error copying file:");
//     } else {
//         console.log("File copied successfully!");
//     }
// });

// fs.copyFileSync('source_sync.txt', 'destination_sync.txt');
// console.log("File copied successfully using synchronous method!");



// fs.unlink("destination_sync.txt",(err)=>{
//     if(err){
//         console.log("inner Error deleting file:");
//     }else{
//         console.log("File deleted successfully!");
//     }
// })

// fs.unlinkSync("destination.txt");
// console.log("File deleted successfully using synchronous method!");


// fs.appendFileSync('source.txt', '\nAppended using updateFile method.', (err) => {
//     if (err) {
//         console.log("Error updating file:");
//     } else {
//         console.log("File updated successfully!");
//     }   
// });

// fs.mkdir('new_directory',(err) => {
//     if (err) {
//         console.log("Error creating directory:");
//     } else {
//         console.log("Directory created successfully!");
//     }   
// });

// fs.mkdir('folder1/folder2/folder3', { recursive: true }, (err) => {
//     if (err) {
//         console.log("Error creating nested directories:");
//     } else {
//         console.log("Nested directories created successfully!");
//     }
// });

// fs.rmdir('new_directory', (err) => {
//     if (err) {
//         console.log("Error deleting directory:");
//     } else {
//         console.log("Directory deleted successfully!");
//     }
// });

// fs.rmdir('folder1', { recursive: true }, (err) => {
//     if (err) {
//         console.log("Error deleting nested directories:");
//     } else {
//         console.log("Nested directories deleted successfully!");
//     }
// });
