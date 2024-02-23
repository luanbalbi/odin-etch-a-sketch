
const container = document.querySelector(".container");

for (let i = 0; i < 16*16; i++) {
    const div = document.createElement("div");
    div.classList.add("grid");
    container.appendChild(div);
}

const grids = document.querySelectorAll(".grid");

grids.forEach(grid => {
    grid.addEventListener('mouseover', () => {grid.classList.toggle('hover')});
    grid.addEventListener('mouseout', () => {grid.classList.toggle('hover')});
});