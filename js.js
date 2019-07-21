let num = 0;
let fn = null;
let storeNum = false;
let display = document.querySelector('.display');
let displayText = display.innerText;

let numBtns = document.querySelectorAll('.num');
let fnBtns = document.querySelectorAll('.fn');

function calculate() {
  let displayNum = parseInt(display.innerText);
  switch (fn) {
    case "+":
      num += displayNum;
      break;
    case "-": 
      num -= displayNum;
      break;
    case "x":
      num *= displayNum;
      break;
    case "/":
      num /= displayNum;
      break;d
  }
  return num.toString();
}

numBtns.forEach(function(btn) {
  btn.addEventListener("click", function(event) {
    // alert(storeNum);
    let inputValue = event.target.innerText;
    if(display.innerText == "0" || storeNum) {
       display.innerText = '';
     }
    display.innerText += inputValue;
    storeNum = false;
  })
});

fnBtns.forEach(function(btn) {
  btn.addEventListener("click", function(event) {
    if(event.target.innerText === '=') {
      display.innerText = calculate();
      storeNum = false;
      fn = null;
    } else if (event.target.innerText === 'C') {
      num = 0;
      storeNum = false;
      fn = null;
      display.innerText = "0";
    } else if (event.target.innerText === "B") {
      fn = null;
      if (display.innerText.length === 1) {
        display.innerText = "0";
      } else {
        display.innerText = display.innerText.substr(0, display.innerText.length - 1)
      }
    } else {
      fn = event.target.innerText;
      storeNum = true;
      num = parseInt(display.innerText);
    }
    
  })
})