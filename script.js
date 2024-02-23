
const container = document.querySelector(".container");
const button = document.querySelector("#generateBtn");

function randomColor() {
    return Math.floor(Math.random()*16777215).toString(16);
}

function createGrids(num = 16) {
    const size = 720/num;
    container.textContent = '';
    for (let i = 0; i < num*num; i++) {
        const div = document.createElement("div");
        div.classList.add("grid");
        div.setAttribute('style', `width: ${size}px; height: ${size}px;`)
        container.appendChild(div);
    }  
    
    const grids = document.querySelectorAll(".grid");
    
    grids.forEach(grid => {
        grid.addEventListener('mouseover', () => {grid.style.backgroundColor = `#${randomColor()}`});
        grid.addEventListener('mouseout', () => {grid.style.backgroundColor = ""});
    });
    
}

button.addEventListener("click", () => {
    const gridNumber = document.querySelector("#gridNumber");
    createGrids(gridNumber.value)
});
