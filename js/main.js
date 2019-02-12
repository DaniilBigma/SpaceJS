var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
console.log("Width: "+WIDTH+"px, " + "Height: "+HEIGHT+"px");

var mainElement = document.getElementById("main");
var timer;

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
};

function startEffect() {
    var newElement = document.createElement("div");
    var ballLength = document.getElementsByClassName("newBall").length;
    if (ballLength % 2) {
        newElement.setAttribute("id", "red");
    } else if (ballLength % 3) {
        newElement.style.borderColor = "white";
    }
    newElement.setAttribute("class", "newBall");
    elementStyle(newElement);
    mainElement.appendChild(newElement);
}

function disalbeButtonStart() {
    let buttonStart = document.getElementById("starteffect");
    buttonStart.disabled = true;
}

function enableButtonStart() {
    let buttonStart = document.getElementById("starteffect");
    buttonStart.disabled = false;
}

function removeAllElements() {
    var ballElements = document.querySelectorAll(".newBall");
    for (var i = 0; i < ballElements.length; i++) {
        mainElement.removeChild(ballElements[i]);
    }
    console.log("Has been removed " + ballElements.length + " elements");
}