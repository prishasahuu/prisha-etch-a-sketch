
const container = document.querySelector(".container");


const theGridButton = document.querySelector(".gridButton");
const theEraser = document.querySelector(".eraser");
const theBrush = document.querySelector(".draw");

theGridButton.addEventListener("click", function() {
    let gridSize = prompt("What would you like the grid size to be? (only enter no. of squares for either row or column)");

    container.style.width = 40*gridSize + gridSize*2 + "px";
    container.style.height = 40*gridSize + "px";
    // console.log(gridSize);

    for (i = 0; i < gridSize*gridSize; i++){
    const square = document.createElement("div"); // creates div element for every square
    square.classList.add("square"); // names the div as classes, each named square

    theEraser.style.display = "block";
    theBrush.style.display = "block";

    square.addEventListener('click', function() {
        square.style.backgroundColor = 'black';
    });

    theEraser.addEventListener('click', function() {
        square.addEventListener('click', function() {
                square.style.backgroundColor = 'white';
        });
        
    });

    theBrush.addEventListener('click', function() {
        square.addEventListener('click', function() {
                square.style.backgroundColor = 'black';
        });
        
    });

    container.appendChild(square); // appends square child to parent class container (background)
    }
}
);





// square.addEventListener('mouseleave', function() {
//     square.style.backgroundColor = 'white';
// });