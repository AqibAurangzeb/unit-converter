/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// const cardBottom = document.getElementById("card-bottom");
const lightDarkModeBtn = document.getElementById("light-dark-mode-btn");

lightDarkModeBtn.addEventListener("click", function() {
  if (lightDarkModeBtn.textContent === "☀️") {
    lightDarkModeBtn.textContent = "🌙";

    document.documentElement.style.setProperty('--card-top-bg-color', '#6943FF');
    document.documentElement.style.setProperty('--card-bottom-bg-color', '#1F2937');
    document.documentElement.style.setProperty('--card-bottom-converted-card-bg-color', '#273549');
    document.documentElement.style.setProperty('--card-bottom-converted-card-title-color', '#CCC1FF');
    document.documentElement.style.setProperty('--card-bottom-converted-card-text-color', '#FFFFFF');
  }
  else {
    lightDarkModeBtn.textContent = "☀️"; 

    document.documentElement.style.setProperty('--card-top-bg-color', '#6943FF');
    document.documentElement.style.setProperty('--card-bottom-bg-color', '#F4F4F4');
    document.documentElement.style.setProperty('--card-bottom-converted-card-bg-color', '#FFFFFF');
    document.documentElement.style.setProperty('--card-bottom-converted-card-title-color', '#5A537B');
    document.documentElement.style.setProperty('--card-bottom-converted-card-text-color', '#353535'); 
  }
})
