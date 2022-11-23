const express = require('express');
const {ObjectId} =  require('mongodb');
const studentModule =  require('../models/studentModel');

exports.getAllStudent = async(req, res) =>{
try{
const result = await studentModule.find({});
res.json({success:1, data: result})
}catch(e){
    res.json({success: 0, error:'can not get all student'});
}
}

exports.getStudentById = async(req, res)=>{
    try{
        const result = await studentModule.findById(req.params.std_id);
        res.json({success:1, data: result})
        }catch(e){
            res.json({success: 0, error:'can not get student'});
        }  
}

exports.addStudent = async (req,res)=>{
    try{
        const result = await new studentModule(req.body).save();
        // const result = await studentModule.create(req.body);
        res.json({success:1, data: result})
        }catch(e){
            res.json({success: 0, error:'can add student'});
        }
}

exports.updateStudent = async(req,res) =>{
    try{
        const{email, first_name, last_name, avatar} = req.body;
        const result = await studentModule.updateOne(
            {_id: new ObjectId(req.params.std_id)},
            {$set:{email, first_name, last_name, avatar}}
        );
        
        res.json({success:1, data: result})
        }catch(e){
            res.json({success: 0, error:'can not update student'});
        }  
}

exports.deleteStudent = async(req,res) =>{
    try{
        const result = await studentModule.deleteOne({_id: ObjectId(req.params.std_id)});
        res.json({success:1, data: result})
        }catch(e){
            res.json({success: 0, error:'can not delete student'});
        }  
}