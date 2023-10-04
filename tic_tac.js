let turn = "X";
let isgameover = false;

let touchaudio = new Audio("Message - 1 Second ! Notification.mp3");
let gameoveraudio = new Audio("Alarm 1 Second - Notification.mp3");
let alertaudio = new Audio("mixkit-cartoon-failure-piano-473.wav");

function changeTurn(){
    if(turn=="X")
    return "0";
 return "X";
}

function gameWin(){
    let textbox = document.getElementsByClassName('text-box');

    let arr = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135]
    ]
    arr.forEach(e=>{
            if((textbox[e[0]].innerText===textbox[e[1]].innerText) && (textbox[e[2]].innerText=== textbox[e[1]].innerText)  &&(textbox[e[2]].innerText !== "") ){
                let turnbox = document.getElementById("turn-box");
                turnbox.innerText = textbox[e[2]].innerText + " win";
                alertaudio.play();
                // gameoveraudio.play();
                isgameover = true;
                let line = document.getElementById("line");
                line.style.width = "20vw";
                line.style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
                // line.style.transform = `translate(5vw,15vw) rotate(90deg)`;
            }
    })
}

let box = document.getElementsByClassName('box');
Array.from(box).forEach(function(e){
    let textbox = e.querySelector('.text-box');
    e.addEventListener('click',function(){
        if(isgameover){
            e.removeEventListener();
        }
    if(textbox.innerHTML === ""){   
        textbox.innerHTML = turn;
        
        turn = changeTurn();  
        gameWin();
        let turnbox = document.getElementById("turn-box");
        if(!isgameover){
            touchaudio.play();
                turnbox.innerHTML = "Turn for " + turn;
            }
        }
            else{
                e.removeEventListener();
            }
        })
})

let restart = document.getElementById('restart');
restart.addEventListener('click',function(){
    let textbox = document.querySelectorAll('.text-box');
    turn = "X";
    let turnbox = document.getElementById("turn-box");
    turnbox.innerHTML = "Turn for " + turn;
    isgameover = false;
    let line = document.getElementById("line");
                line.style.width = "0vw";
    Array.from(textbox).forEach(function(e){
        e.innerHTML = "";
    })
})
