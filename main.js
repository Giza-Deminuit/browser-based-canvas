function populateBoard(size)
{
    let board = document.querySelector('.board');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)` // makes "size" columns, and each column will have a width of 1/16th of the width of the container 
    board.style.gridTemplateRows = `repeat(${size}, 1fr)` // same as above but for rows

    // Creates 256 squares for the board grid and inserts them
    for (let i = 0; i<256; i++)
    {
        let square = document.createElement('div');
        square.style.backgroundColor = 'blue';
        board.insertAdjacentElement("beforeend", square);
    }
}

populateBoard(16);

function changeSize(input)
{
    populateBoard(input);
}