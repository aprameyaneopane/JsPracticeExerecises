function colorChanger() {

    let element = document.getElementById("changeColor");

    let blue = document.getElementById("blue");
    let red = document.getElementById("red");
    let yellow = document.getElementById("yellow");
    let green = document.getElementById("green");
    let purple = document.getElementById("purple");
    let orange = document.getElementById("orange");

    blue.onclick = function () {
        element.style.color = "blue";
    }

    red.onclick = function () {
        element.style.color = "red";
    }

    yellow.onclick = function () {
        element.style.color = "gold";
    }

    green.onclick = function () {
        element.style.color = "green";
    }

    purple.onclick = function () {
        element.style.color = "purple";
    }

    orange.onclick = function () {
        element.style.color = "rgb(255, 102, 0)";
    }

}