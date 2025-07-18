const users = [
  {
    name: "Person 1",
    age: 31,
    city: "Ygn",
  },
  {
    name: "Person 2",
    age: 41,
    city: "Ygn",
  },
  {
    name: "Person 3",
    age: 52,
    city: "Mdy",
  },
];
let getAllUsers = users.map(user => {
    const {name, age, city} = user;
    return `${name} live in ${city} and age is ${age}`
})
console.log(getAllUsers)

let getAllUsersFromYgn = users.filter(user => user.city === "Ygn");
console.log(getAllUsersFromYgn)

let getUserFromYgn = users.find(user => user.city === "Ygn");
console.log(getUserFromYgn)


let getUserSome = users.some(user => user.age > 30);
console.log(getUserSome)

let getUserEvery = users.every(user => user.age > 30);
console.log(getUserEvery)