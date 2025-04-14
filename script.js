function getValidInput() {
    let input;

    do {
        input = prompt("Enter how many squares per side:");
    } while (
        input === null ||
        input.trim() === "" ||
        isNaN(input) ||
        input < 1 || input > 100
    );

    return Number(input);
}

function clearContainer(container) {
    if (container.hasChildNodes()) {
        container.replaceChildren();
    }
}

function getSquareSize(container, squaresPerSide) {
    return container.offsetWidth / squaresPerSide;
}

function createSquare(size) {
    const square = document.createElement("div");
    square.style.setProperty('--size', `${size}px`);
    square.classList.add("square");
    return square;
}

const setSquaresBtn = document.querySelector(".set-squares-btn");

setSquaresBtn.addEventListener("click", () => {
    generateSquares(getValidInput());
});

function generateSquares(squaresPerSide) {

    // Get a reference to container and clear it
    const container = document.querySelector(".container");
    clearContainer(container);

    // Get size and number of squares
    const squareSize = getSquareSize(container, squaresPerSide);
    const numberOfSquares = squaresPerSide * squaresPerSide;

    // Create and append the squares to the container
    for (let i = 0; i < numberOfSquares; ++i) {
        const square = createSquare(squareSize);
        container.appendChild(square);
    }
}