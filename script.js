const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

//select tag button that is inside the header
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

//creating add function that is called by the button
function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("⚠️ Today was already inserted!")
    return
  }

  nlwSetup.addDay(today)
}

//to see the data string on the console just type: locaStorage
function save() {
  localStorage.setItem("@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("@habits")) || {}

nlwSetup.setData(data)
nlwSetup.load()
