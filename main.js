"use strict"

window.onload = () => {
    const url = "http://127.0.0.1:3000"
    const divView = document.querySelector(".view")
    const message = document.querySelector(".text")

    const btn = document.querySelector(".btn")
    btn.addEventListener("click", () => {

        fetch(url, {
            method: "POST",
            body: "testbytest",
            headers: {
                "Content-type": "text/plain"
            }
        })
            .then(response => {
                return response.text()
            })
        // .then(response => response.text())
        // .then(result => divView.innerHTML += response.text())
    })
}
