const router = require("express").Router();

const blogRoutes = require("./blogRoutes");
const commentRoutes = require("./commentRoutes");
const userRoutes = require("./userRoutes");

router.use("/", blogRoutes);
router.use("/", commentRoutes);
router.use("/", userRoutes);

module.exports = router;
