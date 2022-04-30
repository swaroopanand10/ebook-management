const express = require('express')
const cors = require('cors')
const router = express.Router()
const { body, validationResult } = require('express-validator')
const User = require('../models/user.js')
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')
var fetchuser = require('../middleware/fetchuser');
// const app = express();
// app.use(cors())
// app.use(express.json())
router.use(cors())
router.use(express.json())

const JWT_SECRET= 'ebook';

router.get('/register', (req, res) => {
  res.send('Hello!')
})

//registering a user
router.post(
  '/register',
  [
    body('fname', 'Enter a valid name').isLength({ min: 2 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a valid password').isLength({ min: 3 })
  ],
  async (req, res) => {
    console.log(req.body)
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }

      let user = await User.findOne({ email: req.body.email })
      if (user) {
        return res
          .status(400).json({ error: 'Sorry a user with this email already exists' })
      }
      const salt = await bcrypt.genSalt(10)
      const secPass = await bcrypt.hash(req.body.password, salt)
      user = await User.create({
        fname: req.body.fname,
        email: req.body.email,
        password: secPass 
      })

      const data = {
        user: {
          id: user.id
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET)
      res.json({ authtoken })
     // .then(user => res.json({ status: 'ok' }))
    } catch (error) {
      // res.json({ status: 'error', error: 'Duplicate email' })
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
)

//authenticating a user
router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
  let success = false;
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      success = false
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      success = false
      return res.status(400).json({ success, error: "Please try to login with correct credentials" });
    }

    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success, authtoken })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//middleware (didn't understanded it correctly for now)
router.post('/getuser', fetchuser,  async (req, res) => {

  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})
module.exports=router
