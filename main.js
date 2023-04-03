// Supports line 29
var mouseDown = 0;
document.body.onmousedown = ()=>
{ 
  ++mouseDown;
}
document.body.onmouseup = ()=>
{
  --mouseDown;
}

let board = document.querySelector('.board');

// *************************************************
//         Implements drawing on click
// *************************************************
function draw(square)
{
    square.addEventListener("mouseover", ()=> 
    {
        if (mouseDown)
        {
            square.style.backgroundColor = "black";
        }
        else{
            square.style.backgroundColor = square.style.backgroundColor;
        }
    });
}


// *************************************************
//         Populates the sketch board
// *************************************************
function populateBoard(size)
{
    let squares = board.querySelectorAll('div');

    squares.forEach((div)=> div.remove()); // Clears any existing squares
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)` // makes "size" columns, and each column will have a width of 1/16th of the width of the container 
    board.style.gridTemplateRows = `repeat(${size}, 1fr)` // same as above but for rows

    // Creates size^2 squares for the board grid and inserts them
    let amount = size*size;
    for (let i = 0; i<amount; i++)
    {
        let square = document.createElement('div');

        draw(square);

        square.style.backgroundColor = 'blue';
        square.ondragstart = () => { return false; } // prevents dragging the squares
        board.insertAdjacentElement("beforeend", square);
    }
}

populateBoard(16); // Default

// *************************************************
//         Lets the user choose the board size
// *************************************************
function changeSize(input)
{
    if (input >= 2 && input <= 100)
    {
        populateBoard(input);
    }
    else
        console.log("invalid size");
    
}

// *************************************************
//                  Resets the board
// *************************************************
function reset()
{
    let squares = board.querySelectorAll('div');
    squares.forEach((div)=> div.style.backgroundColor = "blue")
}