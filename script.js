function makeGrids(size) {
    if (size < 1 || size > 100) {
        alert('the number are limited to 1 - 100');
    } else {
        let container = document.querySelector(".container");
        
        for (let i = 0; i < size; i++) {
            let column = document.createElement("div");
            column.classList.add("column");
            for (let j = 1; j <= size; j++) {
                let row = document.createElement("div");
                row.classList.add("row-square");
                // row.style.border = "2px solid black";
                // row.innerText = (i * size) + j;
                column.appendChild(row);
            }
            container.appendChild(column);
        }
        let gridBoxList = document.querySelectorAll(".row-square");
        // gridBoxList.forEach((div) => div.remove());
        gridBoxList.forEach((div) => {div.addEventListener("mouseover", colorSquare)});
    }
}
  
makeGrids(16);
let color = "black";

function changeSize(input) {
    input >= 1 && input <= 100 ? makeGrids(input) : console.log("input error! to many or to few squares");
};

function changeColor(choice) {
    color = choice;
}

function colorSquare() {
    color === "random" ? this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)` : this.style.backgroundColor = color;
}

function resetContainer() {
    let container = document.querySelector(".container");
    let squares = container.querySelectorAll("div");
    squares.forEach((div) => (div.style.backgroundColor = "#e0e0e0"));
}

