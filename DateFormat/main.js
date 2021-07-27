
let todayDate = new Date();

let year = todayDate.getFullYear();
let month = todayDate.getMonth();
let day = todayDate.getDate();

let formatOne = document.getElementById("one");
let formatTwo = document.getElementById("two");
let formatThree = document.getElementById("three");


let MMDDYYYY = `Today is ${month} / ${day} / ${year}`;

formatOne.innerHTML = MMDDYYYY;