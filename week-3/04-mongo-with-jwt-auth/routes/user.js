const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");
const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  try {
    const { username, password } = req.headers;
    const UserExists = await User.findOne({
      username,
      password,
    });
    if (UserExists) {
      return res.status(409).send("User already exists");
    }

    await User.create({
      username,
      password,
    });
    res.json({
      msg: "User Created Successfully",
    });
  } catch {
    res.status(404).send("Internal Server error");
  }
});

router.post("/signin", async (req, res) => {
  // Implement user signin logic
  const { username, password } = req.headers;
  const userExists = await User.findOne({
    username,
    password,
  });
  if (userExists) {
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

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  try {
    const courses = await Course.find({ published: true });
    res.json({
      courses,
    });
  } catch (err) {
    res.sendStatus(404);
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.username;
  await User.updateOne(
    {
      username: username,
    },
    {
      $push: {
        purchasedCourses: courseId,
      },
    }
  );
  res.json({
    message: "Purchase complete!",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: req.username,
  });

  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });

  res.json({
    courses: courses,
  });
});

module.exports = router;
