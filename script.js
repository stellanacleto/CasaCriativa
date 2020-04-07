var b = document.querySelector("button.add")
b.addEventListener("click" , onOff) //add evento
//surgir - espera ser executado / surgir() - executa assim q inicia

function onOff() {
    document
        .querySelector("#modal")
        .classList
        .toggle("hide")
}