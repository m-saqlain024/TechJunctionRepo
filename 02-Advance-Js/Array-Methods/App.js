// alert("hello world");

const arr = new Array("saqlain", "imran", "wajje");
// console.log(arr, "log arr using new key word");

let arr2 = ["abbas", "kiyan", "hussan", "hussain"];
// console.log(arr2, "simple arr");

arr2[1] = "kiyan abbas";

// console.log(arr2, "logs change values");

let str = arr2.toString();

let str2 = "this is a string literals ";

let str3 = str + " " + str2;

// console.log(typeof arr2, "logs type");

let myArray = [];
function myFun(a, b) {
  return a + b;
}
let myCars = ["corrolla", "suzuki", "chichi"];

myArray[0] = Date.now();
myArray[1] = myFun(12, 13);
myArray[2] = myCars;

// console.log(myArray.length, "logs array");

let lengtharr = myArray[2];

// console.log(lengtharr, "logs last element of the array");

console.log(Array.isArray(myArray), "checking array");
