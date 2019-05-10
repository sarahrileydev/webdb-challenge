const router = require("express").Router();

const Projects = require("./projects-model");

router.get("/", (req, res) => {
  Projects.find()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "Error retrieving the projects." });
    });
});

router.get("/:id", async (req, res) => {
  try {
    const project = await Projects.find(req.params.id);
    if (action) {
      res.status(200).json(action);
    } else {
      res.status(404).json({ message: "Error retrieving the action" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving the action" });
  }
});

module.exports = router;