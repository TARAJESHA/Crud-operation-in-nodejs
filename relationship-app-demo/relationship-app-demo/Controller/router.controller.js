// const router = require("express").Router();

// const { json } = require("body-parser");

// const bodyParser = require("body-parser");

// const path = require("path");

// const express = require("express");

// const app = express();

// const cors = require("cors");



// //const multer = require("multer");

// //var Jimp = require("jimp");

// //var nodemailer = require("nodemailer");

// // const bcrypt = require("bcrypt");

// const saltRounds = 10;

// const cookieParser = require("cookie-parser");

// const session = require("express-session");



// // const createCompany = require("../services/companycreate");

// const createUser = require("../services/AddNewUser");



// router.use(express.json());

// // -- MIDDLEWARE ---



// router.use(bodyParser.urlencoded({ extended: true }));



// const models = require("../models");

// const user = models.user;



// router.post("/name",async (req,res)=>{

//     try{

//         const result = await createUser.addnewuser(req.body);

//         //res.set("Content-Type", "application/json");

//         res.json(result);

//     } catch (err) {

//         res.status(406).send({

//             msg: "something went wrong please try again",

//             err: err,

//           });

//     }

// });



// router.post("/user",async (req,res)=>{

//     try{

//         const result = await createUser.adduser(req.body);

//         //res.set("Content-Type", "application/json");

//         res.json(result);

//     } catch (err) {

//         res.status(406).send({

//             msg: "something went wrong please try again",

//             err: err,

//           });

//     }

// });



// module.exports = router;