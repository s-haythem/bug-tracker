const express = require("express");
const router = express.Router();
let User = require("../Models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {isAuth} = require("../middlewares/isAuth");
const { loginValidation, validation } = require("../middlewares/validation");


//@route http://localhost:5000/api/auth/register
//@role register
//@public
router.post("/register", async (req, res) => {
  const { name, lastName, email, password, phone, address, isAdmin, role } = req.body;
  try {
    //check for exiting user
    let user = await User.findOne({ email });
    if (user) {
      return res.json({ msg: "this email is reserved" });
    }

    //creat a hashed password
    const hashedPassword = await bcrypt.hash(password, 10);

    //create a new user
    user = new User({ name, lastName, email, password: hashedPassword, phone, address, isAdmin, role });

    //save the user
    await user.save();

    /////sign in of the user
    const token = jwt.sign({ id: user._id }, process.env.PASS_TOKEN, {
      expiresIn: "7 days",
    });

    res.status(202).json({ msg: "user has been added", user, token });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

//@route http://localhost:5000/api/auth/login
//@role: login
//@public

router.post("/login", loginValidation, validation, async (req, res) => {
  const { email, password } = req.body;
  try {
    //check for exiting user
    let user = await User.findOne({ email });
    if (!user) { return res.status(400).json({ msg: "bad credantials email" })}

    //compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "bad creadantials password " });

    /////sign in of the user
    const token = jwt.sign({ id: user._id }, process.env.PASS_TOKEN, {
      expiresIn: "7 days",
    });

    res.status(202).json({ msg: "success ", token });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

//@url: http://localhost:5000/api/auth/delete/:id
//@role:delete user
//private
router.delete("/delete/:id",  async (req, res) => {
  const id = req.params.id;
  try {
    let user = await User.findByIdAndRemove(id);
    res.status(200).json({msg :"user deleted"});
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

//@url: http://localhost:5000/api/auth/edit/:id
//@role: update contact
//private
router.put("/edit/:id",  async (req, res) => {
  const id = req.params.id;

  try {
    let user = await User.findByIdAndUpdate(id, { $set: req.body })
    res.status(200).json({msg : "user updated"})
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

//@route http://localhost:5000/api/auth/user
//@role: get a user
//@access : private
router.get("/user", isAuth, async (req, res) => {
 
  const {user} = await req;
  res.status(200).json(user);
});
//@route http://localhost:5000/api/auth/all
//@role: get all users
//@access : private
router.get("/all", isAuth, async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

  module.exports = router;
