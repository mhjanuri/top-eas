function makeGrids(size) {
    if (size < 1 || size > 100) {
        alert('the number are limited to 1 - 100');
    } else {
        let screen = document.querySelector(".container");
        for (let i = 0; i < size; i++) {
            let column = document.createElement("div");
            column.classList.add("column");
            for (let j = 1; j <= size; j++) {
                let row = document.createElement("div");
                row.classList.add("row");
                // row.style.border = "2px solid black";
                // row.innerText = (i * size) + j;
                column.appendChild(row);
            }
            screen.appendChild(column);
        }
    }
}
  
makeGrids(16);