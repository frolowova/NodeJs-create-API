"use strict"

window.onload = () => {
    const url = "http://127.0.0.1:3000"
    const divView = document.querySelector(".view")
    const inputText = document.querySelector(".text")
    const btn = document.querySelector(".btn")
    let mes = "loadData"

    // После загрузки сайта обращаемся к серверу для получения данных и отображения их на сайте. 
    // Кодовое слово для сервера в body
    talkWithServer();

    // Ожидаем клика по кнопке
    btn.addEventListener("click", () => {
        mes = inputText.value
        talkWithServer()
    })

    // Ожидаем нажатия enter
    inputText.addEventListener("keydown", (e) => {
        if (e.keyCode == 13) {
            mes = inputText.value
            talkWithServer()
        }
    })


    // Проверяем не пустой ли импут и отправляем данные на сервер для записи, а ответ отображаем на сайте
    function talkWithServer() {
        // mes = inputText.value
        if (mes) {
            fetch(url, {
                method: "POST",
                body: mes,
                withCredentials: true,
                headers: {
                    "Content-type": "text/plain"
                }
            })
                .then(response => response.json())
                .then(json => {
                    divView.innerText = json.message;
                })
                .catch(() => { divView.innerText = "Произошла ошибка соединения с сервером. Попробуйте позже" });
        }
        inputText.value = ""
    }
}
