let str = '{"name":"John", "age":30, "car":null}';

let data = JSON.parse(str); //json.parse s used to convert json in to js object
let personName = data.name;
let personAge = data.age;

// console.log(personName);
const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj = JSON.parse(text);
obj.birth = new Date(obj.birth);

// console.log(obj.birth);

const text1 =
  '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';
const obj2 = JSON.parse(text1);
obj2.age = eval("(" + obj2.age + ")");

// console.log(obj2.age);

const mydata = { name: [1, 2, 3, 4], fnames: ["essa", "abbas"] };

const myjson = JSON.stringify(mydata);
localStorage.setItem("testitem", myjson);

const text2 = localStorage.getItem("testitem");
// console.log(text2);
const text3 = JSON.parse(text2);
// console.log(text3);
document.getElementById("demo").innerHTML = text3.fnames[0];





// Without strict mode
function withoutStrictMode() {
  x = 10; // No error, but x is now a global variable
  console.log(x); // 10
}

withoutStrictMode();
console.log(x); // 10 (x is accessible outside the function, which is not intended)
