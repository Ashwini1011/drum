
//detecting button press
var number=document.querySelectorAll(".drum").length;

for(i=0;i<number;i++)
{
document.querySelectorAll("Button")[i].addEventListener("click",function(){

var letteronButton = this.innerHTML;
makesound(letteronButton);
animation(letteronButton);
});
}
// var audio = new Audio("sounds/tom-1.mp3");
//  audio.play();
//keyboard press
document.addEventListener("keypress",function(event){
  makesound(event.key);
  animation(event.key);
});

function makesound(key)
{
  switch (key) {
    case "w":var tom1 = new Audio("sounds/tom-1.mp3");
             tom1.play();
    case "a":var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
   case "s":var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
  case "d":var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
  case "j":var snare = new Audio("sounds/snare.mp3");
           snare.play();
  case "k":var kickbrass = new Audio("sounds/kick-brass.mp3");
          kickbrass.play();
  case "l":var crash = new Audio("sounds/crash.mp3");
        crash.play();
  break;
    default: console.log(letteronButton);

  }
}
function animation(currentkey)
{
var activeButton=document.querySelector("."+currentkey);
activeButton.classList.add("pressed");
setTimeout(function(){activeButton.classList.remove("pressed");},100);
}

//description of code
//see there are two choicess for whole document 1st is to listen fron keyboard and second is to listen fron tthe webpage pressed buttons.
//if the button click on webpage is listen by whole document(as we written documment.eventlistner) then 1st code will get run.
//i,e when "click" happens it will jump to the annomous function.In that function this.innerHTML will read what is click and pass it to
// variable letteronButton and that is passed to makesound functiom that means now compiler will go to that MAKESOUND function and will that sound accordingly
//if the key is press from the keyboard then the wholedocument will listen and understant that the event happen from keypress.
//thent it will check the annomous fuction which has "event" variiable.that is given with "key".This event.key will detect which key
//is pressed and it will make the sound accordingly.
