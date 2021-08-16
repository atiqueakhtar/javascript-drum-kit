//getting drum counts from the length of the drum array
var drumCounts = document.querySelectorAll(".drum").length;

//adding event listener to all the drum elements
for(var i=0; i<drumCounts; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    var contentText = this.textContent;
    clickHandler(contentText);
    addAnimation(contentText);
  });
}

//adding event listener to the whole document, so that whenever a keyboard key is pressed it records its character and passes it in
//a function
document.addEventListener("keydown", function (event){   //the function we call inside event listener is called a callback function
  var keyboardText = event.key;
  clickHandler(keyboardText);
  addAnimation(keyboardText);
});

//the function with switch case statements to play the sound according to the character/button pressed.
function clickHandler(text){
  switch (text) {
    case "w":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log(text);
  }
}

//animation function to add the effect of the button being pressed on clicking.
function addAnimation(character){
  var drumButton = document.querySelector("." + character);
  drumButton.classList.add("pressed");
  setTimeout(function () {
    drumButton.classList.remove("pressed");
  }, 100);
}
