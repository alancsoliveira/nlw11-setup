const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
button.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)
  alert(today)
  if (dayExists) {
    alert("Dia já incluso")
  } else {
    nlwSetup.addDay(today)
  }
}

function save() {
  
}
