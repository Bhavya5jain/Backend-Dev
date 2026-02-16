import express from 'express';
import fs from 'fs';
import path from 'path';


const app = express();
app.use(express.urlencoded());
app.set("view engine","ejs");

const data = JSON.parse(fs.readFileSync("students.json","utf8"))

app.get("/",(req,res)=>{
    
    const data = JSON.parse(
        fs.readFileSync("students.json","utf8")
    );
    console.log("data: ",data);
    res.render("form",{allStudent: data,
        totalStudent: Object.keys(data).length
    });
})


app.post("/student/register",(req,res)=>{
    const {Name,Branch}=req.body;
    console.log(Name,Branch)
    console.log(req.body);
    const data = JSON.parse(fs.readFileSync("students.json","utf8"))
    data.push({Name,Branch});
    fs.writeFileSync("students.json",JSON.stringify(data));
    res.redirect("/");
})

app.listen(8000,(req,res)=>{
    console.log(`Server is running on http://localhost:8000`);
})