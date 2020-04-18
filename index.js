let counter = document.querySelector("#counter");
let wordCounter = document.querySelector("#wordCounter");
let textBox = document.querySelector("input");

counter.textContent = "Character counter is: 0";
wordCounter.textContent = "Word Counter is: 0";

textBox.addEventListener("input", function () {
    counter.textContent = "Character counter is: " + textBox.value.length;
})

textBox.addEventListener("input", function () {
    if ( textBox.value.length > 0 ) {
        wordCounter.textContent = "Word Counter is: " + textBox.value.split(' ').length;
    } else {
        wordCounter.textContent = "Word Counter is: 0";
    }
})