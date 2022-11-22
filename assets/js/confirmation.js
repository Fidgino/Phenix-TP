let paramArr = window.location.search
    .split(/([^?&][a-zA-Z0-9]*)=([a-zA-Z0-9@.]*)/gm)
    .map(x => (x === "&" || x === "?") ? "" : x)
    .filter(x => x !== "")

let param = {}

paramArr.forEach((x, i, arr) => {
    if (i % 2 === 1) return;
    param[x] = arr[i + 1]
})

let manyPeople = document.querySelector("#manyp")
let manyWeek = document.querySelector("#manyw")
let total = document.querySelector("#total")

manyPeople.textContent = param.manyp
manyWeek.textContent = param.manyw
total.textContent = param.manyp * param.manyw * 750 

let destination = {
    "1": "Les Boucanier",
    "2": "Kamarina",
    "3": "Finohlu",
    "4": "Albion sauvage",
    "5": "Kabi",
    "6": "Gregolimano"
}[param.id]

document.querySelector("#destination_js").textContent += destination