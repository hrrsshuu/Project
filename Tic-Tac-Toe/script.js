let msgContainer = document.querySelector(".msg-container");
let newGameBtn = document.querySelector("#new-btn");
let Msg = document.querySelector("#msg");
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turnO = true;

const winptn = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        chkwnr();
    });
});

const chkwnr = () => {
    
    for (let pattern of winptn) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWnr(pos1Val);
            }
        }
    }
};

const resetgame = () =>{
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
}

const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWnr = (Winner) => {
    Msg.innerText = `Congratulations, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}


newGameBtn.addEventListener("click", resetgame);
resetBtn.addEventListener("click", resetgame);