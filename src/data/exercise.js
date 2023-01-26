const schedule = [
  {
    index: 1,
    name: "Monday",
    exercise: "chest exercise",
    timing: "6:00-7:30",
  },
  {
    index: 2,
    name: "Tuesday",
    exercise: "lat exercise",
    timing: "6:00-7:00",
  },
  {
    index: 3,
    name: "Wednesday",
    exercise: "shoulder exercise",
    timing: "6:00-7:30",
  },
  {
    index: 4,
    name: "Thursday",
    exercise: "Rest",
    timing: "6:00-8:00",
  },
  {
    index: 5,
    name: "Friday",
    exercise: "Bie-Tri exercise",
    timing: "6:00-8:00",
  },
  {
    index: 6,
    name: "saturday",
    exercise: "leg exercise",
    timing: "6:00-7:30",
  },
  {
    index: 7,
    name: "Sunday",
    exercise: "Rest",
    timing: "6:00-8:00",
  },
];
const chestExercise = [
  {
    name: "Bench Press",
    set: "3",
    rep: "15",
    weight: [10, 15, 20],
    image:
      "https://lapraac.org/wp-content/uploads/2018/09/204-2047074_man-doing-the-bench-press-exercise-royalty-free-vector-bench-press-clip.png.jpg",
  },
  {
    name: "Inclined Press",
    set: "3",
    rep: "15",
    weight: [10, 15, 20],
    image: "https://www.bodysolid.com/resources/images/InclinePress.png",
  },
  {
    name: "Declined Press",
    set: "3",
    rep: "15",
    weight: [10, 15, 20],
    image: "https://i.ytimg.com/vi/XTq4ketkcUA/maxresdefault.jpg",
  },
  {
    name: "Fly",
    set: "3",
    rep: "15",
    weight: [10, 15, 20],
    image:
      "https://.org/wp-content/uploads/2018/09/204-2047074_man-doing-the-bench-press-exercise-royalty-free-vector-bench-press-clip.png.jpg",
  },
];

const latExercise = [];
const shoulderExercise = [];
const biTriExercise = [];
const legExercise = [];

export default {
  schedule,
  chestExercise,
  latExercise,
  shoulderExercise,
  biTriExercise,
  legExercise,
};
