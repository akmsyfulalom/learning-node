const fs = require("fs")


// reading a file text 
const readtext = fs.readFileSync('./texts/read.txt', 'utf-8')

// console.log(readtext)



// writing 

const writtenText = fs.writeFileSync("./texts/write.txt",readtext + "this is my written text ")

console.log(writtenText)