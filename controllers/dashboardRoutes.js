const router = require("express").Router();
const { Blog } = require("../models");
const withAuth = require("../utils/auth");

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      where: {
        // check if id or userid
        user_id: req.session.user_id,
      },
    });

    // Serialize data so the template can read it
    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    console.log(blogs);
    // Pass serialized data and session flag into template
    res.render("blog", {
      layout: "dashboard",
      blogs,
    });
  } catch (err) {
    console.log(err);
    res.redirect("login");
  }
});

router.get("/newBlog", withAuth, (req, res) => {
  res.render("newBlog", {
    layout: "dashboard",
  });
});

router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findAll(req.params.id);

    // Serialize data so the template can read it

    if (blogData) {
      const blog = blogData.get({ plain: true });

      res.render("editblog", {
        layout: "dashboard",
        blog,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect("/login");
  }
});

module.exports = router;
