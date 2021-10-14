const router = require('express').Router;

const workoutRoutes = require('./workoutRoutes');

router.use('/workouts', workoutRoutes);

module.export = router;

