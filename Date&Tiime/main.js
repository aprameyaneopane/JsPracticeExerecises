
let dayDate = document.getElementById("day");
let timeToday = document.getElementById("time");


const today = new Date();
const day = today.getDay();

const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let weekday = (`Today is  ${dayList[day]}.`);

dayDate.innerHTML = weekday;

const hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();

timeToday.innerHTML = `Time is ${hours} : ${minutes} : ${seconds}`;

// hours = 13;

if (hours > 12) {
    timeToday.innerHTML = `Time is ${hours - 12} : ${minutes} : ${seconds} PM`;
}

else if (hours < 12) {
    timeToday.innerHTML = `Time is ${hours} : ${minutes} : ${seconds} AM`;
}


// if (hours > 12) {
//     hours = hours - 12;
//     timeToday.innerHTML = `Time is ${hours} : ${minutes} : ${seconds} PM`;
// }

// else {
//     timeToday.innerHTML = `Time is ${hours} : ${minutes} : ${seconds} AM`;
// }



