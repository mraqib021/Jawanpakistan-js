var mili_sec = 00;
var sec = 00;
var min = 00;
var hour = 00;
var count = document.getElementById("count");
var sec_val = document.getElementById("sec");
var min_val = document.getElementById("min");
var hour_val = document.getElementById("hr");
var start_btn = document.getElementById("start");
var stop_btn = document.getElementById("stop");
var reset_btn = document.getElementById("reset");
var interval;

var timer = () => {
  mili_sec++;
  // count.innerHTML = mili_sec
  if (mili_sec == 100) {
    sec++;
    mili_sec = 0;
    // console.log(mili_sec)
    if (sec == 60) {
      min++;
      sec = 0;
    }
    if (min == 60) {
      hour++;
      min = 0;
    }
  }
  render();
};

var start = (btn) => {
  interval = setInterval(function () {
    timer();
  }, 10);
  console.log(start_btn);
  start_btn.disabled = true;
};

var stop = () => {
  start_btn.disabled = false;
  // console.log(interval)
  clearInterval(interval);
};

var reset = () => {
  mili_sec = "00";
  sec = "00";
  min = "00";
  hour = "00";
  //  console.log(mili_sec);
  render();
  stop();
};
var render = () => {
  count.innerHTML = mili_sec;
  sec_val.innerHTML = sec;
  min_val.innerHTML = min;
  hour_val.innerHTML = hour;
};

