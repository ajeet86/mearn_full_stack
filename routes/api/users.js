const express=require('express');
const router= express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');


//express router validator
const { check, validationResult } = require('express-validator');

//user model  call 
const User = require('../../models/User');


// @route    POST api/users
// @desc     Register user
// @access   Public

router.get('/',(req,res)=>res.send('user route'));

router.post('/register', [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],async(req,res)=>{
     
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password,status=1 } = req.body;

        try{
            console.log(req.body);
            let user = await User.findOne({ email });
           

            if (user) {
                return res
                  .status(400)
                  .json({ errors: [{ msg: 'User already exists' }] });
              }

                const salt = await bcrypt.genSalt(10);
                user = {
                    name,
                    email,
                    password,
                    status
                  };
                user.password = await bcrypt.hash(password, salt);
                user.status = '1';
               // console.log(user);
             let user_id=  await User.save(user);
             

                res.send('user register');
        }catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
          }

}

);


module.exports = router;