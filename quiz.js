
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
    {
    question: "8. What are some of the built in methods in JavaScript?",
    choices: ["Date(), concat(), push(), pop(), round(), length()", "pow() function, sort() function, find() function, binary_search() function", "Date[], concat[], push[], pop[], round[], length[]"],
    correct: 0
  },
  {
    question: "9. What are the scopes of a variable in JavaScript?",
    choices: ["The scope of a variable implies where the variable has been declared or defined in a JavaScript program. There are two scopes of a variable: <br> Global Scope Global variables, having global scope are available everywhere in a JavaScript code. <br> Local Scope Local variables are accessible only within a function in which they are defined.", “There is no variables scope!", “local variable <br> global variable"],
    correct: 0
  },

  {
    question: "10. What is the ‘this’ keyword in JavaScript?",
    choices: ["this always refers to the “owner” of the function we're executing, or rather, to the object that a function is a method of", "The ‘this’ keyword in JavaScript refers to the currently calling object. It is commonly used in constructors to assign values to object properties", "the this keyword is available inside any class method and refers to the current object used to invoke the method"],
    correct: 1
  },
  {
    question: "11. What are the conventions of naming a variable in JavaScript?",
    choices: ["Names can contain letters, digits and underscores. Names must begin with a letter or an underscore (_)", "a viriable name can start with letter or number", "Following are the naming conventions for a variable in JavaScript: Variable names cannot be similar to that of reserved keywords. For example, var, let, const, etc. Variable names cannot begin with a numeric value. They must only begin with a letter or an underscore character. Variable names are case-sensitive"],
    correct: 2
  },
  {
    question: "12. What is Callback in JavaScript?",
    choices: ["javascript pass arguments by reference", "In JavaScript, functions are objects and therefore, functions can take other functions as arguments and can also be returned by other functions", "injavascripts functions are not objects and therefore, functions can not take other functions as arguments!"],    
    correct: 1
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
  
//   const logo = document.querySelector('#logo')
//   // console.log('logo here ' + logo)
//   const logoSound = document.querySelector("#logoSound"); 
//   console.log('sound here ' + logoSound)
  
//   function playLogoAudio() { 
//     // console.log('salman')
//     logoSound.play(); 
//   } 
  
//   logo.addEventListener('click', playLogoAudio)
  
  
  let currentQuestion = 0;
  let correctAnswers = 0;
  
  const level2 = document.querySelector('.leveldiv');
  const level2btn = document.querySelector('.l2');


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
        level2.classList.toggle('hide');
        const quizContainer = document.querySelector(".quiz-container");
        quizContainer.innerHTML = `<p>You got ${correctAnswers} out of ${questions.length} questions, <br> <br> you are ready for an interview  involving javascript <br> <br> Yeeey! <br> <br>
 </p>`;
      
    

      }
    }, 2000);
  }
  
  showQuestion();

  