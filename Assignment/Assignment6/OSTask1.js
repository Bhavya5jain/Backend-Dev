const os = require('os');
const fs = require('fs');
setInterval(() => {

    log = `date & time: ${new Date().toLocaleString()}
        timeuptime: ${(os.uptime()/3600).toFixed(2)} hours
        Total Memory: ${(os.totalmem() / (1024*1024)).toFixed(2)} MB
        Free Memory: ${(os.freemem() / (1024*1024)).toFixed(2)} MB
        Platform: ${os.platform()}
        CPU Architecture: ${os.arch()}
        model: ${os.cpus()[0].model}
        ----------------------------------------------------------------
    `;

    fs.appendFile('os_Log.txt',log, (err)=>{
        if(err){
            console.error("Failed to write to log file:", err);
        }
    })
}, 5000);