var questions = [
  {
    question: "HTML Stands for ______________",
    options: ["HTML", "HTML", "Hypertext Markup Language", "HTML"],
    correctAnswer: "Hypertext Markup Language",
  },
  {
    question: "CSS Stands for ______________",
    options: ["CSS", "CSS", "Cascading Style Sheet", "CSS"],
    correctAnswer: "Cascading Style Sheet",
  },
  {
    question: "JS Stands for ______________",
    options: ["JS", "JS", "JavaScript", "JS"],
    correctAnswer: "JavaScript",
  },
  {
    question: "RAM Stands for ______________",
    options: ["RAM", "RAM", "Random Access Memory", "RAM"],
    correctAnswer: "Random Access Memory",
  },
  {
    question: "SQL Stands for ______________",
    options: ["SQL", "SQL", "Structured Query Language", "SQL"],
    correctAnswer: "Structured Query Language",
  },
  {
    question: "is HTML is Programming Language?",
    options: ["YES", "NO"],
    correctAnswer: "NO",
  },
];

var ques = document.getElementById("Question");
var options = document.getElementById("options");
var currentQ = document.getElementById("currentQ");
var totalQ = document.getElementById("totalQ");
var index = 0;

// console.log(options)

var rnderquestion = () => {
  var q = questions[index];
  ques.innerHTML += questions[index].question;
  currentQ.innerHTML = "Q No : " + (index + 1);
  totalQ.innerHTML = "/" + questions.length;
  for (var i = 0; i < q.options.length; i++) {
    options.innerHTML += `<label for="option${i}" class="input-boxs p-2 rounded-pill custom_color " style="width: 49%;"><input type="radio" name="question" onclick="check('${q.correctAnswer}','${q.options[i]}')" id="option${i}"> ${q.options[i]}</label>`;
  }
};
rnderquestion();

var marks = 0;
var check = (a, b) => {
  if (a === b) {
    marks++;
  }
  if (index == questions.length - 1) {
    showmarks();
  } else {
    nextquestion();
  }
};
var showmarks = () => {
  options.innerHTML = "";
  currentQ.innerHTML = "";
  totalQ.innerHTML = "";
  ques.innerHTML = `Total Marks :  ${marks}`;
};

var nextquestion = () => {
  ques.innerHTML = "";
  options.innerHTML = "";
  index++;
  rnderquestion();
};
