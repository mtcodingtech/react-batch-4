function getFirstStringElement(arr: string[]): string {
  return arr[0];
}

// console.log(getFirstStringElement(["apple", "orange"]))
// let numbers = [1, 2, 3];
// console.log(getFirstStringElement(numbers))

// *****************************************************

function getFirstAnyElement(arr: any[]): any {
  return arr[0];
}
// console.log(getFirstAnyElement(["apple", 1, true]))

let value:any = getFirstAnyElement([2, "orange", 1, true])
value.toLowerCase();
console.log(value) // error

// *************************************************

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

let names: string[] = ["John", "Rose"];
console.log(getFirstElement(names));

let numbers: number[] = [1, 2];
console.log(getFirstElement(numbers));

let value2 = getFirstElement([10, "apple"])
value2.toLowerCase()