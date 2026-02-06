let factura = document.getElementById("factura")
let porcentaje = document.getElementById("porcentaje")
let total = document.querySelector("#total span")
let button = document.getElementById("btn")


function showResult(resul) {
    total.innerHTML = resul
}
button.addEventListener("click", function() {
    console.log()
    console.log()

    let propina = (factura.value * porcentaje.value) / 100
    showResult(propina)
})