const container = document.querySelector(".container");

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






