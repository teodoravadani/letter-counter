let counter = document.querySelector("#counter");
let textBox = document.querySelector("input");
let num = 0;

counter.textContent = "Lungimea textului este de: 0";

textBox.addEventListener("input", function () {
    counter.textContent = "Lungimea textului este de: " + textBox.value.length;
})