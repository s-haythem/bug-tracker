const express = require('express');
const router = express.Router();
const {isAuth} = require("../middlewares/isAuth");
const { check, validationResult } = require('express-validator');

const Project = require('../Models/Project')

// @route   GET api/projects
// @desc    Get all users projects
// @access  Private
router.get('/', isAuth, async (req, res) => {
  try {
    const projects = await Project.find();
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
      const newProject = new Project({
        title,
        description,
        deliveryTime
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
router.put('/update/:id',  async (req, res) => {
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
router.delete('/delete/:id', isAuth, async (req, res) => {
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

router.put("/affect",isAuth, async (req,res)=>{
  const { project_id, user_id } = req.body;

  const project=await Project.findById(project_id);
  project.affectedTo = user_id;
  await project.save();
  res.json(project);
});
router.get("/affect/:_id", isAuth, async (req,res)=>{
  const { _id } = req.params;

  const project=await Proect.findById(_id).populate("affectedTo");
  project.affectedTo.email = undefined
  project.affectedTo.password = undefined
  delete project.affectedTo.email
  delete project.affectedTo.password
  res.json(project);
});

module.exports = router;
