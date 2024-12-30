

//time
document.addEventListener('DOMContentLoaded', function() {
    // Function to get current time
    function getTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;
    }
  
    // Update clock every second
    function updateClock() {
      const clock = document.getElementById('clock');
      clock.textContent = getTime();
    }
  
    // Update clock immediately on page load
    updateClock();
  
    // Update clock every second
    setInterval(updateClock, 1000);
  });
  
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
