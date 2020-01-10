// let write = require("./module1")
// write.writeText("Хаюшки бро!")

const fs = require("fs")

// const fd = fs.openSync('123.txt', 'w+')

fs.appendFileSync("mess.txt", "\nА это строку мы записываем \n")
let fileReaded = fs.readFileSync("123.txt", "utf8")

console.log(`Содержание файла:
${fileReaded}`)
