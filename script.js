const input = document.querySelectorAll('.angle-input');
const btn = document.querySelector('#btn');
const output = document.querySelector('#output')

function calculateSumOfAngles(angle1, angle2, angle3){
   const sumOfAngles = angle1 + angle2 + angle3;
   return sumOfAngles;

}

function isTriangle(){
    let angle1 = input[0].value;
    let angle2 = input[1].value;
    let angle3 = input[2].value;
    let sumOfAngles =  calculateSumOfAngles(Number(angle1),Number(angle2),Number(angle3));

    if(sumOfAngles === 180){
        output.innerText = "Yes, These angles form a Triangle"
       }
       else{
       output.innerText = "No no no...! These angles don't form a Triangle"
       }
}

btn.addEventListener("click",isTriangle);