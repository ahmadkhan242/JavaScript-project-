// classesHeld variable for no of classes held
var classesHeld = 0;
// attendHeld variable for no of classes attend
var attendHeld = 0;

//Here all the calculatin happen
function score(){
  var a = (attendHeld / classesHeld)*100 ;
  document.querySelector("#persentage").textContent = parseInt(Math.ceil(a));
  if (a > Number(75) ){
        var x= 0;
        document.querySelector("#result").innerHTML = "You have sufficent attendence u can bunk now :) " }
  else {
        //var x = (3*classesHeld) - (4*attendHeld);
        var x = Math.ceil(3*classesHeld/4) - attendHeld ;
        document.querySelector("#result").innerHTML = "You have to attend "+ x +" classes for minimum 75% attendance.";
        }
  };
// For button 1 with id btn1
var bt1n= document.querySelector("#btn1");
bt1n.addEventListener("click", function(){
  if (classesHeld >0 && classesHeld > attendHeld){
    classesHeld--;
    classesDisplay.value = classesHeld;
    score()
  }
});

// For button 2 id class btn2
var bt2n = document.querySelector("#btn2")
bt2n.addEventListener("click", function(){
    classesHeld++;
    classesDisplay.value = classesHeld;
    score()
});

// For button 3 with id btn3
var bt3n= document.querySelector("#btn3");
bt3n.addEventListener("click", function(){
  if (attendHeld >0){
    attendHeld--;
    attendDisplay.value = attendHeld;
    score()
  }
});

// For button 4 with id btn4
var bt4n = document.querySelector("#btn4")
bt4n.addEventListener("click", function(){
  if(classesHeld > attendHeld){
    attendHeld++;
  };
    attendDisplay.value = attendHeld;
    score()
});

document.querySelector('input[type="number"]').addEventListener("input", function () {
  classesHeld = document.querySelector('#classesDisplay').value
  attendHeld = document.querySelector('#attendDisplay').value
  score()
});
