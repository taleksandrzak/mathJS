const addChkBox = document.getElementById("add");
const subChkBox = document.getElementById("sub");
const multChkBox = document.getElementById("mult");
const diviChkBox = document.getElementById("divi");
const ChkBoxs1 = [addChkBox, subChkBox, multChkBox, diviChkBox];

const n10Rad = document.getElementById("n10");
const n100Rad = document.getElementById("n100");
const n1000Rad = document.getElementById("n1000");
const n10000Rad = document.getElementById("n10000");
const ChkBoxs2 = [n10Rad, n100Rad, n1000Rad, n10000Rad];

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const task = document.getElementById("task");

btn1.addEventListener("click", (e) => {
  e.preventDefault();
  reslChkBocx = ChkBoxs1.map((el) => el.checked);
  console.log(reslChkBocx);
});

btn2.addEventListener("click", (e) => {
  e.preventDefault();
  const reslChkBocx = ChkBoxs2.map((el) => el.checked);
  console.log(reslChkBocx);
  task.innerText = "2 + 2 = ";
});
