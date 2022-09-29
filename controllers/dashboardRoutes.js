const router = require("express").Router();
const { Blog } = require("../models/Blog");
const withAuth = require("../utils/auth");

router.get("/blog", withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      where: {
        // check if id or userid
        id: req.session.id,
      },
    });

    // Serialize data so the template can read it
    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("blog", {
      layout: "dashboard",
      blogs,
    });
  } catch (err) {
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

      res.render("edit-blog", {
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
