const express = require('express');
const fs = require("fs");
const app = express();
const port = 3000;
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// CRUD OPERATIONS

app.get('/student/:id',(req,res)=>{
    try {
        const data = JSON.parse(fs.readFileSync("students.json","utf8"));
        if(!data){
            res.status(404).json({success:false,message:"Data not found"});
        }
        const id =Number(req.params.id);
        const user=data.find(u => u.id === id);
        console.log(user);
        if(!user){
            res.status(404).send("user not present")
        }
        res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
    }
})

app.post("/student/register",(req,res)=>{
    try {
        const newStudent=req.body;
        const data = JSON.parse(fs.readFileSync("students.json","utf8"));
        if(!data){
            res.status(404).json({success:false,message:"Data not found"});
        }
        data.push(newStudent);
        fs.writeFileSync("students.json",JSON.stringify(data));
        res.status(200).json({success:true,message:"student successfully added"})
    } catch (error) {
        if(error){
            res.status(500).json({success:false,message:error.message});
        }
    }
})

app.put("/student/:id",(req,res)=>{
    try {
    const id = req.params.id;
    const newData=req.body;
    const data = JSON.parse(fs.readFileSync("students.json","utf8"));
    if(!data){
        res.status(404).json({success:false,message:"Data not found"});
    }
    const idx = data.findIndex(u => u.id === id);
    data[idx]={...data[idx],...newData};
    fs.writeFileSync("students.json",JSON.stringify(data));
    res.status(200).json({success:true,message:"student successfully updated"})
    } catch (error) {
        if(error){
            res.status(500).json({success:false,message:error.message});
        }
    }
})

app.delete("/student/:id",(req,res)=>{
    try {
            const id = req.params.id;
            const data = JSON.parse(fs.readFileSync("students.json","utf8"));
             if(!data){
                res.status(404).json({success:false,message:"Data not found"});
            }
            const idx = data.findIndex(u => u.id === id);
            data.splice(idx,1);
            res.status(200).json({success:true,message:"student successfully deleated"})
    } catch (error) {
        if(error){
            res.status(500).json({success:false,message:error.message});
        }
    }
})