const express = require("express");
const router = express.Router();

// GET users
router.get("/", (req, res) => {
  res.json({ message: "All users" });
});

// GET user by id
router.get("/:id", (req, res) => {
  res.json({ userId: req.params.id });
});

// POST user
router.post("/", (req, res) => {
  res.json({ message: "User created" });
});

module.exports = router;
