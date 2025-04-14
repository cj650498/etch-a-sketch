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