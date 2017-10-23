const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const Chat = require('../models/chat.js');



router.post('/adduser', (req, res) => {
  console.log(req.body);
  User.create({name: req.body.name, password: req.body.password}, (err, newUser) => {
    res.json(newUser);
  })
});

router.post('/login', (req, res) => {
  User.findOne({
    name: req.body.name,
    password: req.body.password
  }, (err, user) => {

    if(user){
      res.json({
        success: true,
        info: user
      });
    } else if(!user){
      res.json({
        success: false,
        message: 'My dear friend, you are denied entry!!!'
      })
    }
  })
})

router.post('/saveChat', (req, res) => {
  Chat.create({message: req.body.message.message, date: req.body.message.date, name:req.body.message.name}, (err, newChat) => {
    res.json(newChat);
  })
});

router.get('/getMsg', (req,res) =>{
  Chat.find({},(err, msg)=>{
    res.json(msg);
  }
)
})

module.exports = router
