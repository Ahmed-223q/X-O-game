let title = document.getElementById("title");
let btn = document.getElementById("btn");
let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
let item4 = document.getElementById("item4");
let item5 = document.getElementById("item5");
let item6 = document.getElementById("item6");
let item7 = document.getElementById("item7");
let item8 = document.getElementById("item8");
let item9 = document.getElementById("item9");
let turn = "X";
// cases of winner and what i do if anyone is win
function win() {
  if (
    item1.innerHTML == item2.innerHTML &&
    item2.innerHTML == item3.innerHTML &&
    item3.innerHTML != ""
  ) {
    title.innerHTML = item1.innerHTML + " winner";

    item1.style.background = "#fff";
    item2.style.background = "#fff";
    item3.style.background = "#fff";
    item1.style.color = "#f24";
    item2.style.color = "#f24";
    item3.style.color = "#f24";
  } else if (
    item4.innerHTML == item5.innerHTML &&
    item5.innerHTML == item6.innerHTML &&
    item6.innerHTML != ""
  ) {
    title.innerHTML = item4.innerHTML + " winner";

    item4.style.background = "#fff";
    item5.style.background = "#fff";
    item6.style.background = "#fff";
    item4.style.color = "#f24";
    item5.style.color = "#f24";
    item6.style.color = "#f24";
  } else if (
    item7.innerHTML == item8.innerHTML &&
    item8.innerHTML == item9.innerHTML &&
    item9.innerHTML != ""
  ) {
    title.innerHTML = item7.innerHTML + " winner";

    item7.style.background = "#fff";
    item8.style.background = "#fff";
    item9.style.background = "#fff";
    item7.style.color = "#f24";
    item8.style.color = "#f24";
    item9.style.color = "#f24";
  } else if (
    item1.innerHTML == item4.innerHTML &&
    item4.innerHTML == item7.innerHTML &&
    item7.innerHTML != ""
  ) {
    title.innerHTML = item1.innerHTML + " winner";

    item1.style.background = "#fff";
    item4.style.background = "#fff";
    item7.style.background = "#fff";
    item1.style.color = "#f24";
    item4.style.color = "#f24";
    item7.style.color = "#f24";
  } else if (
    item2.innerHTML == item5.innerHTML &&
    item5.innerHTML == item8.innerHTML &&
    item8.innerHTML != ""
  ) {
    title.innerHTML = item2.innerHTML + " winner";

    item2.style.background = "#fff";
    item5.style.background = "#fff";
    item8.style.background = "#fff";
    item2.style.color = "#f24";
    item5.style.color = "#f24";
    item8.style.color = "#f24";
  } else if (
    item3.innerHTML == item6.innerHTML &&
    item6.innerHTML == item9.innerHTML &&
    item9.innerHTML != ""
  ) {
    title.innerHTML = item3.innerHTML + " winner";

    item3.style.background = "#fff";
    item6.style.background = "#fff";
    item9.style.background = "#fff";
    item3.style.color = "#f24";
    item6.style.color = "#f24";
    item9.style.color = "#f24";
  } else if (
    item1.innerHTML == item5.innerHTML &&
    item5.innerHTML == item9.innerHTML &&
    item9.innerHTML != ""
  ) {
    title.innerHTML = item1.innerHTML + " winner";

    item1.style.background = "#fff";
    item5.style.background = "#fff";
    item9.style.background = "#fff";
    item1.style.color = "#f24";
    item5.style.color = "#f24";
    item9.style.color = "#f24";
  } else if (
    item3.innerHTML == item5.innerHTML &&
    item5.innerHTML == item7.innerHTML &&
    item7.innerHTML != ""
  ) {
    title.innerHTML = item3.innerHTML + " winner";

    item3.style.background = "#fff";
    item5.style.background = "#fff";
    item7.style.background = "#fff";
    item3.style.color = "#f24";
    item5.style.color = "#f24";
    item7.style.color = "#f24";
  }
}

// for chack if anyone is winnnnn
function game(id) {
  let element = document.getElementById(id);

  if (turn === "X" && element.innerHTML == "") {
    element.innerHTML = "X";
    turn = "O";
    title.innerHTML = "O";
  } else if (turn === "O" && element.innerHTML == "") {
    element.innerHTML = "O";
    turn = "X";
    title.innerHTML = "X";
  }
  win();
}

// for reload the bage and start a new game
btn.onclick = function () {
  setTimeout(function () {
    location.reload();
  }, 100);
};
//
// i kown the peoject is not amazing but not forget like and follow🥸🥸
