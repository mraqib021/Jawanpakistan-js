// var inp_val = document.getElementById("inp_val");
// var ul_list = document.getElementById("ul_list");
// var add = () => {
//   var li = document.createElement("li");
//   var li_node = document.createTextNode(inp_val.value);
//   li.appendChild(li_node);
//   var edit_btn = document.createElement("button");
//   // var edit_node = document.createTextNode("");
//   // edit_btn.appendChild(edit_node);
//   edit_btn.setAttribute("onclick", "edit(this)");
//   edit_btn.id = "edit";
//   edit_btn.className = "fa-solid fa-pen";
//   var delete_btn = document.createElement("button");
//   // var delete_node = document.createTextNode("");
//   // delete_btn.appendChild(delete_node);
//   delete_btn.className = "fa-solid fa-trash";
//   delete_btn.setAttribute("onclick", "deleted(this)");
//   li.appendChild(edit_btn);
//   li.appendChild(delete_btn);
//   ul_list.appendChild(li);
//   console.log(li);
// };

// var edit = (msg) => {
//   var x = prompt("Enter Something...");
//   var a = msg.parentElement.firstChild.value;
//   a = x;
//   console.log(a, x, msg.parentElement.firstChild);
// };
// var deleted = (msgs) => {
//   msgs.parentElement.remove();
// };

var add = () => {
  if (inp_val.value == "" || inp_val.value == " ") {
    alert("Please Insert Todoo");
  } else {
    ul_list.innerHTML += `<li><div><input type="text" name="" disabled value="${inp_val.value}" id="modify_val"></div><div class="btn-manage"><button onclick='edit(this)'><i class="fa-solid fa-pen" id="fa-pen"></i><i class="fa-solid fa-check" id="fa-check"></i></button><button onclick="deleted(this)"><i class="fa-solid fa-trash"></i></button></div></li>`;
    inp_val.value = "";
  }
};

var edit = (msg) => {
  var pen = msg.parentElement.firstChild.firstChild;
  var check = msg.parentElement.firstChild.lastChild;
  var val = msg.parentElement.parentElement.firstChild.firstChild;
  pen.style.display = "none";
  check.style.display = "block";
  val.style.textDecoration = "line-through";
  inp_val.value = val.value;
  // val = "";
  inp_val.value == "";
  pen.parentElement.removeAttribute("onclick");
  msg.setAttribute("onclick", "update(this)");
};

var update = (msgs) => {
  var pen = msgs.parentElement.firstChild.firstChild;
  var check = msgs.parentElement.firstChild.lastChild;
  var modify_val = msgs.parentElement.parentElement.firstChild.firstChild;
  check.style.display = "none";
  pen.style.display = "block";
  modify_val.style.textDecoration = "none";
  modify_val.value = inp_val.value;
  inp_val.value = "";
  pen.parentElement.removeAttribute("onclick");
  msgs.setAttribute("onclick", "edit(this)");
};

var deleted = (msg) => {
  msg.parentElement.parentElement.remove();
};
