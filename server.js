// const http = require('http')
// const hostname = '127.0.0.1'
// const port = 3000
// const fs = require("fs")
// const server = http.createServer((request, response) => {
//     response.statusCode = 200
//     response.setHeader('Content-Type', 'text/plain')
//     response.end('Hello World\n')
//     console.log(`Запрошенный адрес: ${request.url}`)
//     const filePath = request.url.substr(1)

//     fs.access(filePath, fs.constants.R_OK, err => {
//         if (err) {
//             response.statusCode = 404;
//             response.end("Resourse not found!");
//         }
//         else {
//             fs.createReadStream(filePath).pipe(response);
//         }
//     })
// })
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`)
// })

const http = require("http");
const fs = require("fs");
const express = require('express')
const app = express()
const port = 3000;
//bodyParser извлекает всю часть тела входящего потока запросов и предоставляет его на req.body
let bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

//Создаём сервер
//http.createServer(function (request, response) {
// Читает буфер как обычный текст и предоставляет результирующую строку на req.body
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});
app.post("/", (req, res) => {
    console.log("req.body= " + req.body);
    // res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    // if (req.method == "POST") {
    console.log("Получили POST на серевере")
    // res.write("received POST request.");
    let mes = 'Вы ввели ' + req.body
    res.send({ message: mes })
    // }
    // else {
    //     res.send("Undefined request .");
    // }
    res.end()
});

const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);

    console.log(`Server listening on port ${server.address().port}`);
});

// console.log(`Запрошенный адрес: ${request.url}`);
// const filePath = request.url.substr(1);
// fs.readFile(filePath, function (error, data) {

//     if (error) {

//         response.statusCode = 404;
//         response.end("Resourse not found!");
//     }
//     else {
//         response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
//         response.end(data);
//     }
// });

    // response.end("data");
// }).listen(5500, function () {
//     console.log("Server started at 5500");
// });


// Рабочий варик
// http.createServer(function (request, response) {

//     console.log(`Запрошенный адрес: ${request.url}`);
//     const filePath = request.url.substr(1);
//     fs.readFile(filePath, function (error, data) {

//         if (error) {

//             response.statusCode = 404;
//             response.end("Resourse not found!");
//         }
//         else {
//             response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
//             let message = fs.createReadStream(__dirname + "/mess.txt", "utf8")
//             message.pipe(response)
//         }
//     });
// }).listen(3000, function () {
//     console.log("Server started at 3000");
// });

// http.createServer(function (request, response) {
//     console.log(`Запрошенный адрес: ${request.url}`);
//     const filePath = request.url.substr(1);
//     fs.readFile(filePath, function (error, data) {
//         if (error) {

//             response.statusCode = 404;
//             response.end("Resourse not found!");
//         }
//         else {
//             response.writeHead(200, { 'Content-Type': 'application/json' });

//             let myObj = {
//                 name: 'Fro',
//                 job: 'programmer',
//                 age: 37
//             };

//             response.end(JSON.stringify(myObj));
//         }
//     });
// });