const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");
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
  const { courseId } = req.params;
  const username = req.headers.username;
  try {
    await User.updateOne(
      {
        username: username,
      },
      { $push: { purchasedCourses: courseId } }
    );
  } catch (e) {
    console.log(e);
  }
  res.json({
    msg: "Purchase Complete !",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  try {
    const user = await User.findOne({
      username: req.headers.username,
    });
    const courses = await Course.find({
      _id: { $in: user.purchasedCourses },
    });
    res.json({
      PurchasedCourses: courses,
    });
  } catch (err) {
    res.sendStatus(404);
  }
});

module.exports = router;
