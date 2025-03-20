let userscore=0;
let compscore=0;

const choices= document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const uscorep = document.querySelector("#myscore");
const cscorep = document.querySelector("#cscore");


const genCompChoice = () =>{
    const options = ["rock", "paper", "scissor"];
    const ridx=Math.floor(Math.random()*3);
    return options[ridx];
}
const showWinner = (userwin) =>{
    if(userwin){
        userscore++;
        uscorep.innerText = userscore;
        msg.innerText="You Win!";
        msg.style.backgroundColor = "Green";
    }else{
        console.log("You lose");
        compscore++
        cscorep.innerText = compscore;
        msg.style.backgroundColor = "Red";
        msg.innerText="You lose!";
    }
}
const drawgame = () => {
    console.log("Game Draw");
    msg.innerText="Game Draw!, Try Again"
        msg.style.backgroundColor = "Orange";
}
const playGame = (aa) =>{
    const compChoice= genCompChoice();
    console.log("user choice = ", aa);
    console.log("Computers Choice = ", compChoice);
    if(aa===compChoice){
        drawgame();
    } else {
        let userwin=true;
        if(aa==="rock"){
            userwin= compChoice==="paper" ? false : true;
        }else if(aa==="paper"){
            userwin= compChoice==="scissor" ?false : true;
        }else{
            userwin= compChoice==="rock" ? false : true;
        }
        showWinner(userwin);
    }
}


choices.forEach((x) =>{
    x.addEventListener("click", () =>{
        const xid = x.getAttribute("id");
        playGame(xid);
    })

}

)