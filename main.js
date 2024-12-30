
var dateDisplay = document.getElementById('dateDisplay');
var today = new Date();
var options = { weekday: 'short', month: 'short', day: 'numeric' };
dateDisplay.textContent = today.toLocaleDateString('en-US', options);


//randomcolour
document.addEventListener('DOMContentLoaded', function() {
    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
  
    var randomTextElement = document.getElementById('randomText');
  
    var textContent = randomTextElement.textContent.trim();
    var characters = textContent.split('');
  
    var newContent = '';
    characters.forEach(function(character) {
  
      var randomColor = getRandomColor();
  
      newContent += '<span style="color: ' + randomColor + ';">' + character + '</span>';
    });
  
    // Replace the content of the element with the newContent
    randomTextElement.innerHTML = newContent;
  });


  //no empty search
  function validateSearch() {
    const searchInput = document.getElementById("searchInput");
    if (searchInput.value.trim() === "") {
        return false;
    }
    return true;
}
  
  
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});
document.addEventListener('keydown', function (event) {
  // Block F12 key (keyCode 123)
  if (event.keyCode === 123) {
    event.preventDefault();
  }
  
  // Block Ctrl+Shift+I (keyCode for I is 73, and Ctrl+Shift check)
  if ((event.ctrlKey && event.shiftKey && event.keyCode === 73) || 
      (event.ctrlKey && event.shiftKey && event.keyCode === 74)) { // Block Ctrl+Shift+J (keyCode 74 for J in dev tools)
    event.preventDefault();
  }
});


     
const images = [
'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
'https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
'https://images.pexels.com/photos/552789/pexels-photo-552789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
'https://images.pexels.com/photos/1410224/pexels-photo-1410224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
'https://images.pexels.com/photos/1450963/pexels-photo-1450963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
 ];

     const button = document.getElementById('changeBackgroundBtn');
     let currentIndex = 0;

     button.addEventListener('click', () => {
         currentIndex = (currentIndex + 1) % images.length;
         document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
     });

     const bgColorPicker = document.getElementById('bgcolor');
     const borderColorPicker = document.getElementById('bcolor');
     const resetButton = document.getElementById('resetBtn2');
     const clockElement = document.querySelector('.clock');
     const miniClockElement = document.getElementById('clock');
     const minuteElements = document.querySelectorAll('.minute');
     const hourElements = document.querySelectorAll('.hour');
     const handsCheckbox = document.querySelector('input[type="checkbox"]'); // The checkbox for hands
     
     let allowHandsColorChange = true; // Default: allow hands to change color
     
     // Function to apply the colors to the clock and mini clock
     function applyColors() {
         const storedBgColor = localStorage.getItem('clockBgColor');
         const storedBorderColor = localStorage.getItem('clockBorderColor');
     
         if (storedBgColor) {
             clockElement.style.backgroundColor = storedBgColor;
         }
     
         if (storedBorderColor) {
             clockElement.style.borderColor = storedBorderColor;
             miniClockElement.style.borderColor = storedBorderColor;
     
             if (allowHandsColorChange) {
                 minuteElements.forEach(el => el.style.backgroundColor = storedBorderColor);
                 hourElements.forEach(el => el.style.backgroundColor = storedBorderColor);
             }
         }
     
         // Ensure mini clock always has a transparent background
         miniClockElement.style.backgroundColor = 'transparent';
     }
     
     // Function to reset the clock to default colors
     function resetToDefault() {
         const defaultBgColor = 'transparent';
         const defaultBorderColor = 'rgb(83, 193, 226)';
     
         clockElement.style.backgroundColor = defaultBgColor;
         clockElement.style.borderColor = defaultBorderColor;
         miniClockElement.style.borderColor = defaultBorderColor;
     
         if (allowHandsColorChange) {
             minuteElements.forEach(el => el.style.backgroundColor = defaultBorderColor);
             hourElements.forEach(el => el.style.backgroundColor = defaultBorderColor);
         }
     
         localStorage.setItem('clockBgColor', defaultBgColor);
         localStorage.setItem('clockBorderColor', defaultBorderColor);
     
         // Ensure mini clock always has a transparent background
         miniClockElement.style.backgroundColor = 'transparent';

     }
     
     // Event listeners for the color pickers
     bgColorPicker.addEventListener('input', (event) => {
         const selectedColor = event.target.value;
         clockElement.style.backgroundColor = selectedColor;
         localStorage.setItem('clockBgColor', selectedColor);
     });
     
     borderColorPicker.addEventListener('input', (event) => {
         const selectedColor = event.target.value;
         clockElement.style.borderColor = selectedColor;
         miniClockElement.style.borderColor = selectedColor;
     
         if (allowHandsColorChange) {
             minuteElements.forEach(el => el.style.backgroundColor = selectedColor);
             hourElements.forEach(el => el.style.backgroundColor = selectedColor);
         }
     
         localStorage.setItem('clockBorderColor', selectedColor);
     });
     
     // Event listener for the reset button
     resetButton.addEventListener('click', resetToDefault);
     
     // Event listener for the hands checkbox
     handsCheckbox.addEventListener('change', (event) => {
         allowHandsColorChange = !event.target.checked; // Disable hands color change when checked
     });
     
     // Apply stored colors when the page loads
     window.addEventListener('load', applyColors);

// Js for minicalander display or not (checkbox)
document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("Rejected");
  const clockContainer = document.querySelector(".date-display");
  const clock = document.getElementById("clock");

 

  // Function to toggle the clock visibility
  function toggleClock() {
    if (checkbox.checked) {
      clockContainer.style.display = "none";
    } else {
      clockContainer.style.display = "block";
    }
    // Save the state in local storage
    localStorage.setItem("clockHidden", checkbox.checked);
  }

  // Load the saved state from local storage
  const clockHidden = localStorage.getItem("clockHidden") === "true";
  checkbox.checked = clockHidden;
  toggleClock();

  // Add event listener for the checkbox
  checkbox.addEventListener("change", toggleClock);
});
     