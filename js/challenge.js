let timeCounter = document.getElementById("counter");
let decrement = document.getElementById("minus");
let increment = document.getElementById("plus");
let timeCounterText = "";
let heartContent = document.getElementById("heart");
let likesList = document.querySelector(".likes");
let pauseTime = document.getElementById("pause");
const buttons = document.getElementsByTagName("button");
let commentInput = document.getElementById("comment-input")
let form = document.getElementById("comment-form");
let divContent = document.getElementById("list");
let submitButton = document.getElementById("submit");

let time = 0
let timerId;




 let count = setInterval(function(){
  time++
  timeCounter.textContent = time;
}, 1000);

decrement.addEventListener("click", function(){

  timeCounterText.textContent = timeCounter.textContent--;
})
increment.addEventListener("click", function(){
  timeCounterText.textContent = time++;
});

heartContent.addEventListener("click", function(){

  const li = document.createElement("li");
li.textContent = `${time} has been like`
likesList.appendChild(li);

})


form.addEventListener("submit", function(event){
  event.preventDefault();
  const liComment =document.createElement("li");
  liComment.textContent = commentInput.value;
  divContent.appendChild(liComment);
  commentInput.value = "";
})


pauseTime.addEventListener("click", function(){
  decrement.disabled = true;
  increment.disabled = true;
  heartContent.disabled = true;
  submitButton.disabled = true;
 if(pauseTime.textContent === "pause"){
      clearInterval(count)
      
pauseTime.textContent = "Resume"
  }else{
    decrement.disabled = false;
      increment.disabled = false;
      heartContent.disabled = false;
      submitButton.disabled = false;
    count = setInterval(function(){
      time++;
      
     timeCounter.textContent = time;
   },1000);
   pauseTime.textContent = "pause"
  }
  

  



});
