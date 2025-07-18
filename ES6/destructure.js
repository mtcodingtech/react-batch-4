let id = 1;
let productName = "Product 1";
let rating = 5;

// const product = {
//     id: id,
//     productName: productName,
//     rating: rating
// }
const product = {id, productName, rating};

console.log(product);

const product2 = {
    ...product,
    description: "Product 2 description"
}

const {description} = product2;
console.log(description)

// ************************************

let arrayItems = [1, 2, 3, 4, 5];
const [item1, item2, ...rest] = arrayItems;
console.log(item1)
console.log(rest[0])
