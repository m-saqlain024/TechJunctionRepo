// import fs from "fs";
import fs from "fs/promises";

// readFile -callback
// fs.readFile("./text.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// const data =  fs.readFileSync('./text.txt')
// console.log(data)

// readFile async / then
// fs.readFile("./text.txt")
//   .then((data) => console.log(data.toString()))
//   .catch((err) => console.log(err));

//   fs.rename('./text.txt' , './test.txt')  to change name of file

// readFile async / await
const readFile = async () => {
  try {
    const data = await fs.readFile("./test.txt" , 'utf8');
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};




// writing a file 


const writeFile = async()=>{
    try {
        await fs.writeFile('./text.txt', "hello i am muhammad saqlain")
        console.log('file is a written')
    } catch (error) {
        console.log(error , "")
    }
}

// writeFile()


const appendFile = async()=>{
    try {
        await fs.writeFile('./text.txt', "hello i am muhammad saqlain")
        console.log('file is a written')
    } catch (error) {
        console.log(error , "")
    }
}


appendFile()
readFile()
