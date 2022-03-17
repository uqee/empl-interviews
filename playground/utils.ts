const fs = require('fs')

export const arrayDeduplicate = (array) => Array.from(new Set(array))
export const fileRead = (filename) => fs.readFileSync(filename).toString()
export const fileWrite = (filename, string) => fs.writeFileSync(filename, string)
export const intParse = (int) => parseInt(int, 10)
