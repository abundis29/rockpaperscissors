var player = document.getElementById("player_selection");
var cpu = document.getElementById("cpu_selection");
var options = [0, 1, 2];
var simbols = ["rock", "paper", "scissors"];
var cpuScore = 0;
var playerScore = 0;

options.forEach((element, id) => {
  var li = document.createElement("li");
  var img = document.createElement("img");
  img.src = "./assets/hand" + element + ".png";
  img.id = id;
  li.appendChild(img);
  img.addEventListener("click", playGame);
  player.append(li);
});

options.forEach(element => {
  var li = document.createElement("li");
  var img = document.createElement("img");
  img.src = "./assets/hand" + element + ".png";
  li.appendChild(img);
  cpu.append(li);
});

function playGame(event) {
  var playerInput = simbols[event.target.id];
  var random = getRandomOutput();
  var cpuOutput = simbols[random];

  if (playerInput === "rock") {
    if (cpuOutput == "rock") {
      presentBet(event.target.id, random, "empate", "empate");
    } else if (cpuOutput == "paper") {
      presentBet(event.target.id, random, "Pierde", "Gana");
      cpuScore++;
    } else if (cpuOutput == "scissors") {
      presentBet(event.target.id, random, "Gana", "Pierde");
      playerScore++;
    }
  } else if (playerInput == "paper") {
    if (cpuOutput == "rock") {
      presentBet(event.target.id, random, "Gana", "Pierde");
      playerScore++;
    } else if (cpuOutput == "paper") {
      presentBet(event.target.id, random, "empate", "empate");
    } else if (cpuOutput == "scissors") {
      presentBet(event.target.id, random, "Pierde", "Gana");
      cpuScore++;
    }
  } else if (playerInput == "scissors") {
    if (cpuOutput == "rock") {
      presentBet(event.target.id, random, "Pierde", "Gana");
      cpuScore++;
    } else if (cpuOutput == "paper") {
      presentBet(event.target.id, random, "Gana", "Pierde");
      playerScore++;
    } else if (cpuOutput == "scissors") {
      presentBet(event.target.id, random, "empate", "empate");
    }
  }
  document.getElementById("playerScore").innerHTML = playerScore;
  document.getElementById("cpuScore").innerHTML = cpuScore;
}

function getRandomOutput() {
  var play = options[Math.floor(Math.random() * options.length)];
  return play;
}

function presentBet(playerInput, random, result, cpuResult) {
  var img = document.createElement("img");
  var imgCpu = document.createElement("img");
  var status = document.getElementById("status");
  var cpuStatus = document.getElementById("cpuStatus");
  var div = document.createElement("div");
  var divCpu = document.createElement("div");
  var text = document.createTextNode(result);
  var textCpu = document.createTextNode(cpuResult);

  var temporal_modal = document.getElementById("temporal_modal");
  var temporal_modal__text = document.createElement("h3");

  img.src = "./assets/hand" + playerInput + ".png";
  status.innerHTML = "";
  div.append(img);
  div.append(text);
  status.append(div);

  imgCpu.src = "./assets/hand" + random + ".png";
  cpuStatus.innerHTML = "";

  divCpu.append(imgCpu);
  divCpu.append(textCpu);
  cpuStatus.append(divCpu);

  temporal_modal__text.append(result);
  temporal_modal.innerHTML = "";
  temporal_modal.append(temporal_modal__text);

  cpuStatus.style.display = "block";
  status.style.display = "block";
  setTimeout(function() {
    cpuStatus.style.display = "none";
    status.style.display = "none";
    temporal_modal.style.display = "block";
    setTimeout(function() {
      temporal_modal.style.display = "none";
    }, 1000);
  }, 1000);
}
