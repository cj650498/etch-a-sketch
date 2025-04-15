const basicColorKeywords = [
    "black", "white", "red", "green", "blue",
    "yellow", "cyan", "magenta", "gray", "orange",
    "brown", "purple", "pink"
  ];

const MAX_SQUARES = 100;
const MIN_SQUAERES = 1;
const container = document.querySelector(".container");
const clearBtn = document.querySelector(".clear-btn");
const setSquaresBtn = document.querySelector(".set-squares-btn");

container.addEventListener("mouseover", (event) => {
    const currentSquare = event.target;
    const randomBasicColor = randomColor();
    colorSquare(currentSquare, randomBasicColor);
});

setSquaresBtn.addEventListener("click", () => {
    generateSquares(getValidInput());
});

function getValidInput() {
    let input;

    do {
        input = prompt("Enter how many squares per side:");
    } while (
        input === null ||
        input.trim() === "" ||
        isNaN(input) ||
        input < MIN_SQUAERES || input > MAX_SQUARES
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
    square.style.setProperty("--size", `${size}px`);
    square.style.setProperty("--bgColor", "white");
    square.classList.add("square");
    return square;
}

clearBtn.addEventListener("click", () => {
    clearColor(container);
});

function clearColor(container) {
    for (let i = 0; i < container.children.length; ++i) {
        const square = container.children[i];
        colorSquare(square, "white");
    }
}

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

function colorSquare(square, color) {
    square.style.setProperty("--bgColor", `${color}`);
}

function randomColor() {
    const randomIndex = Math.floor(Math.random() * basicColorKeywords.length);
    return basicColorKeywords[randomIndex];
}