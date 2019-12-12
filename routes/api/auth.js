const express=require('express');
const router= express.Router();


// @route    POST api/auth
// @desc     Register user
// @access   Public

router.get('/',(req,res)=>res.send('auth route'));
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));

module.exports = router;