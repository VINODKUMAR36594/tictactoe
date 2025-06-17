let boxes = document.querySelectorAll(".box");
let resetbt = document.querySelector(".rr");
let msg = document.querySelector("#msg");
let turno = true;

const win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

// Handle box clicks
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turno) {
            box.innerText = "O";
            turno = false;
        } else {
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

// Check for winner
const checkWinner = () => {
    for (let p of win) {
        let k1 = boxes[p[0]].innerText;
        let k2 = boxes[p[1]].innerText;
        let k3 = boxes[p[2]].innerText;

        if (k1 !== "" && k2 !== "" && k3 !== "") {
            if (k1 === k2 && k2 === k3) {
                msg.innerText = `🎉 ${k1 === "O" ? "Player 1 (O)" : "Player 2 (X)"} Wins!`;
                // Disable all boxes
                boxes.forEach(box => box.disabled = true);
                return;
            }
        }
    }

    // Check for draw
    let allFilled = [...boxes].every(box => box.innerText !== "");
    if (allFilled) {
        msg.innerText = "😐 It's a Draw!";
    }
};

// Reset button logic
resetbt.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    turno = true;
    msg.innerText = "";
});
