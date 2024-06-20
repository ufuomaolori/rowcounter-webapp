const counter = document.getElementById("count-el");
const increment = document.getElementById("increment-btn");
const saveBtn = document.getElementById("save-btn");
const saveText = document.getElementById("save-el");
let count = counter.innerText;

increment.addEventListener("click", () => {
    counter.innerHTML = ++count;
});

saveBtn.addEventListener("click", () => {
    let save = counter.innerText;
    saveText.textContent += save + " - ";
})