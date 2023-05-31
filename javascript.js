const container = document.querySelector(".container");


function createBoxes(numberOfBoxes){
for (let i = 0; i < numberOfBoxes; i++) {
    const row = document.createElement('div');
    container.appendChild(row);
    row.className = "row";
    for (let i = 0; i < numberOfBoxes; i++) {
        const box = document.createElement('div');
        row.appendChild(box);
        box.className = "box";
        }
    }
}

function changeBoxColor() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
      box.addEventListener('mouseover', () => {
        box.style.backgroundColor = "black";
      });
    });
}
// function that adds event listener that changes the color of the boxes on mouseover
function changeGridSize(){
    let numberOfBoxes = prompt("How many boxes would you like per row? (100 max)");
    if (numberOfBoxes > 100) {
        const errorMessage = document.querySelector(".ui-box");
        errorMessage.textContent = "The maximum row size is 100, please try again.";
    } else if (isNaN(numberOfBoxes)) {
        const errorMessage = document.querySelector(".ui-box");
        errorMessage.textContent = "Please only input a number, up to 100.";
    } else {
        const boxes = document.querySelectorAll(".box")
        boxes.forEach(box => {
            box.remove();
        });
        const rows = document.querySelectorAll(".row")
        rows.forEach(row => {
            row.remove();
        });
        createBoxes(numberOfBoxes);
        boxes.forEach(changeBoxColor);
        changeBoxSize(numberOfBoxes);
    }
}

function changeBoxSize(numberOfBoxes) {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
      box.style.width = `calc(700px / ${numberOfBoxes})`;
      box.style.height = `calc(700px / ${numberOfBoxes})`;
    });
}
createBoxes(16);
changeBoxColor();


