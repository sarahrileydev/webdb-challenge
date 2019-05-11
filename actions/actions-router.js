const router = require("express").Router();

const Actions = require("./actions-model");

router.get("/", (req, res) => {
  Actions.find()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: " we ran into error retrieving the action" });
    });
});

router.post("/", async (req, res) => {
  const action = req.body;
  if (action.action_description) {
    try {
      const inserted = await Actions.add(action);
      res.status(201).json(inserted);
    } catch (error) {
      res
        .status(500)
        .json({ message: "We ran into an error creating the action" });
    }
  } else {
    res
      .status(400)
      .json({ message: "Please provide description of the action" });
  }
});


module.exports = router;
