const models = require('../models');
const user=models.user;
const bcrypt = require ('bcrypt');
const saltRounds = 10;

exports.addnewuser=async(req,res)=>{
    try{
        const {fname, lname, dob, patientid,  } = req;
        hash = await bcrypt.hash(temppass,saltRounds);
        const query=user.create({
            firstname:fname,
            lastname:lname,
            DateOfBirth:dob,
            patientEmailId:patientid,

        }).catch((err)=>{
            if(err){
                console.log(err);
            }
        });
        return query;


    }catch(err){
        throw err;
    }
}


