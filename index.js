/*
//Detecting Button press
const drum = document.querySelectorAll(".drum");
for (let i = 0; i < drum.length; i++) {
    drum[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });   
};

//Detecting keyboard press
document.addEventListener("keypress", function(event) {
    playSound(event.key.toLowerCase());
    buttonAnimation(event.key);
})

function playSound(key) {
            if(key === "w") {
                new Audio('./sounds/tom-1.mp3').play();
            } else if(key === "a"){
                new Audio('./sounds/tom-2.mp3').play();
            } else if(key === "s"){
                new Audio('./sounds/tom-3.mp3').play();
            } else if(key === "d"){
                new Audio('./sounds/tom-4.mp3').play();
            } else if(key === "j") {
                new Audio('./sounds/snare.mp3').play();
            } else if (key === "k") {
                new Audio('./sounds/crash.mp3').play();
            } else if (key === "l") {
                new Audio('./sounds/kick-bass.mp3').play();
            } else {

            }
        /*switch(key) {
            case "w": 
                const tom1 = new Audio('./sounds/tom-1.mp3');
                tom1.play(); 
            break;
            case "a":
                const tom2 = new Audio('./sounds/tom-2.mp3');
                tom2.play(); 
            break;
            case "s":
                const tom3 = new Audio('./sounds/tom-3.mp3');
                tom3.play(); 
            break;
            case "d":
                const tom4 = new Audio('./sounds/tom-4.mp3');
                tom4.play(); 
            break;
            case "j":
                const snare = new Audio('./sounds/snare.mp3');
                snare.play(); 
            break;
            case "k":
                const crash = new Audio('./sounds/crash.mp3');
                crash.play(); 
            break;
            case "l":
                const kick = new Audio('./sounds/kick-bass.mp3');
                kick.play(); 
            break;

            default:
        } 
};

function buttonAnimation(currentKey) {
    const activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
*/





let drum = document.querySelectorAll(".drum");
for(let i = 0; i < drum.length; i++) {
    drum[i].addEventListener("click", clickButton);
}



function clickButton() {
    let buttonInnerHTML = this.innerHTML;
    playAudio(buttonInnerHTML);
      
}

function drumKey() {
    document.addEventListener("keypress", function(event) {
        playAudio(event.key);  
    });
}
drumKey();





function playAudio(key) {
    switch(key) {
        case "w":
            new Audio("./sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("./sounds/tom-2.mp3").play();
            break;
        case "s":
            new Audio("./sounds/tom-3.mp3").play();
            break;
        case "d":
            new Audio("./sounds/tom-4.mp3").play();
            break;
        case "j":
            new Audio("./sounds/snare.mp3").play();
            break;
        case "k":
            new Audio("./sounds/crash.mp3").play();
            break;
        case "l":
            new Audio("./sounds/kick-bass.mp3").play();
            break;
        default:
    }
}

