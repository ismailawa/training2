//JSON  Javascript Object Notation

// Key Value pair

const student1 = {
  // key          value
  firstName: 'Salisu',
  lastName: 'Mohammad',
  age: 18,
  gender: 'Male',
  address: 'Sunnah lab',
};
// const student2 = {
//   // key          value
//   firstName: 'Fatima',
//   lastName: 'Mohammad',
//   age: 18,
//   gender: 'Female',
//   address: 'Sunnah lab',
// };

const students = [
  {
    firstName: 'Salisu',
    lastName: 'Mohammad',
    age: 18,
    gender: 'Male',
    address: 'Sunnah lab',
  },
  {
    firstName: 'Fatima',
    lastName: 'Mohammad',
    age: 18,
    status: true,
    gender: 'Female',
    address: 'Sunnah lab',
    marks: [40, 50, 80, 20, 10],
    friends: ['salma', 'hauwa'],
  },
];
const students2 = [
  {
    firstName: 'Maryam',
    lastName: 'Mohammad',
    age: 18,
    gender: 'Male',
    address: 'Sunnah lab',
  },
  {
    firstName: 'Hafeez',
    lastName: 'Mohammad',
    age: 18,
    status: true,
    gender: 'Female',
    address: 'Sunnah lab',
    marks: [40, 50, 80, 20, 10],
    friends: ['salma', 'hauwa'],
  },
];

// const salisu = students[0];
// const fatima = students[1];

// console.log(salisu.firstName, salisu.lastName, salisu.age, salisu.gender);
// console.log(fatima.firstName, fatima.lastName, fatima.age, fatima.gender);

// students.forEach((student) => {
//   const fullName = student[firstName] + ' ' + student.lastName;
//   console.log(fullName);
// });

const combine = students.concat(students2);

console.log(combine);

const keys = Object.keys(students[1]);

console.log(keys);

keys.forEach((key) => {
  console.log(students[1][key]);
});
