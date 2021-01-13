const GENDERS = require("./constants.js");

const student1 = {
  name: "Colin",
  id: 0,
  age: 40,
  gender: GENDERS.MALE,
  grade: 80,
  partners: [
    {
      id: 1,
      pairings: 2,
    },
    {
      id: 3,
      pairings: 1,
    },
  ],
};

const student2 = {
  name: "Mesi",
  id: 1,
  age: 24,
  gender: GENDERS.FEMALE,
  grade: 100,
  partners: [
    {
      id: 0,
      pairings: 2,
    },
    {
      id: 2,
      pairings: 1,
    },
  ],
};

const student3 = {
  name: "Anthony",
  id: 2,
  age: 39,
  gender: GENDERS.MALE,
  grade: 90,
  partners: [
    {
      id: 3,
      pairings: 2,
    },
    {
      id: 1,
      pairings: 1,
    },
  ],
};

const student4 = {
  name: "Elvis",
  id: 3,
  age: 29,
  gender: GENDERS.MALE,
  grade: 75,
  partners: [
    {
      id: 0,
      pairings: 1,
    },
    {
      id: 3,
      pairings: 2,
    },
  ],
};

console.dir({
  student1,
  student2,
  student3,
  student4,
});
