const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
isZero = true;
let cont = document.querySelector(".container");
let head = document.querySelector("h1");
let msgCont = document.querySelector(".msg-container");
let msgP = document.querySelector(".msg-container p");
let btnNew = document.querySelector("#newB");
let resetButton = document.querySelector("#rst");
// accessing buttons node which has 8 button
let buttons = document.querySelectorAll(".btns");
for (let button of buttons) {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    // passing true value and making the first click as 'o' and then making it false so next time it enter in else
    if (isZero) {
      button.innerText = "o";
      isZero = false;
    } else {
      // making the click value 'x' and then same as above
      button.innerText = "x";
      isZero = true;
    }
    // dissabling the button for the place already choosen
    button.disabled = true;
    // checking winning pattern after each alternate clicks
    checkPattern();
  });
}

const checkPattern = () => {
  // accessing each array inside winpattern array
  winPattern.forEach((i) => {
    // making variables from the array 'i'
    let [x, y, z] = i;
    //find innerText of all the button in 'i' array

    let value1 = buttons[x].innerText;
    let value2 = buttons[y].innerText;
    let value3 = buttons[z].innerText;
    // checking if any button is empty
    if (value1 != "" && value2 != "" && value3 != "") {
      // checking if all values on all button are equal
      if (value1 === value2 && value2 === value3) {
        showWinner(i, value1);
        btnDisable();
      }
    }
  });
};
const btnDisable = () => {
  for (let btn of buttons) {
    btn.disabled = true;
  }
};
const btnEnable = () => {
  for (let btn of buttons) {
    btn.disabled = false;
    btn.innerText = "";
  }
};

const showWinner = (i, value1) => {
  // appear1(i);
   setTimeout(() => {
    msgCont.classList.remove("hide");
    msgP.innerText = `Congratulations, the winner is... ${value1}`;
   }, 500);
};

  // const appear1 = (i) => {
  //   i.forEach((eleOfI) => {
  //     buttons[eleOfI].style.backgroundColor = "#f4e0e0";
  //     buttons[eleOfI].style.fontSize = "5rem";
  //     buttons[eleOfI].style.boxShadow = "none";
  //     buttons[eleOfI].style.transition = "font-size 0.3s linear ";
  //     buttons[eleOfI].style.transform = "scale(1.2)";
  //   });
  // };

const newGame = () => {
  isZero = true;
  btnEnable();
  msgCont.classList.add("hide");
 
};

btnNew.addEventListener("click", newGame);
resetButton.addEventListener("click", newGame);
