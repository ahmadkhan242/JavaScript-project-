var gameover = false;
var win = 5;

// for button two (Player One)
var p1B = document.querySelector("#p1");
var p1Display = document.querySelector("#p1Display");
p1score = 0;

p1B.addEventListener("click", function(){
  if(!gameover){
  p1score++;
  if(p1score===win){
    p1Display.classList.add("winner");
    gameover= true;
  }
  p1Display.textContent = p1score;
}

})

// for button two (Player Two)
var p2B = document.querySelector("#p2");
var p2Display = document.querySelector("#p2Display");
p2score = 0;

p2B.addEventListener("click", function(){
  if(!gameover){
  p2score++;
  if(p2score===win){
      p2Display.classList.add("winner");
    gameover= true;
  }
  p2Display.textContent = p2score;
}
})


// for button three (Reset)
var resetB = document.querySelector("#reset")
resetB.addEventListener("click" , function(){
  reset();
});


 function reset(){
   p1score = 0;
   p2score = 0;
   p1Display.textContent = 0;
   p2Display.textContent = 0;
   p1Display.classList.remove("winner");
   p2Display.classList.remove("winner");
   gameover= false;
 }

 // for input
 var inputB= document.querySelector("input");
 var playing = document.querySelector("p span");

 inputB.addEventListener("change", function(){
   playing.textContent = Number(inputB.value);
   win = Number(inputB.value);
   reset();
 })
