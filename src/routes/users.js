const express=require('express');
const router=express.Router();
//const User = require('../models/users')
//const {checkUsers} =require('../controllers/userCtrls')
const {User}= require('../models/users')


//router.post('/check-user',checkUsers);

router.get("/current/:id",async(req,res)=>{
    console.log(res.query)
    var id=req.params.id;
    let user = await User.find(()=>{
      return res.body._id===parseInt(id);
    })
    if(user)
      res.send(user.fingerPrint)
    else
      return res.status(404).send('no have account!!');
    // let user =await User.findOne({_id:req.body._id});
    // if(user)
    //     return res.send(user._id)
    // else 
    //     return res.status(404).send('no have account!!');
});

router.route("/list").get(function(req, res) {
    User.find({}, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });

router.post("/",async(req,res)=>{
    let user= await User.findOne({fingerPrint:req.body.fingerPrint});
    if(user)
        return res.status(400).send("User existed!!")
    user=new User({
        fingerPrint:req.body.fingerPrint,
    })
    await user.save();
    res.header().send({
        _id:user._id,
    })
})

module.exports= router;