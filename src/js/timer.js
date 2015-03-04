(function(window, document) {
  'use strict';

  var timer = document.querySelector('.js-timer'),
    interval;

  function updateTime() {
    timer.innerHTML = new Date().toString();
    interval = window.setTimeout(updateTime, 1000);
  }

  updateTime();

})(window, document);
