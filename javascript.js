const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    const newDiv = document.createElement('div');
    container.appendChild(newDiv);
    newDiv.className = "row";
}

