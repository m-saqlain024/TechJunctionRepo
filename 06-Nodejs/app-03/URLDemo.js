import url, { fileURLToPath, URLSearchParams } from "url"

const urlString = 'https://www.google.com/search?q=hello+world'

// url object 
const urlObject = new URL(urlString)
console.log(urlObject)

// format 
console.log(url.format(urlString))

// Import.meta.url
console.log(import.meta.url)

// filePathToURL
console.log(url.fileURLToPath(import.meta.url))


const params = new URLSearchParams(urlObject.search)
console.log(params.get('q'))
console.log(params.append('limit ' , '5'))
// console.log(params.get('limit'))
console.log(params.delete('limit'))
console.log(params)