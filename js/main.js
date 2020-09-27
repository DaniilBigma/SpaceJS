var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
console.log("Width: "+WIDTH+"px, " + "Height: "+HEIGHT+"px");

var mainElement = document.getElementById("main");
var timer;

document.getElementById("starteffect").addEventListener("click", disalbeButtonStart);
document.getElementById("stopeffect").addEventListener("click", enableButtonStart);

var ballLength = 0;

var startTimer = function () {
    timer = setInterval(function () {
        startEffect();
    }, 0)
};

function stop() {
    clearInterval(timer);
}

var elementStyle = function (element) {
    element.style.top = Math.round(Math.random() * 1200) + "px";
    element.style.right = Math.round(Math.random() * 1200) + "px";
    var i = element.style.width,
        j = element.style.height;
    var deadElement = setInterval(function () {
        element.style.width = i--;
        element.style.height = j--;
    }, 1000);
    console.log(deadElement);
};

function startEffect() {
    var newElement = document.createElement("div");
    ballLength = document.getElementsByClassName("newBall").length;
    if (ballLength % 2) {
        newElement.setAttribute("id", "red");
    } else if (ballLength % 3) {
        newElement.style.borderColor = "white";
    }
    newElement.setAttribute("class", "newBall");
    elementStyle(newElement);
    mainElement.appendChild(newElement);
    document.getElementById("countBalls").innerHTML = ballLength;
}

function disalbeButtonStart() {
    let buttonStart = document.getElementById("starteffect");
    buttonStart.disabled = true;
}

function enableButtonStart() {
    let buttonStart = document.getElementById("starteffect");
    buttonStart.disabled = false;
    document.getElementById("countBalls").innerHTML = ballLength + 1;
}

function removeAllElements() {
    var ballElements = document.querySelectorAll(".newBall");
    for (var i = 0; i < ballElements.length; i++) {
        mainElement.removeChild(ballElements[i]);
    }
    console.log("Has been removed " + ballElements.length + " elements");
    document.getElementById("countBalls").innerHTML = 0;
}