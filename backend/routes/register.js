const express = require("express")
const cors = require('cors')
const router = express.Router();
const User = require('../models/user.js')
// const app = express();
// app.use(cors())
// app.use(express.json())
router.use(cors())
router.use(express.json())

router.get('/', (req, res) => {
  res.send('Hello!')
})


router.post("/", async (req,res)=>{
  console.log(req.body)
  try{
  const user = User(req.body); 
  await user.save()
  res.json({ status: 'ok'})
  }
	 catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
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
})

module.exports=router
