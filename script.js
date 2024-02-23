
const container = document.querySelector(".container");
const button = document.querySelector("#generateBtn");

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
        grid.addEventListener('mouseover', () => {grid.classList.toggle('hover')});
        grid.addEventListener('mouseout', () => {grid.classList.toggle('hover')});
    });
    
}

button.addEventListener("click", () => {
    const gridNumber = document.querySelector("#gridNumber");
    createGrids(gridNumber.value)
});
