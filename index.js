// console.log(`Hello`);
// console.log(`I love you`);

// window.alert(`Hello world`);
// window.alert(`I love Ayomide and Tayo`)
/* This is my name
my name are
your name */
// document.getElementById("myh1").textContent =  `Hello world`
// document.getElementById("myP").textContent =  `I like pizza!`

//declaration let x;
//assignment x = 200;

// let x;
// x = 250;
// console.log(x)

// let age = 50;
// let gpa = 4.9;
// let price = 10;

// console.log(gpa);
// console.log(price);
// console.log(age);


// let gpa = "bro";
// let price = 10.8;
// console.log(typeof price)
// console.log(typeof gpa)
// console.log(`You are ${age} years Old`);
// console.log(`the price is ${price} naira`);
// console.log(`my result is ${gpa} cgpa`);

// let favouriteFood = "Yam and Egg";
// console.log(`My favourite Food is ${favouriteFood}`)

// Boolean either true or false
// let online = true;
// console.log(online);
// let offline = false;
// console.log( typeof offline);

// practice
// let fullName = "Ayo, Tayo, Shade"
// let age = 22;
// let isStudent = true

// document.getElementById("p1").textContent = ` Your name is ${fullName}`;
// document.getElementById("p2").textContent = `you are ${age} years old`;
// document.getElementById("p3").textContent = `you are a student: ${isStudent}`;

// Ternary operator
// const food = "Amala"
// if(food == 'Amala'){
//     console.log(true);
//     }else{
//         console,log(false);
//     }

// alternative for ternary code
//     condition?iftrue:iffalse
    // food == 'Amala'?console.log(true):console.log(false)

    // arithematic operators = operands (value, variables etc)
    // operators (-, +, *, / etc)
    // expression(x = 1+2)

    // let students = 30
    // students = students + 1
    // students = students - 1
    // students = students * 2
    // students = students ** 2
    // students = students % 2
    // students += 2;
    // students --;
    // students ++;
    // console.log(students);

    // operators precedence
    // parenthesis ()
    // exponents **
    // multiplication and division
    // add and sub

    // let result = 2 ** 10;
    // console.log(result);

    // How to accept user input in JS
    // 1. easy way = window prompt
    // 2. Professional Way = HTML textbox

    // let username;
    // username = window.prompt("what is your username?");
    // console.log(username);

    // let username;
    // document.getElementById("mySubmit").onclick = function(){
    //     username = document.getElementById("myText").value;
    //     document.getElementById("myh1").textContent = `HEllo ${username}`
    //     // console.log(username);
    // }

    // type conversion = change the datatype of a value to another (numbers, String, booleans)

    // let age = window.prompt('How old are you?');
    // age = Number(age)
    // age+=1;
    // console.log(age, typeof age);

    // let x = "Pizza"
    // let y = "Pizza"
    // let z = "Pizza"

    // x = Number(x);
    // y = String(y);
    // z = Boolean(z);

    // console.log(x, typeof x);
    // console.log(y, typeof y);
    // console.log(z, typeof z);

    // const = a variable that can't be changed
    // const PI = 3.142;
    // let radius;
    // let circumference;

    // radius = window.prompt("Type your Radius Here");
    // radius = Number(radius)
    // circumference = 2 * PI *  radius;
    // console.log( circumference);

    // const PI = 3.142;
    // let radius;
    // let circumference;

    // document.getElementById("mySubmit").onclick = function(){
    //     radius = document.getElementById("myRadius").value;
    //     radius = Number(radius);
    //     circumference = 2 * PI *  radius;
    //     document.getElementById("myh3").textContent  = circumference + "cm";
    //     // console.log(circumference);
    // }


    // counter program
// i have the code already

// Math = built in object that provides a clollection of properties and methods
// console.log(Math.PI);
// console.log(Math.E);

// let y = 81;
// let x = 2;
// let z = 3;
// let z;

// z = Math.round(y);
// z = Math.floor(y);
// z = Math.ceil(y);
// z = Math.trunc(y);
// z = Math.pow(y,x);
// z = Math.sqrt(y);
// z = Math.sin(y);
// z = Math.log(y);
// console.log(z)
// z = Math.tan(y);
// z = Math.cos(y);
// z = Math.sign(y);
// z = Math.abs(y);
// z = Math.sign(y);
// let max = Math.max(x, y, z);
// let min = Math.min(x, y, z);
// console.log(min);


// RANDOM NUMBER GENERATOR
// let randomNum = Math.floor (Math.random() * 100) + 1;
// console.log(randomNum) 


let max = 150;
let min = 50;

let randomNum = Math.floor(Math.random()*(max-min)) + min;
console.log(randomNum);