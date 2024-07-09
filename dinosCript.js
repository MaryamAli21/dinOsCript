
const questions = [
  {
    question: "1. What reflects an understanding about JavaScript?",
    choices: ["JavaScript is a popular web scripting language and is used for client-side and server-side development", " it's another C-style language", "JavaScript is not truly object oriented because it does not provide inheritance"],
    correct: 0
  },
  {
    question: "2. What alligns a difference between JavaScript and Java?",
    choices: ["Javascript is an object-oriented programming language while java is an object-oriented scripting language", "Javascript source code needs a compiler before it can be ready to run in realtime while Java does not need compilation before running the application code", "JavaScript applications are meant to run inside a web browser while Java applications are generally made for use in operating systems and virtual machines"],
    correct: 2
  },
  {
    question: "3. What are the various data types that exist in JavaScript?",
    choices: ["there are no types any value entry can be converted into a type!", "Boolean - For true and false values, Null - For empty or unknown values, Undefined - For variables that are only declared and not defined or initialized, Number - For integer and floating-point numbers, String - For characters and alphanumeric values, Object - For collections or complex values, Symbols - For unique identifiers for objects", "date, string, number, boolean, object"],
    correct: 1
  },
  {
    question: "4. What are the features of JavaScript?",
    choices: ["javaScript allow the reading or writing of files on client machines, JavaScript allow the writing of files on server machines", "Lightweight, interpreted programming language, Cross-platform compatible, Open-source, Object-oriented, Integration with other backend and frontend technologies, Used especially for the development of network-based applications", "JavaScript close a window that it hasn't opened, JavaScript read information from an opened Web page that came from another server"],
    correct: 1
  },
  {
    question: "5. What are advantages of JavaScript over other web technologies?",
    choices: ["Enhanced Interaction, Quick Feedback, Rich User Interface, Frameworks", "javascript develops large applications", "in JavaScript the code is not visible to everyone and anyone to view"],    
    correct: 0
  },

  {
    question: "6. How do you create an object in JavaScript?",
    choices: [
      "const student = { name: 'John’, age: 17 };", "const count = 0; for (let i = 0; i < 10; i++) { count = count + i; } console.log(count);", "both of the above are correct"],
    correct: 2,
  },
  {
    question: "7. How do you create an array in JavaScript?",
    choices: ["var a = [];  var b = [‘a’, ‘b’, ‘c’, ‘d’, ‘e’];", "var group = {}; var b = [‘a’, ‘b’, ‘c’, ‘d’, ‘e’];", "cvar a = [] , var b = ‘a’, ‘b’, ‘c’, ‘d’, ‘e’"],
    correct: 0,
  },
  
];

// const logo = document.querySelector('#logo')
// // console.log('logo here ' + logo)
// const logoSound = document.querySelector("#logoSound"); 
// console.log('sound here ' + logoSound)

// function playLogoAudio() { 
//   // console.log('salman')
//   logoSound.play(); 
// } 

// logo.addEventListener('click', playLogoAudio)


let currentQuestion = 0;
let correctAnswers = 0;

function showQuestion() {
  const questionText = document.getElementById("question-text");
  questionText.textContent = questions[currentQuestion].question;

  const choices = document.querySelectorAll(".choice");
  choices.forEach((choice, index) => {
    choice.textContent = questions[currentQuestion].choices[index];
  });

  const feedback = document.getElementById("feedback");
  feedback.textContent = "";
}

function checkAnswer(selected) {
  const feedback = document.getElementById("feedback");
  if (selected === questions[currentQuestion].correct) {
    feedback.textContent = "Correct!";
    correctAnswers++;
  } else {
    feedback.textContent = "Incorrect!";
  }
  setTimeout(() => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      const quizContainer = document.querySelector(".quiz-container");
      quizContainer.innerHTML = `<p>You got ${correctAnswers} out of ${questions.length} questions.</p>`;
    }
  }, 2000);
}

showQuestion();

var container = document.querySelector(".text");

var speeds = {
   pause: 500, //Higher number = longer delay
   slow: 120,
   normal: 90,
   fast: 40,
   superFast: 10
};

var textLines = [
   { speed: speeds.slow, string: "Oh, hello!" },
   { speed: speeds.pause, string: "", pause: true },
   { speed: speeds.normal, string: "Have you seen my pet" },
   { speed: speeds.fast, string: "frog", classes: ["green"] },
   { speed: speeds.normal, string: "around?" }
];


var characters = [];
textLines.forEach((line, index) => {
   if (index < textLines.length - 1) {
      line.string += " "; //Add a space between lines
   }

   line.string.split("").forEach((character) => {
      var span = document.createElement("span");
      span.textContent = character;
      container.appendChild(span);
      characters.push({
         span: span,
         isSpace: character === " " && !line.pause,
         delayAfter: line.speed,
         classes: line.classes || []
      });
   });
});

function revealOneCharacter(list) {
   var next = list.splice(0, 1)[0];
   next.span.classList.add("revealed");
   next.classes.forEach((c) => {
      next.span.classList.add(c);
   });
   var delay = next.isSpace && !next.pause ? 0 : next.delayAfter;

   if (list.length > 0) {
      setTimeout(function () {
         revealOneCharacter(list);
      }, delay);
   }
}

//Kick it off
setTimeout(() => {
   revealOneCharacter(characters);   
}, 600)

