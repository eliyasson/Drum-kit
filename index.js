//Detecting Button press
const drum = document.querySelectorAll(".drum");
for (let i = 0; i < drum.length; i++) {
    drum[i].addEventListener("click", function () {
        let innerHTML = this.innerHTML;
        playSound(innerHTML);
    });   
};

//Detecting keyboard press
document.addEventListener("keydown", function(event) {
    playSound(event.key);
    /*const keyPressed = event.key.toLowerCase();
    if(keyPressed === "w" || keyPressed === "a" || keyPressed === "s" ||
        keyPressed === "d" || keyPressed === "j" || keyPressed === "k" || keyPressed === "l") {
        playSound(keyPressed);
    }*/
})



function playSound(key) {
            if(key === "w") {
            const tom1 = new Audio('./sounds/tom-1.mp3').play();
            } else if(key === "a"){
                const tom2 = new Audio('./sounds/tom-2.mp3').play();

            } else if(key === "s"){
                const tom3 = new Audio('./sounds/tom-3.mp3').play();
            
            } else if(key === "d"){
                const tom4 = new Audio('./sounds/tom-4.mp3').play();
            
            } else if(key === "j") {
                const snare = new Audio('./sounds/snare.mp3').play();
            
            } else if (key === "k") {
                const crash = new Audio('./sounds/crash.mp3').play();
                
            } else if (key === "l") {
                const kick = new Audio('./sounds/kick-bass.mp3').play();
            
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
        }*/
    
 
};
/*
drum[i].addEventListener("click", () => {
        const audio = new Audio('./sounds/tom-1.mp3');
        audio.play();
    })
*/
