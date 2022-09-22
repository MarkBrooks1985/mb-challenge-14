const router = require("express").Router();
const userRoutes = require("./userRoutes");
const projectRoutes = require("./projectRoutes");

router.use("/users", userRoutes);
router.use("/blogs", blogRoutes);
router.use("/comment", commentRoutes);

module.exports = router;
