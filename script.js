const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
    const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
   // const today = "20/01"
    const dayExists = nlwSetup.dayExists(today)

    if (dayExists) {
        alert("Dia já incluso 🟥")
        return
    }

    alert("Dia adicionado com sucesso 🟩")
    nlwSetup.addDay(today)
}

function save() {
    localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

 /*
 const data = {
    run: ["01-22", "01-23", "01-24", "01-26", "01-27", "01-28", "01-29", "01-31", "02-01", "02-02", "02-03"],
    movie: ["01-25"],
    sleep: ["01-30"]

 } */

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
 nlwSetup.setData(data)
 nlwSetup.load()    