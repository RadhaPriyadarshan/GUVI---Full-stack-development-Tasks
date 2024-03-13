function countdown(start, callback) {
    if (start > 0) {
      document.getElementById('countdown').textContent = start;
      setTimeout(function() {
        countdown(start - 1, callback);
      }, 1000);
    } else {
      callback();
    }
  }
  
  countdown(10, function() {
    document.getElementById('countdown').textContent = "Happy Independence Day!";
  });
  