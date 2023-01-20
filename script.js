const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)

function add() {
  const today = "01/01"
  nlwSetup.addDay("01/01")
  const dayExists = nlwSetup.dayExists(today)
  alert(dayExists)

  if (dayExists) {
  }
}
// const data = {
//   run: ["01-01", "01-02", "01-06", "01-07", "01-08", "01-09"],
//   water: ["01-12", "01-05"],
//   food: ["01-01", "01-03"],
//   takePills: ["01-03"],
// }
// nlwSetup.setData(data)
// nlwSetup.load()
