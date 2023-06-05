var sec = 10;
var min = 0;
var sec_val = document.getElementById("sec");
var min_val = document.getElementById("min");
var start_btn = document.getElementById("start");
var stop_btn = document.getElementById("stop");
var reset_btn = document.getElementById("reset");
var interval;

var timer = () => {
  sec--;
  if (sec == 0) {
    min--;
    sec = 60;
  }
  if (min == 0 && sec == 1) {
    min = 0;
    sec = 0;
    clearInterval(interval);
    alert("Stop");
  }
  render();
};
var start = () => {
  interval = setInterval(function () {
    timer();
  }, 1000);
  console.log(start_btn);
  start_btn.firstChild.nodeValue = "stop";
  start_btn.removeAttribute("onclick", "start");
  start_btn.setAttribute("onclick", "stop()");
  console.log(start_btn);
};

var stop = () => {
  start_btn.firstChild.nodeValue = "start";
  start_btn.removeAttribute("onclick", "stop");
  start_btn.setAttribute("onclick", "start()");
  clearInterval(interval);
};

var reset = () => {
  sec = "00";
  min = "00";
  render();
  stop();
};
var render = () => {
  sec_val.innerHTML = sec;
  min_val.innerHTML = min;
};
