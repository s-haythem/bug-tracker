const express = require('express');
const router = express.Router();
const {isAuth} = require("../middlewares/isAuth");
const { check, validationResult } = require('express-validator');


const Bug = require('../Models/Bug');

// @route   GET api/bugs
// @desc    Get all users bugs
// @access  Private
router.get('/',isAuth,  async (req, res) => {
  try {
    const bugs = await Bug.find();
    res.status(200).json(bugs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST http://localhost:5000/api/bugs/add
// @desc    Add new bug
// @access  Private
router.post(
  '/add',
  
    [
      check('name', 'Name is required').not().isEmpty(),
      check('description', 'Description is required').not().isEmpty(),
      check('location', 'Location is required').not().isEmpty(),
    ],
  
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, description, priority, status, location } = req.body;

    try {
      const newBug = new Bug({
        name,
        description,
        priority,
        status,
        location,
        
      });

      const bug = await newBug.save();

      res.json(bug);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   PUT http://localhost:5000/api/bugs/update/:id
// @desc    Update bug
// @access  Private
router.put('/update/:id',  async (req, res) => {
  const { name, description, priority, status, location } = req.body;

  // Build bug object
  const bugFields = {};
  if (name) bugFields.name = name;
  if (description) bugFields.description = description;
  if (priority) bugFields.priority = priority;
  if (status) bugFields.status = status;
  if (location) bugFields.location = location;

  try {
    let bug = await Bug.findById(req.params.id);

    if (!bug) return res.status(404).json({ msg: 'Bug not found' });

    // Make sure user owns bug
    // if (bug.user.toString() !== req.user.id) {
    //   return res.status(401).json({ msg: 'Not authorized' });
    // }

    bug = await Bug.findByIdAndUpdate(
      req.params.id,
      {
        $set: bugFields,
      },
      { new: true }
    );
    res.json(bug);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE http://localhost:5000/api/bugs/delete/:id
// @desc    Delete bug
// @access  Private
router.delete('/delete/:id',  async (req, res) => {
  try {
    let bug = await Bug.findById(req.params.id);

    if (!bug) return res.status(404).json({ msg: 'Bug not found' });

    // Make sure user owns bug
    // if (bug.user.toString() !== req.user.id) {
    //   return res.status(401).json({ msg: 'Not authorized' });
    // }

    await Bug.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Bug removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


router.put("/affect",isAuth, async (req,res)=>{
  const { bug_id, user_id } = req.body;

  const bug=await Bug.findById(bug_id);
  bug.affectedTo = user_id;
  await bug.save();
  res.json(bug);
});
router.get("/affect/:_id", isAuth, async (req,res)=>{
  const { _id } = req.params;

  const bug=await Bug.findById(_id).populate("affectedTo");
  bug.affectedTo.email = undefined
  bug.affectedTo.password = undefined
  delete bug.affectedTo.email
  delete bug.affectedTo.password
  res.json(bug);
});
module.exports = router;
