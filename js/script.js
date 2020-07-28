// using function in match & didn't match:
let notMatchAlert = document.getElementById("notMatch-alert");
let matchAlert = document.getElementById("match-alert");

function removeAlert(){
    notMatchAlert.style.display = "none";
    matchAlert.style.display = "none";
}

// Random apply in generate pin & it's screen:

let generatePinBtn = document.getElementById("generatePin-btn");
let generatePinScreen = document.getElementById("generatePin-screen");

generatePinBtn.addEventListener("click", function(){
    let randomRange = [];
    for(let i = 1000; i < 9999; i++){
        randomRange.push(i);
    }
    let mathRandom = Math.ceil(Math.random() * 7999);
    generatePinScreen.value = randomRange[mathRandom];

    removeAlert();
    showConfirmPin.value = "";
    submitConfirmationPin.disable = false;
    tryToCount.innerText = 3;

})

// pin confirm section:

let slicerBtn = document.getElementById("slicer-btn");
slicerBtn.addEventListener("click", function(){
    showConfirmPin.value = showConfirmPin.value.slice(0, -1);
    if(showConfirmPin.value.length < 4){
        removeAlert();
    }
})

let clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", function(){
    showConfirmPin.value = "";
    removeAlert();
})

let showConfirmPin = document.getElementById("show-confirmPin");
let submitConfirmationPin = document.getElementById("submit-confirmPin");

submitConfirmationPin.addEventListener("click", function(){
    if(showConfirmPin.value.length == 4){ 
        if(showConfirmPin.value == generatePinScreen.value){
            matchAlert.style.display = "block";
        }
        else{
            notMatchAlert.style.display = "block";
        }
    }

    let tryToCount = document.getElementById("tryToCount");
    let decrease = parseInt(tryToCount.innerText)-1;
    tryToCount.innerText = decrease;
    if(tryToCount.innerText == 0){
        if(generatePinScreen.value == showConfirmPin.value){
            tryToCount.innerText = 3;
        }
    }
}) 

showConfirmPin.addEventListener("click",function(){
    showConfirmPin.value = "";
    removeAlert();
})