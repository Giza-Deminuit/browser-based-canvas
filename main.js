// *************************************************
//         Populates the sketch board
// *************************************************
function populateBoard(size)
{
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');

    squares.forEach((div)=> div.remove()); // Clears any existing squares
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)` // makes "size" columns, and each column will have a width of 1/16th of the width of the container 
    board.style.gridTemplateRows = `repeat(${size}, 1fr)` // same as above but for rows

    // Creates size^2 squares for the board grid and inserts them
    let amount = size*size;
    for (let i = 0; i<amount; i++)
    {
        let square = document.createElement('div');
        square.style.backgroundColor = 'blue';
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