const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {

    if (myCheckBox.checked) {
        subResult.textContent = `You are subscribed`;
    }
    else {
        subResult.textContent = `You are NOT subscribed`;
    }
    
    if (visaBtn.checked) {
        paymentResult.textContent = `You are paying with visa`;
    }
    else if (masterCardBtn.checked) {
        paymentResult.textContent = `You are paying with MasterCard`;
    }
    else if (payPalBtn.checked) {
        paymentResult.textContent = `You are paying PayPal`;
    }
    else {
        paymentResult.textContent = `You must select a payment type`;
    }
}

// ternary operator = a shortcut to if{} and else{} statements 
// helps to assign a variable based on a condition
// condition? codeIfTrue: codeIfFalse;

// let age = 12;
// let message = age >= 18? "You're an  adult": "You're a minor";
// console.log(message);

// let time =  16;
// let greeting = time < 12 ? "Good morning" : "Good afternoon";
// console.log(greeting);

let isStudent = false