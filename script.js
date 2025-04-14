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