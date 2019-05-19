const express=require('express');
const path =require('path');
const exphbs=require('express-handlebars');
const logger=require('./middleware/logger');
const members=require('./Members');
const app=express();



//init middleware
//app.use(logger);

//HandleBars middleware
// Register `hbs.engine` with the Express app.
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');
//Body Parser MiddleWare
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Homepage Route
app.get('/',(req,res)=>res.render('index',{
    title:'Member App',
    members
})); 

//to route
// app.get('/',(req,res)=>{
//     //res.send(`<h1>Hello World!!</h1>`);
//     res.sendFile(path.join(__dirname,'public','index.html'));
// });

//set static folder
app.use(express.static(path.join(__dirname,'public')));

//Members API Routes
app.use('/api/members',require('./routes/api/members'));

const PORT=process.env.PORT|5000;//when we deploy server will not run on 5000 

app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));