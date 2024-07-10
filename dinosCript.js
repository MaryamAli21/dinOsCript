const logo = document.querySelector('#logo')
// console.log('logo here ' + logo)
const logoSound = document.querySelector("#logoSound"); 
console.log('sound here ' + logoSound)

function playLogoAudio() { 
  // console.log('salman')
  logoSound.play(); 
} 

logo.addEventListener('click', playLogoAudio)


var container = document.querySelector(".text");

var speeds = {
   pause: 500, //Higher number = longer delay
   slow: 120,
   normal: 90,
   fast: 40,
   superFast: 10
};

var textLines = [
   { speed: speeds.slow, string: "Hi, I am dinosCript.!!" },
   { speed: speeds.pause, string: "", pause: true },
   { speed: speeds.normal, string: "Mind my  bombastic eye! am not sketchy! I was born like this!" },
   { speed: speeds.fast, string: "Let's Test your Javascript knowledge!", classes: ["green"] },
   { speed: speeds.normal, string: "You ready!" }
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

