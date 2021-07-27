
let todayDate = new Date();

let year = todayDate.getFullYear();
let month = todayDate.getMonth();
let day = todayDate.getDate();

let formatOne = document.getElementById("one");
let formatTwo = document.getElementById("two");
let formatThree = document.getElementById("three");

if ((month < 10) && (day < 10)) {
    let MMDDYYYY = `Today is 0${month} / 0${day} / ${year}`;

    let DDMMYYYY = `Today is 0${day} / 0${month} / ${year}`;

    let YYYYMMDD = `Today is ${year} / 0${month} / 0${day}`;

    formatOne.innerHTML = MMDDYYYY;

    formatTwo.innerHTML = DDMMYYYY;

    formatThree.innerHTML = YYYYMMDD;
}

else if ((month < 10) && (day > 10)) {
    let MMDDYYYY = `Today is 0${month} / ${day} / ${year}`;

    let DDMMYYYY = `Today is ${day} / 0${month} / ${year}`;

    let YYYYMMDD = `Today is ${year} / 0${month} / ${day}`;

    formatOne.innerHTML = MMDDYYYY;

    formatTwo.innerHTML = DDMMYYYY;

    formatThree.innerHTML = YYYYMMDD;
}




