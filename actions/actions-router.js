const router = require("express").Router();

const Actions = require("./actions-model");

router.get("/:id", async (req, res) => {
  try {
    const action = await Actions.find(req.params.id);
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