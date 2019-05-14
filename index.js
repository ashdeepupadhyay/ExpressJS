const express=require('express');
const path =require('path');
const members=require('./Members');
const logger=require('./middleware/logger');
const app=express();



//init middleware
//app.use(logger);

//Gets All Members
app.get('/api/members',(req,res)=>{
    res.json(members);
});

//Get Single Member
app.get('/api/members/:id',(req,res)=>{
    const found=members.some(members=>members.id===parseInt(req.params.id));

    if(found){
        res.json(members.filter(members=>members.id===parseInt(req.params.id)));
    }
    else{
        res.status(400).json({msg:`No member with the id of ${req.params.id}`});
    }
})

//to route
// app.get('/',(req,res)=>{
//     //res.send(`<h1>Hello World!!</h1>`);
//     res.sendFile(path.join(__dirname,'public','index.html'));
// });

//set static folder
app.use(express.static(path.join(__dirname,'public')));

const PORT=process.env.PORT|5000;//when we deploy server will not run on 5000 

app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));