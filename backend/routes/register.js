const express = require("express")
const cors = require('cors')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/user.js')
// const app = express();
// app.use(cors())
// app.use(express.json())
router.use(cors())
router.use(express.json())

router.get('/', (req, res) => {
  res.send('Hello!')
})


router.post("/", [
    body('fname', 'Enter a valid name').isLength({ min: 2 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a valid password').isLength({ min: 3 }),
  ],
   async (req,res)=>{
  console.log(req.body)
    try{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    await User.create({
        fname: req.body.fname,
        email: req.body.email,
        password: req.body.password,
    }).then(user => res.json({ status:'ok'}));
    }
   catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
  })
  // try{
  // const user = User(req.body); 
  // await user.save()
  // res.json({ status: 'ok'})
  // }
 //  try {
	// 	await User.create({
	// 		fname: req.body.fname,
	// 		email: req.body.email,
	// 		password: req.body.password,
	// 	})
	// 	res.json({ status: 'ok' })
	// } catch (err) {
	// 	res.json({ status: 'error', error: 'Duplicate email' })
	// }


module.exports=router
