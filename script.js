let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let btns = ["green", "yellow", "red" ,"purple"];
let h2 = document.querySelector("h2");


document.addEventListener("keypress", function(){
    if (started == false){
        console.log("game is started");
        started = true;

        levelUp();

    }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    }, 500);
}

function gameFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    }, 500);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameFlash(randBtn);

    gameSeq.push(randColor);
    console.log(gameSeq);


    // console.log(randBtn);
    // console.log(randIdx);
    // console.log(randColor);
};

function checkAns(idx){
    console.log("curr level : ", level);

    // let idx = level-1;
    if(userSeq[idx] == gameSeq[idx]){
       
        // console.log("same value");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
       
        h2.innerHTML = `Game Over! your score was ${level} <br> Press any key to start... `
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },250);
        reset();
    }
}

function btnPress(){
    // console.log(this);
    let btn = this;
    gameFlash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);

}


function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}
