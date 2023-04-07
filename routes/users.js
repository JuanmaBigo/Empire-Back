import express from 'express';
import read_all_controller from '../controllers/users/read_all.js'
import controller from '../controllers/auth/auth.js'
import validator from './../middlewares/validator.js'
import schema from '../schemas/users.js'
import schemaSignin from '../schemas/userSignin.js'
import accountExistsSignUp from './../middlewares/accountExistsSignUp.js'
import accountExistsSignIn from './../middlewares/accountExistsSignIn.js'
import passwordIsOk from './../middlewares/passwordIsOk.js'
import passport from './../middlewares/passport.js'

const {read_all} = read_all_controller

const {sign_up,sign_in,sign_out,token} = controller

let router = express.Router();

/* GET users listing. */
router.get('/', read_all);

router.post('/signup',validator(schema),accountExistsSignUp,sign_up)
router.post('/signin',validator(schemaSignin),accountExistsSignIn,passwordIsOk,sign_in)
router.post('/signout',passport.authenticate('jwt',{ session:false }),sign_out)
router.post('/token',passport.authenticate('jwt',{ session:false }),token)


export default router;
