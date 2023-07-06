const User=require('../models/schemauser');
const Post=require('../models/schemapost');
const express=require('express');
const router=express.Router({ mergeParams: true });
const loginController=require('../controllers/loginController');
const passport=require('passport');
const checkLogin=require('../middleware/checkLogin');
const catchAsync=require('../middleware/catchAsync');

router.route('/register')
    .post(catchAsync(loginController.register));

router.route('/login')
    .post(loginController.login);

router.route('/verify')
    .post(catchAsync(loginController.verify));

router.route('/getUser')
    .get(loginController.getUser);

router.route('/logout')
    .get(checkLogin, loginController.logout);

router.route('/forgot')
    .post(loginController.forgot);

router.route('/reset/:token')
    // .get(loginController.renderReset)
    .post(loginController.reset);

router.route('/loginFail')
    .get((req, res, next) => {
        res.send({ error: req.flash('error') });
    })
router.route('/loginSuccess')
    .get(loginController.login)

module.exports=router;