const http = require("http");
const fs = require("fs");
const express = require('express')
const app = express()
const port = 3000;
//bodyParser извлекает всю часть тела входящего потока запросов и предоставляет его на req.body
let bodyParser = require('body-parser');
// const urlencodedParser = bodyParser.urlencoded({ extended: false });

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
    console.log("Получили POST на серевере")

    // Если в теле запроса пришло кодовое слово clear, то чистим файл
    if (req.body == "clear") {
        fs.openSync("mess.txt", 'w+')
        req.body = "";
    }
    // Первая загрузка страницы. Необходимо выдать данные для отображения на сайте
    if (req.body == "loadData") {
        return res.send({ message: fs.readFileSync("mess.txt", "utf8") })
    }

    let text = req.body + "\n"

    fs.appendFileSync("mess.txt", text)
    let fileReaded = fs.readFileSync("mess.txt", "utf8")
    let mes = fileReaded
    res.send({ message: mes })
    //res.end()
});

const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);

    console.log(`Server listening on port ${server.address().port}`);
});