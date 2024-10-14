let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('.button');
let stringInput = "";

// Clear the input (AC)
document.getElementById('clear').addEventListener('click', () => {
  stringInput = "";
  inputBox.value = stringInput || '0';
});

// Delete the last character (DEL)
document.getElementById('delete').addEventListener('click', () => {
  stringInput = stringInput.slice(0, -1);
  inputBox.value = stringInput || '0';
});

// Handle button clicks
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const buttonText = event.target.innerText;

    // Handle equal button
    if (buttonText === '=') {
      try {
        stringInput = eval(stringInput).toString();
      } catch (error) {
        stringInput = "Error";
      }
      inputBox.value = stringInput;
    }
    // Handle operator buttons
    else if (buttonText === 'AC' || buttonText === 'DEL') {
      // These are handled separately
    } else if (buttonText === '%') {
      stringInput += '/100';
      inputBox.value = stringInput;
    } else {
      stringInput += buttonText;
      inputBox.value = stringInput;
    }
  });
});
