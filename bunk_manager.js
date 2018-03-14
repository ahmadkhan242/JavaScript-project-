// classesHeld variable for no of classes held
var classesHeld = 0;
// attendHeld variable for no of classes attend
var attendHeld = 0;

//Here all the calculatin happen 
function score(){
  var x = (3*classesHeld) - (4*attendHeld);
  document.querySelector("#result").innerHTML = "You have to attend "+ x +" classes for 75% attendance.";
  var a = (attendHeld / classesHeld)*100 ;
  document.querySelector("#persentage").textContent = a;
};
// For button 1 with class btn1
var bt1n= document.querySelector("#btn1");
bt1n.addEventListener("click", function(){
  if (classesHeld >0 && classesHeld > attendHeld){
    classesHeld--;
    classesDisplay.textContent = classesHeld;
    score()
  }
});

// For button 2 with class btn2
var bt2n = document.querySelector("#btn2")
bt2n.addEventListener("click", function(){
    classesHeld++;
    classesDisplay.textContent = classesHeld;
    score()
});

// For button 3 with class btn3
var bt3n= document.querySelector("#btn3");
bt3n.addEventListener("click", function(){
  if (attendHeld >0){
    attendHeld--;
    attendDisplay.textContent = attendHeld;
    score()
  }
});

// For button 4 with class btn4
var bt4n = document.querySelector("#btn4")
bt4n.addEventListener("click", function(){
  if(classesHeld > attendHeld){
    attendHeld++;
  };
    attendDisplay.textContent = attendHeld;
    score()
});
