const router = require("express").Router();
const db = require("../../models");

router.get("/", async ({ res }) => {
  try {
    const dbWorkouts = await db.Workout.find({});
    console.log(dbWorkouts[dbWorkouts.length - 1].totalDuration)
    res.json(dbWorkouts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const dbUpdatedWorkout = await db.Workout.findByIdAndUpdate(
      req.params.id,
      {
        $push: { exercises: req.body },
      },
      {
        new: true,
        runValidators: true,
      }
    );
    res.json(dbUpdatedWorkout);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", async ({ body }, res) => {
  try {
    const dbNewWorkouts = await db.Workout.create(body);
    res.json(dbNewWorkouts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/range", async ({ res }) => {
  try {
    const dbWorkouts = await db.Workout.find({});
    res.json(dbWorkouts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
