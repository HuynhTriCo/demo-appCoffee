// const User = require('../models/users')
// const bcrypt=require('bcrypt')

// exports.checkUsers=(req,res,next)=>{
//     User.findOne({fingerPrint: req.body.fingerPrint},(err,user)=>{
//         if(user===null){//check fingerPrint out or not 
//             if(err)
//                 return next(err);
//             const currentUser= new User(req.body);
//             currentUser.save((err,result)=>{
//                 if(err){
//                     return res.json({err})
//                 }
//                 res.json({user:result});
//             })
//         }else{
//             return;
//         }
//     })
// }