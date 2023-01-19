const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
  run: ["01-19", "01-20", "01-21"],
  water: ["01-18", "01-20", "01-21"],
  food: ["01-18", "01-19", "01-20", "01-21"],
  reading: ["01-19", "01-20"],
  programming: ["01-19", "01-20", "01-21"],
  english: ["01-19"],
}

nlwSetup.setData(data)
nlwSetup.load()
