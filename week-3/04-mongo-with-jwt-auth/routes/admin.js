const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index");

const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  try {
    const username = req.body.username;
    const password = req.body.password;

    const adminExists = await Admin.findOne({
      username,
      password,
    });
    if (adminExists) {
      res.json({
        msg: "User already exists",
      });
    } else {
      await Admin.create({
        username,
        password,
      });

      res.json({
        msg: "Admin created successfully",
      });
    }
  } catch (err) {
    res.sendStatus(404);
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signin logic
  const username = req.body.username;
  const password = req.body.password;
  const adminExists = await Admin.findOne({
    username,
    password,
  });
  if (adminExists) {
    const token = jwt.sign(
      {
        username,
      },
      jwtPassword
    );
    res.json({
      token,
    });
  } else {
    res.status(411).json({
      msg: "Incorrect username or password",
    });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  try {
    const newCourse = await Course.create(req.body);

    res.json({
      msg: "Course created successfully",
      courseId: newCourse._id,
    });
  } catch (err) {
    res.sendStatus(404);
  }
});
router.get("/courses", adminMiddleware, async (req, res) => {
  // Admin bhai ke lie Implement fetching all courses logic both published and non published
  try {
    const courses = await Course.find({});
    res.json({ courses });
  } catch (err) {
    res.sendStatus(404);
  }
});
module.exports = router;
