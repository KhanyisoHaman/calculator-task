// JavaScript

// Numbers

function zero() {
    document.Calculator.display.value +='0';
}

function one() {
    document.Calculator.display.value +='1';
}

function two() {
    document.Calculator.display.value +='2';
}

function three() {
    document.Calculator.display.value +='3';
}

function four() {
    document.Calculator.display.value +='4';
}

function five() {
    document.Calculator.display.value +='5';
}

function six() {
    document.Calculator.display.value +='6';
}

function seven() {
    document.Calculator.display.value +='7';
}

function eight() {
    document.Calculator.display.value +='8';
}

function nine() {
    document.Calculator.display.value +='9';
}
/* ------------------------------------------------------------------------------------------------------------------------------------------ */
// Key Operators

function btnEqual() {
    document.Calculator.display.value = eval(document.Calculator.display.value);
}

function btnAdd() {
    document.Calculator.display.value +='+';
}

function btnSub() {
    document.Calculator.display.value +='-';
}

function btnMult() {
    document.Calculator.display.value +='*';
}

function btnDiv() {
    document.Calculator.display.value +='/';
}

function btnPer() {
    document.Calculator.display.value +='%';
}

function btnDot() {
    document.Calculator.display.value +='.';
}

function btnClear() {
    document.Calculator.display.value ='';
}


// Show and hide 

$(document).ready(function(){
    $("#hide").click(function(){
      $("form").hide();
    });
    $("#show").click(function(){
      $("form").show();
    });
  });