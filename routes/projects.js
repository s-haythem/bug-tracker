const express = require('express');
const router = express.Router();
const auth = require('../middlewares/isAuth');
const { check, validationResult } = require('express-validator');



const Project = require('../Models/Project')

// @route   GET api/projects
// @desc    Get all users projects
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const projects = await Project.find({ user: req.user.id });
    res.json(projects);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/projects
// @desc    Add new project
// @access  Private
router.post(
  '/add',
  [
    auth,
    [
      check('title', 'Title is required').not().isEmpty(),
      check('description', 'Description is required').not().isEmpty(),
      check('deliveryTime', 'deliveryTime is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, description, deliveryTime } = req.body;

    try {
      const newBug = new Bug({
        title,
        description,
        deliveryTime,
        user: req.user.id,
      });

      const project = await newProject.save();

      res.json(project);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   PUT api/projects/:id
// @desc    Update project
// @access  Private
router.put('/:id', auth, async (req, res) => {
  const { title, description, deliveryTime } = req.body;

  // Build project object
  const projectFields = {};
  if (title) bugFields.title = title;
  if (description) bugFields.description = description;
  if (deliveryTime) bugFields.deliveryTime = deliveryTime;
  

  try {
    let project = await Project.findById(req.params.id);

    if (!project) return res.status(404).json({ msg: 'project not found' });

    

    project = await Project.findByIdAndUpdate(
      req.params.id,
      {
        $set: projectFields,
      },
      { new: true }
    );
    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/projects/:id
// @desc    Delete project
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let project = await Project.findById(req.params.id);

    if (!project) return res.status(404).json({ msg: 'project not found' });


    await Project.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Project removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
