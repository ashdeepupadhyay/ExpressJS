const express=require('express');
const path =require('path');
const members=require('./Members');

const app=express();

//creating a middle ware
const logger=(req,res,next)=>{
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

//init middleware
app.use(logger);

//Gets All Members
app.get('/api/members',(req,res)=>{
    res.json(members);
});


//to route
// app.get('/',(req,res)=>{
//     //res.send(`<h1>Hello World!!</h1>`);
//     res.sendFile(path.join(__dirname,'public','index.html'));
// });

//set static folder
app.use(express.static(path.join(__dirname,'public')));

const PORT=process.env.PORT|5000;//when we deploy server will not run on 5000 

app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));