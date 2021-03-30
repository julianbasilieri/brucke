var options = {
    indicators: false,
    duration: 600,
    interval: 5000,
}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, options);
  });