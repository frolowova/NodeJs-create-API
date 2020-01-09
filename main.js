"use strict"

window.onload = () => {
    const url = "http://127.0.0.1:3000"
    const divView = document.querySelector(".view")
    const message = document.querySelector(".text")
    const btn = document.querySelector(".btn")

    btn.addEventListener("click", () => {
        // console.log("Input= " + message.value)
        let mes = message.value
        message.value = ""
        fetch(url, {
            method: "POST",
            body: mes,
            withCredentials: true,
            headers: {
                "Content-type": "text/plain"
            }
        })
            .then(response => response.json())
            // console.log("Ответ с сервера получен " + response.text())
            .then(json => {
                console.log("Ответ с сервера получен: " + json.message)
                divView.innerText += "\n" + json.message;
            })
        // return response.text()
    })
    // .then(response => response.text())
    // .then(result => divView.innerHTML += response.text())
    // })
}
