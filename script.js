const input = document.querySelectorAll('.angle-input');
const btn = document.querySelector('#btn');
let output = document.querySelector('#output')

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
        output.innerText = "Yes, These angles form a Triangle";
       }
    else{
        // console.log(" not done")
        output.innerText = "No no no...! These angles don't form a Triangle";
       }
}

btn.addEventListener("click",isTriangle);


// const angles = document.querySelectorAll('.angle-input');
// const isTringleBtn = document.querySelector('#btn')
// let output = document.querySelector('#output')

// function calculateSumOfAngles(angle1,angle2,angle3){
//     const sum = angle1+angle2+angle3;
//     return sum;
// }

// function isTringle()
// {
//     const sumOfAngles = calculateSumOfAngles(Number(angles[0].value),Number(angles[1].value),Number(angles[2].value));
//     if(sumOfAngles === 180){
//         output.innerText = "yay , the angles form a triangle"
//     }
//     else{
//         output.innerText= "oh oh! the angles not form a triangle"
//     }
// }


// isTringleBtn.addEventListener("click", isTringle)