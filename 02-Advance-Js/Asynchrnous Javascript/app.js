// alert("asynchrnous js")

// synchronouse javascript
const para = document.getElementsByClassName(".para");
para.textContent = "this is a being murshid coding ";
// alert("this will block execution")
setTimeout(() => {
  para.textContent = "this is also block excution for 5 seconds ";
});
// and then excute this line of code

console.log("asfter excution above lines then thes line will execute ");
// para.style.color = "red";
console.log(para.length, "this is lenght of para ");

console.log(para, "logs console a elemet ");
