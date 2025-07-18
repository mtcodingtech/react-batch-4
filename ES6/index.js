const result1 = false;
let result2 = true;
// console.log(false || true)

function getName(name = "personName") {
    return `Hello, ${name}`
}

console.log(getName("MT"))
console.log(getName("AMK"))
console.log(getName("PKP"))

console.log(false || getName("MT"))

// *****************************************

// ternary operator
let fruit = "Orange";

// if (fruit === "apple") {
//   console.log("apple");
// }else if(fruit === "orange"){
//     console.log("orange")
// }else{
//     console.log("Other fruit")
// }

let result =
  fruit === "apple"
    ? console.log("apple")
    : fruit === "Orange"
    ? console.log("orange")
    : console.log("Other fruit");
