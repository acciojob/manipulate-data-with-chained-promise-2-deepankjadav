// Function to simulate resolving a promise with an array of numbers
function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => resolve([1, 2, 3, 4]), 3000);
  });
}

// Function to update the content of the "output" div
function updateOutput(text) {
  const outputElement = document.getElementById("output");
  outputElement.textContent = text;
}

// Main function to handle promise chaining
function manipulateData() {
  getNumbers()
    .then((numbers) => {
      // Filter out odd numbers
      return new Promise((resolve) => {
        setTimeout(() => {
          const evens = numbers.filter((num) => num % 2 === 0);
          updateOutput(evens.join(", "));
          resolve(evens);
        }, 1000);
      });
    })
    .then((evenNumbers) => {
      // Multiply even numbers by 2
      return new Promise((resolve) => {
        setTimeout(() => {
          const multiplied = evenNumbers.map((num) => num * 2);
          updateOutput(multiplied.join(", "));
          resolve(multiplied);
        }, 2000);
      });
    })
    .catch((error) => {
      console.error("Error processing the data:", error);
    });
}

// Start the process
manipulateData();
