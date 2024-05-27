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
const btn4 = document.getElementById("btn4");
const task = document.getElementById("task");

const userAnswer = document.getElementById("user-answer");
const feedback = document.getElementById("feedback");
const noOperation = document.getElementById("noOperation");
const operationsDiv = document.getElementById("operations-div");
const numbersDiv = document.getElementById("numbers-div");
const exerciseDiv = document.getElementById("exercise-div");
const noNumber = document.getElementById("no-number");

const randNumb = function (n) {
  return Math.trunc(Math.random() * n) + 1;
};
const randOpert = function (m) {
  return Math.trunc(Math.random() * m);
};

let n, m, operatorIndex, n1, n2;

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
  if (!checkedOperators.includes(true)) {
    noOperation.textContent = "Wybierz przynajmniej jedno działanie!";
    return;
  }
  checkedOperators.forEach((box, i) => {
    if (box) {
      choosenOperators.push(allOperators[i]);
    }
  });
  m = choosenOperators.length;
  operationsDiv.classList.add("hidden");
  numbersDiv.classList.remove("hidden");
});

btn2.addEventListener("click", (e) => {
  e.preventDefault();

  const choosenRange = choosenRangeRad.forEach((rad) => {
    if (rad.checked) {
      n = Number(rad.id.slice(1));
    }
  });

  if (!n) {
    noNumber.textContent = "Wybierz jeden zakres liczb!";
    return;
  }

  numbersDiv.classList.add("hidden");
  exerciseDiv.classList.remove("hidden");
  n1 = randNumb(n);
  n2 = randNumb(n);
  operatorIndex = randOpert(m);
  task.textContent = `${n1} ${choosenOperators[operatorIndex]}  ${n2}`;
});

btn3.addEventListener("click", () => {
  if (
    Number(userAnswer.value) === OPMAP[choosenOperators[operatorIndex]](n1, n2)
  ) {
    feedback.textContent = "OK";
    btn3.classList.add("hidden");
    btn4.classList.remove("hidden");
  } else {
    feedback.textContent = "Źle";
    userAnswer.value = "";
    userAnswer.focus();
  }
});

btn4.addEventListener("click", () => {
  feedback.textContent = "";
  userAnswer.value = "";
  userAnswer.focus();
  n1 = randNumb(n);
  n2 = randNumb(n);
  operatorIndex = randOpert(m);
  task.textContent = `${n1} ${choosenOperators[operatorIndex]}  ${n2}`;
  btn3.classList.remove("hidden");
  btn4.classList.add("hidden");
});
