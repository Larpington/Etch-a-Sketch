const container = document.querySelector(".container");

// creates a grid of 16x16 boxes
for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    container.appendChild(row);
    row.className = "row";
    for (let i = 0; i < 16; i++) {
        const box = document.createElement('div');
        row.appendChild(box);
        box.className = "box";
}
}

// event listener that changes the color of the boxes on mouseover
const boxes = document.querySelectorAll('.box');
boxes.forEach((box) => {
  box.addEventListener('mouseover', () => {
    box.style.backgroundColor = "black";
  });
});




