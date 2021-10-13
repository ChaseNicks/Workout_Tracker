const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now,
        },
        exercises: [
            {
                name: {
                    type: String,
                    trim: true,
                    reuquired: "Please enter the name of your exercise!",
                },
                type: {
                    type: String,
                    trim: true,
                    reuquired: "Please enter your exercise type!",
                },
                distance: {
                    type: Number,
                },
                duration: {
                    type: Number,
                },
                weight: {
                    type: Number,
                },
                sets: {
                    type: Number,
                },
                reps: {
                    type: Number,
                },
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
    },
);

WorkoutSchema.virtual("totalDuration").get(function () {
    return this.exercise.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;