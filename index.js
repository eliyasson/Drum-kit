const drum = document.querySelectorAll(".drum");
for (let i = 0; i < drum.length; i++) {
    drum[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;
        if(buttonInnerHTML === "w") {
            const tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
        } else if(buttonInnerHTML === "a"){
            const tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
        } else if(buttonInnerHTML === "s"){
            const tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
        } else if(buttonInnerHTML === "d"){
            const tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
        } else if(buttonInnerHTML === "j") {
            const snare = new Audio('./sounds/snare.mp3');
            snare.play();
        } else if (buttonInnerHTML === "k") {
            const crash = new Audio('./sounds/crash.mp3');
            crash.play();
        } else if (buttonInnerHTML === "l") {
            const kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
        } else {

        }


        /*switch(buttonInnerHTML) {
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
    }); 
 
}
/*
drum[i].addEventListener("click", () => {
        const audio = new Audio('./sounds/tom-1.mp3');
        audio.play();
    })
*/
