import { Console } from "console";
import express from "express";
import fs from "fs"

const app = express();
const port=3000;
app.use(express.json());
const mysecrettoken=123;

app.use((req,res,next)=>{
    let message=`User login at ${Date.now.toString()}\n`;
    fs.appendFileSync("log.txt",message);
    next();
})
app.use((req,res,next)=>{
    console.log("First middleware accessed");
    next();
});

const AuthMiddleware = (req,res,next) => {
    const token = req.header("Authorization");
    console.log(typeof(token));
    if(token !== "123"){
        return res.status(401).send("Unauthorized");
    }
    console.log("Auth middleware accessed");
    next();
}

app.get("/students",AuthMiddleware,(req,res)=>{
    try {
        const students=fs.readFileSync("students.json","utf8");
        res.status(200).send(students)
    } catch (error) {
        console.log(error.message);
    }
    
})


app.listen(port,()=>{
    console.log(`app is listening at Localhost:${port}`)
})