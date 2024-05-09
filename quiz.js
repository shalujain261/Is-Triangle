const quizForm = document.querySelector(".quiz-form");
const outputEle = document.querySelector("#output");
const submitBtn = document.querySelector("#submit-btn");

const correctAns = ["90°","right angled"];

function calculateScore(){
   let score = 0;
   let index = 0;

   const formResults = new FormData(quizForm);
   for(let value of formResults.values()){
    if(value === correctAns[index]){
        score = score + 1;
    }
     index = index + 1;
   }
   console.log(score);
}

submitBtn.addEventListener('click',calculateScore)