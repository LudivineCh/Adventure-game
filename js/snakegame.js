let music = new Audio("../img/snakegame/music.mp3");
let inputDir = { x: 0, y: 0 };
let speed = 5;
let score = 0;
let lastPaintTime = 0;
let snakeArr = [{ x: 13, y: 15 }];
let food = { x: 6, y: 7 };

// Playing music:
music.play();

//How fast or slow snake is gonna move:
function main(ctime) {
  window.requestAnimationFrame(main);
  if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
    return;
  }
  lastPaintTime = ctime;
  gameEngine();
}

// When the game is lost - snake touches itself or through border
function isCollide(snake) {
  for (let i = 1; i < snakeArr.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
      return true;
    }
  }

  if (
    snake[0].x >= 18 ||
    snake[0].x <= 0 ||
    snake[0].y >= 18 ||
    snake[0].y <= 0
  ) {
    return true;
  }
  return false;
}

//Starting point if game is over
function gameEngine() {
  if (isCollide(snakeArr)) {
    inputDir = { x: 0, y: 0 };
    snakeArr = [{ x: 13, y: 15 }];
    score = 0;
    document.getElementById("overScreen").style.display = "block";
    btnOver.addEventListener("click", function () {
      location.href = "../snakegame.html";
    });
  }

  //Start button
  btnStart.addEventListener("click", function () {
    document.getElementById("introScreen").style.display = "none";
  });

  //WIN : If you get a score of 3 then it redirects you to the adventure game
  if (score === 3) {
    inputDir = { x: 0, y: 0 };
    snakeArr = [{ x: 13, y: 15 }];
    document.getElementById("endScreen").style.display = "block";
    btnEnd.addEventListener("click", function () {
      // Back to the adventure game 
      location.href = "riddle.html";
    });
  }

  // Regenerating the food and add score points, if food is eaten
  if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
    score += 1;
    scoreBox.innerHTML = "Score: " + score;
    snakeArr.unshift({
      x: snakeArr[0].x + inputDir.x,
      y: snakeArr[0].y + inputDir.y,
    });
    let a = 2;
    let b = 16;
    food = {
      x: Math.round(a + (b - a) * Math.random()),
      y: Math.round(a + (b - a) * Math.random()),
    };
  }

  // Moving the snake
  for (let i = snakeArr.length - 2; i >= 0; i--) {
    snakeArr[i + 1] = { ...snakeArr[i] };
  }

  snakeArr[0].x += inputDir.x;
  snakeArr[0].y += inputDir.y;

  //Displaying the snake and Food
  board.innerHTML = "";
  snakeArr.forEach((e, index) => {
    snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;
    if (index === 0) {
      snakeElement.classList.add("head");
    } else {
      snakeElement.classList.add("snake");
    }

    board.appendChild(snakeElement);
  });

  foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  board.appendChild(foodElement);
}

//Makes snake move according to the keys you push on computer.
window.requestAnimationFrame(main);
window.addEventListener("keydown", (e) => {
  inputDir = { x: 0, y: 1 };
  switch (e.key) {
    case "ArrowUp":
      console.log("ArrowUp");
      inputDir.x = 0;
      inputDir.y = -1;
      break;
    case "ArrowDown":
      console.log("ArrowDown");
      inputDir.x = 0;
      inputDir.y = 1;
      break;
    case "ArrowLeft":
      console.log("ArrowLeft");
      inputDir.x = -1;
      inputDir.y = 0;
      break;
    case "ArrowRight":
      console.log("ArrowRight");
      inputDir.x = 1;
      inputDir.y = 0;
      break;
  }
});
