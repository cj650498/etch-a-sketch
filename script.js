const basicColorKeywords = [
    "black", "red", "green",
    "blue", "yellow", "cyan",
    "magenta", "gray", "orange",
    "brown", "purple", "pink"
];

const INITIAL_GRID_SIZE = 20;
const MAX_GRID_SIZE = 100;
const MIN_GRID_SIZE = 1;

const setGridSizeBtn = document.querySelector(".set-grid-size-btn");
const resetColorsBtn = document.querySelector(".reset-colors-btn");

// Set grid to initial size
window.onload = () => {
    setGridSize(INITIAL_GRID_SIZE);
};

// Generate squares (user given input)
setGridSizeBtn.addEventListener("click", () => {
    removeAllContainers();
    const squaresPerSide = getValidInput();
    setGridSize(squaresPerSide);
});

// Set background to white for all squares
resetColorsBtn.addEventListener("click", () => {
    document.querySelectorAll(".square").forEach(square => setBackground(square, "white"));
});

// Set background to random color for square that is hovered over
document.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("square")) {
        setBackground(event.target, generateRandomColor());
    }
});

function getValidInput() {
    let input;
    do {
        input = prompt("Enter how many squares per side (max 100):");
    } while (
        input === null ||
        input.trim() === "" ||
        isNaN(input) ||
        input < MIN_GRID_SIZE || input > MAX_GRID_SIZE
    );
    return Number(input);
}

function setBackground(square, color) {
    square.style.setProperty("--bgColor", `${color}`);
}

function generateRandomColor() {
    const randomIndex = Math.floor(Math.random() * basicColorKeywords.length);
    return basicColorKeywords[randomIndex];
}

function removeAllContainers() {
    document.querySelectorAll(".container").forEach(container => container.remove());
}

function setGridSize(squaresPerSide) {
    for (let i = 0; i < squaresPerSide; ++i) {
        const container = document.createElement("div");
        container.classList.add("container");
        document.body.appendChild(container);

        for (let j = 0; j < squaresPerSide; ++j) {
            const square = document.createElement("div");
            square.classList.add("square");
            container.appendChild(square);
        }
    }
}