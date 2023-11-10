const drum = document.querySelectorAll(".drum");
for (let i = 0; i < drum.length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        (this.style.color = "white");
    });


    
    
}
/*
drum[i].addEventListener("click", () => {
        const audio = new Audio('./sounds/tom-1.mp3');
        audio.play();
    })
*/