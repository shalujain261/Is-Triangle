const sideInput = document.querySelectorAll(".side-input");
const btn = document.querySelector("#btn");
const outputEle = document.querySelector("#output");

function sumOfSquare(a,b){
  let sum = a**2 + b**2;
  return sum;
}

function calculateHypotenuse(){
   let a =  sideInput[0].value;
   let b =  sideInput[1].value;
   let SumOfSquare = sumOfSquare(Number(a),Number(b));
   let squareRoot = Math.sqrt(SumOfSquare);
  outputEle.innerText = "The Length if hypotenuse is : " + squareRoot;
}


btn.addEventListener('click',calculateHypotenuse)