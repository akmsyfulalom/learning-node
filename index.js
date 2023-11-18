// local modules

const { add, a } = require('./local-1');
const {a: a2, add: add2} = require('./local-2')

const result2 = add2(20, 20,20)

// console.log(`a : ${a2} and add2: ${result2}`)


const result = add(20, 20);

// console.log(result)
// console.log(a)


// built-in-modules
const path = require('path')
console.log(path.dirname("/D:/phLevelTwo/learning-node/index.js"))
console.log(path.parse("/D:/phLevelTwo/learning-node/index.js"))
console.log(path.join("/D:/phLevelTwo/learning-node/", "local-1.js"))