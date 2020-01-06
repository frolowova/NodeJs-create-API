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

/*
http.createServer(function (request, response) {

    // app.use(bodyParser.text());
    // app.post("http://127.0.0.1:3000", (req, response) => {
    //     console.log(req.body);
    // })

    console.log(`Запрошенный адрес: ${request.url}`);
    // получаем путь после слеша
    const filePath = request.url.substr(1);
    fs.readFile(filePath, function (error, data) {

        if (error) {

            response.statusCode = 404;
            response.end("Resourse not found!");
        }
        else {
            response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
            response.end(data);
        }
    });
}).listen(3000, function () {
    console.log("Server started at 3000");
});
*/


http.createServer(function (request, response) {

    console.log(`Запрошенный адрес: ${request.url}`);
    // получаем путь после слеша
    const filePath = request.url.substr(1);
    fs.readFile(filePath, function (error, data) {

        if (error) {

            response.statusCode = 404;
            response.end("Resourse not found!");
        }
        else {
            response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
            let message = fs.createReadStream(__dirname + "/123.txt", "utf8")
            message.pipe(response)
        }
    });
}).listen(3000, function () {
    console.log("Server started at 3000");
});