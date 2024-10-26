import path from 'path'
import url from 'url'

const filePath = 'dir2/dir1/text.txt'

// basename
console.log(path.basename(filePath))

// dirname 
console.log(path.dirname(filePath))

// extname 
console.log(path.extname(filePath))

//parse
console.log(path.parse(filePath))

// name 
console.log(path.normalize(filePath))

// const  __filename = url.fileURLToPath(import.meta.filename)
// const __dirname  = path.dirname(__filename)
// console.log(__dirname, __filename)

// join
// const filePath2 = path.join(__dirname , "dir2", 'dir1', "test2.txt")
// console.log(filePath2)