const Input = document.querySelectorAll(".input-sec");
const btn = document.querySelector(".btn");
const outputEle = document.querySelector(".output");

function Area(base,height){
   let area = 1/2*(base*height);
   return area;
}

function calculateAreaOfTriangle(){
     let calArea =  Area(Number(Input[0].value),Number(Input[1].value));
     outputEle.innerText = "The area of triangle is : " + calArea;
}

btn.addEventListener('click',calculateAreaOfTriangle)