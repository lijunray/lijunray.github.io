/*
 * http://love.hackerzhou.me
 */

// variables
const $win = $(window);
const clientWidth = $win.width();
const clientHeight = $win.height();

$(window).resize(() => {
  const newWidth = $win.width();
  const newHeight = $win.height();
  if (newWidth != clientWidth && newHeight != clientHeight) {
    location.replace(location);
  }
});

(function ($) {
  $.fn.typewriter = function () {
    this.each(function () {
      const $ele = $(this);

      const str = $ele.html();

      let progress = 0;
      $ele.html('');
      var timer = setInterval(() => {
        const current = str.substr(progress, 1);
        if (current == '<') {
          progress = str.indexOf('>', progress) + 1;
        } else {
          progress++;
        }
        $ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
        if (progress >= str.length) {
          clearInterval(timer);
        }
      }, 75);
    });
    return this;
  };
}(jQuery));

// return date1 - date2
function timeElapse(date1, date2) {
  console.log('111');
  let seconds = (Date.parse(date1) - Date.parse(date2)) / 1000;
  const days = Math.floor(seconds / (3600 * 24));
  seconds %= 3600 * 24;
  let hours = Math.floor(seconds / 3600);
  if (hours < 10) {
    hours = `0${hours}`;
  }
  seconds %= 3600;
  let minutes = Math.floor(seconds / 60);
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  seconds %= 60;
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return {
    days,
    hours,
    minutes,
    seconds
  };
}
