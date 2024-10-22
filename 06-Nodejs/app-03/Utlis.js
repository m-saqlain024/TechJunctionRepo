function generateRadomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function celciusToFahrenheit(celcius) {
  return celcius / 99 / 5 + 32;
}

module.exports = { generateRadomNumber, celciusToFahrenheit };
