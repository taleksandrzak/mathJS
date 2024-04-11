const addChkBox = document.getElementById("add");
const subChkBox = document.getElementById("sub");
const multChkBox = document.getElementById("mult");
const diviChkBox = document.getElementById("divi");
const choosenOperatorsBox = [addChkBox, subChkBox, multChkBox, diviChkBox];

const n10Rad = document.getElementById("n10");
const n100Rad = document.getElementById("n100");
const n1000Rad = document.getElementById("n1000");
const n10000Rad = document.getElementById("n10000");
const choosenRangeRad = [n10Rad, n100Rad, n1000Rad, n10000Rad];

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const task = document.getElementById("task");

const randNumb = function (n) {
  console.log(Math.trunc(Math.random() * n) + 1);
};
const randOpert = function (m) {
  return Math.trunc(Math.random() * m);
};

let n, m;

const choosenOperators = [];

const allOperators = ["+", "-", "*", "/"];

const OPMAP = {
  "*": (n1, n2) => n1 * n2,
  "/": (n1, n2) => n1 / n2,
  "+": (n1, n2) => n1 + n2,
  "-": (n1, n2) => n1 - n2,
};

btn1.addEventListener("click", (e) => {
  e.preventDefault();
  const checkedOperators = choosenOperatorsBox.map((box) => box.checked);
  checkedOperators.forEach((box, i) => {
    if (box) {
      choosenOperators.push(allOperators[i]);
    }
  });
  m = choosenOperators.length;
});

btn2.addEventListener("click", (e) => {
  e.preventDefault();
  const choosenRange = choosenRangeRad.forEach((rad) => {
    if (rad.checked) {
      n = Number(rad.id.slice(1));
    }
  });
});

btn3.addEventListener("click", () => {
  console.log(choosenOperators);
  console.log(n);
  console.log(m);
});
