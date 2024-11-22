function getNumbers() {
    return new Promise((resolve) => {
        setTimeout(() => resolve([1, 2, 3, 4]), 0); // Resolves with numbers
    });
}

function updateText(text) {
    const output = document.getElementById("output");
    output.textContent = text;
}

function manipulateData() {
    getNumbers()
        .then((numbers) => {
            // Step 1: Filter even numbers
            return new Promise((resolve) => {
                setTimeout(() => {
                    const evenNumbers = numbers.filter((num) => num % 2 === 0);
                    console.log("Filtered even numbers:", evenNumbers); // Debugging
                    updateText(evenNumbers.join(", "));
                    resolve(evenNumbers);
                }, 1000);
            });
        })
        .then((evenNumbers) => {
            // Step 2: Multiply by 2
            return new Promise((resolve) => {
                setTimeout(() => {
                    const multipliedNumbers = evenNumbers.map((num) => num * 2);
                    console.log("Multiplied numbers:", multipliedNumbers); // Debugging
                    updateText(multipliedNumbers.join(", "));
                    resolve(multipliedNumbers);
                }, 2000);
            });
        })
        .catch((err) => {
            console.error("Error processing data:", err);
        });
}

// Invoke the function
manipulateData();
