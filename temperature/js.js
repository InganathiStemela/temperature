function convertTemperature() {
    // Get the input values
    let celsiusInput = document.querySelector('celsius');
    let fahrenheitInput = document.querySelector('fahrenheit');
    // Convert Celsius to Fahrenheit
    if (celsiusInput.value !== '') {
      let celsiusValue = parseFloat(celsiusInput.value);
      let fahrenheitValue = (celsiusValue * 9/5) + 32;
      fahrenheitInput.value = fahrenheitValue.toFixed(2);
    }
    // Convert Fahrenheit to Celsius
    if (fahrenheitInput.value !== '') {
      let fahrenheitValue = parseFloat(fahrenheitInput.value);
      let celsiusValue = (fahrenheitValue - 32) * 5/9;
      celsiusInput.value = celsiusValue.toFixed(2);
    }
  }