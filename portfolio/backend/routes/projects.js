const router = require("express").Router();
let Project = require("../models/project");

router.route("/").get((req, res) => {
  Project.find()
    .then((projects) => res.json(projects))
    .catch((err) => err.status(400).json(`Error: ${err}`));
});

router.route("/").post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const link = req.body.link;
  const newProject = new Project({ title, description, link });
  newProject
    .save()
    .then(() => res.json("Project Added"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/update/:id").post((req, res) => {
  let id = req.params.id;
  Project.findByIdAndUpdate(
    { _id: id },
    {
      title: req.body.title,
      description: req.body.description,
      link: req.body.link,
    }
  )
    .then(() => res.json("Project Updated"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/:id").delete((req, res) => {
  let id = req.params.id;
  Project.findByIdAndDelete(id)
    .then(() => res.json("Project deleted"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
