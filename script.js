var correctAdditionAnswer;
var correctSubtractionAnswer;
var correctMultiplicationAnswer;

var correctAdditionCount = 0;
var wrongAdditionCount = 0;

var correctSubtractionCount = 0;
var wrongSubtractionCount = 0;

var correctMultiplicationCount = 0;
var wrongMultiplicationCount = 0;

var timer;

function startTimer() {
  var timeLeft = 5 * 60; // 5 minutes in seconds
  timer = setInterval(function() {
    if (timeLeft <= 0) {
      clearInterval(timer);
      alert("Time's up!");
    } else {
      var minutes = Math.floor(timeLeft / 60);
      var seconds = timeLeft % 60;
      document.getElementById('timer').innerHTML = "Time left: " + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    }
    timeLeft--;
  }, 1000);
}

function calculateAccuracy(correctCount, totalCount) {
  if (totalCount === 0) {
    return "N/A"; // prevent division by zero
  } else {
    return ((correctCount / totalCount) * 100).toFixed(2) + "%";
  }
}

function generateNumbers() {
  var num1 = Math.floor(Math.random() * 10) + 1;
  var num2 = Math.floor(Math.random() * 10) + 1;

  document.getElementById('numbers').innerHTML = num1 + " + " + num2 + " = ?";
  correctAdditionAnswer = num1 + num2;
}

function generateSubtractionNumbers() {
  var num1 = Math.floor(Math.random() * 10) + 1;
  var num2 = Math.floor(Math.random() * 10) + 1;

  document.getElementById('subtractionNumbers').innerHTML = num1 + " - " + num2 + " = ?";
  correctSubtractionAnswer = num1 - num2;
}

function generateMultiplicationNumbers() {
  var num1 = Math.floor(Math.random() * 10) + 1;
  var num2 = Math.floor(Math.random() * 10) + 1;

  document.getElementById('multiplicationNumbers').innerHTML = num1 + " × " + num2 + " = ?";
  correctMultiplicationAnswer = num1 * num2;
}

function checkAdditionAnswer(userAnswer) {
  if (parseInt(userAnswer) === correctAdditionAnswer) {
    document.getElementById('additionResult').innerHTML = "正解です！";
    correctAdditionCount++;
  } else {
    document.getElementById('additionResult').innerHTML = "不正解です。正解は " + correctAdditionAnswer + " でした。";
    wrongAdditionCount++;
  }
  setTimeout(() => document.getElementById('additionResult').innerHTML = "", 2000);
  generateNumbers();
  document.getElementById('additionScore').innerHTML = "正解: " + correctAdditionCount + " 不正解: " + wrongAdditionCount + " 正解率: " + calculateAccuracy(correctAdditionCount, correctAdditionCount + wrongAdditionCount);
}

function checkSubtractionAnswer(userAnswer) {
  if (parseInt(userAnswer) === correctSubtractionAnswer) {
    document.getElementById('subtractionResult').innerHTML = "正解です！";
    correctSubtractionCount++;
  } else {
    document.getElementById('subtractionResult').innerHTML = "不正解です。正解は " + correctSubtractionAnswer + " でした。";
    wrongSubtractionCount++;
  }
  setTimeout(() => document.getElementById('subtractionResult').innerHTML = "", 2000);
  generateSubtractionNumbers();
  document.getElementById('subtractionScore').innerHTML = "正解: " + correctSubtractionCount + " 不正解: " + wrongSubtractionCount + " 正解率: " + calculateAccuracy(correctSubtractionCount, correctSubtractionCount + wrongSubtractionCount);
}

function checkMultiplicationAnswer(userAnswer) {
  if (parseInt(userAnswer) === correctMultiplicationAnswer) {
    document.getElementById('multiplicationResult').innerHTML = "正解です！";
    correctMultiplicationCount++;
  } else {
    document.getElementById('multiplicationResult').innerHTML = "不正解です。正解は " + correctMultiplicationAnswer + " でした。　";
    wrongMultiplicationCount++;
  }
  setTimeout(() => document.getElementById('multiplicationResult').innerHTML = "", 2000);
  generateMultiplicationNumbers();
  document.getElementById('multiplicationScore').innerHTML = "正解: " + correctMultiplicationCount + " 不正解: " + wrongMultiplicationCount + " 正解率: " + calculateAccuracy(correctMultiplicationCount, correctMultiplicationCount + wrongMultiplicationCount);
}

window.onload = function() {
  generateNumbers();
  generateSubtractionNumbers();
  generateMultiplicationNumbers();
  startTimer();
}
