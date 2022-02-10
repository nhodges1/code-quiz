// quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl =document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

// sounds effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

function startQuiz() {
    // hide start screen
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");

    // show questions section
    questionsEl.removeAttribute("class");

    // start timer
    timerId = setInterval(clockTick, 1000);

    // show timer
    timerEl.textContent = time;

    getQuestion();
}
