const express=require('express');
const router= express.Router();


// @route    POST api/profile
// @desc     Register user
// @access   Public

router.get('/',(req,res)=>res.send('profile route'));

module.exports = router;