const express=require('express');
const router=express.Router();
const captainController=require("../controllers/captain.controller");
const {body}=require('express-validator');
const authMiddleweare=require("../middlewares/auth.middlewares");

router.post("/register",[
    body(`email`).isEmail().withMessage("Invalid Email"),
    body(`fullname.firstname`).isLength({min:3}).withMessage("first name must be atleast 3 character"),
    body(`password`).isLength({min:6}).withMessage('password must be at least 6 character'),
    body(`vehicle.color`).isLength({min:3}).withMessage(`color must be at least 3 chars`),
    body(`vehicle.plate`).isLength({min:3}).withMessage('plate must be at least 3 char'),
    body(`vehicle.capacity`).isInt({min:1}).withMessage('capacity must be atleast 1 '),
    body(`vehicle.vehicleType`).isIn(['car','motorcycle','auto']).withMessage('Invalid'),
    
],
captainController.registerCaptain
)

router.post("/login",[
    body('email').isEmail().withMessage('Invalid emial'),
    body('password').isLength({min:6}).withMessage('password must be atleast 6 character long'),
],
captainController.loginCaptain)

router.get("/profile",authMiddleweare.authCaptain,captainController.getCaptainProfile)

router.get('/logout',authMiddleweare.authCaptain,captainController.logoutCaptain)

module.exports=router;