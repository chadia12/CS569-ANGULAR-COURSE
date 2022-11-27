const express =  require('express');
const userModele = require("../models/usersModel");
const bcrypt = require("bcrypt");
const saltRounds = 5;
const jwt = require('jsonwebtoken')

const {PRIVATE_KEY} = require('../config.json')

exports.login = async (req, res, next) => {
  try {
    //receive username & password from body
    const { email, password} = req.body;
    //find user & compare the password
    const user = await userModele.findOne({email})
    if(!user) throw new Error('user not found')
   const match = bcrypt.compare(password, user.password )
   if(!match) throw new Error('wrong password') 
   //generate Jwt
   const token = {...user, password:'***'}
   const tokenHah = jwt.sign(token, PRIVATE_KEY);
    res.json({ success: true, data: tokenHah });
  } catch (e) {
    next(e)
  }
};

exports.signup = async (req, res, next) => {
  try {
    //receive data from body
    console.log(req.file);
    const { email, fullname, password} = req.body;
    // hash the password
    const hash = await bcrypt.hash(password, saltRounds)
    // persist the user
    const result = await userModele.create({...req.body, password:hash, avatar: req.file.filename})
    
    res.json({success:true ,data:{}});
  } catch (e) {
    next(e)
  }
};
