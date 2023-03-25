window.addEventListener('load', function() {
    var splashScreen = document.getElementById('splash-screen');

    setTimeout(function() {
        // Hide the splash screen
        splashScreen.parentElement.removeChild(splashScreen);
      }, 1200); // Change the time in milliseconds to adjust the delay

  });