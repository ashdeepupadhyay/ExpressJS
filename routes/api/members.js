const express=require('express');
const router=express.Router();
const members=require('../../Members');//../ means outside of the folder

//Gets All Members
router.get('/',(req,res)=>{
    res.json(members);
});

//Get Single Member
router.get('/:id',(req,res)=>{
    const found=members.some(members=>members.id===parseInt(req.params.id));

    if(found){
        res.json(members.filter(members=>members.id===parseInt(req.params.id)));
    }
    else{
        res.status(400).json({msg:`No member with the id of ${req.params.id}`});
    }
});

module.exports=router;