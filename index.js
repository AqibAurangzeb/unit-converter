const lightDarkModeBtn = document.getElementById("light-dark-mode-btn");
const cardTopInput = document.getElementById("card-top-input");
const cardTopConvertBtn = document.getElementById("card-top-convert-btn");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

const mode = localStorage.getItem("darkMode");

if (mode === "enabled") {
  setColorsForDarkMode();
}

lightDarkModeBtn.addEventListener("click", function() {
  if (lightDarkModeBtn.textContent === "☀️") {
    setColorsForDarkMode();
    localStorage.setItem("darkMode", "enabled");
  }
  else {
    setColorsForLightMode();
    localStorage.setItem("darkMode", "disabled");
  }
})

function setColorsForDarkMode() {
  lightDarkModeBtn.textContent = "🌙";
  document.documentElement.style.setProperty('--card-top-bg-color', '#6943FF');
  document.documentElement.style.setProperty('--card-bottom-bg-color', '#1F2937');
  document.documentElement.style.setProperty('--card-bottom-converted-card-bg-color', '#273549');
  document.documentElement.style.setProperty('--card-bottom-converted-card-title-color', '#CCC1FF');
  document.documentElement.style.setProperty('--card-bottom-converted-card-text-color', '#FFFFFF');
}

function setColorsForLightMode() {
  lightDarkModeBtn.textContent = "☀️"
  document.documentElement.style.setProperty('--card-top-bg-color', '#6943FF');
  document.documentElement.style.setProperty('--card-bottom-bg-color', '#F4F4F4');
  document.documentElement.style.setProperty('--card-bottom-converted-card-bg-color', '#FFFFFF');
  document.documentElement.style.setProperty('--card-bottom-converted-card-title-color', '#5A537B');
  document.documentElement.style.setProperty('--card-bottom-converted-card-text-color', '#353535'); 
}

cardTopConvertBtn.addEventListener("click", function() {
  const unitValue = cardTopInput.value;
  const metersToFeet = unitValue * 3.28084;
  const feetToMeters = unitValue * 0.3048;
  const litresToGallons = unitValue * 0.264172;
  const gallonsToLitres = unitValue * 3.78541;
  const kilosToPounds = unitValue * 2.20462;
  const poundsToKilos = unitValue * 0.453592;

  lengthEl.textContent = `${unitValue} meters = ${metersToFeet.toFixed(3)} feet | ${unitValue} feet = ${feetToMeters.toFixed(3)} meters`;
  volumeEl.textContent = `${unitValue} liters = ${litresToGallons.toFixed(3)} gallons | ${unitValue} gallons = ${gallonsToLitres.toFixed(3)} liters`;
  massEl.textContent = `${unitValue} kilos = ${kilosToPounds.toFixed(3)} pounds | ${unitValue} pounds = ${poundsToKilos.toFixed(3)} kilos`;
})