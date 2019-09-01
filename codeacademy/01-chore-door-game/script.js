'use strict';

const doors = document.querySelectorAll('.door-frame');
const startButton = document.getElementById('start');

const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
const closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';

let numClosedDoors = 3;
let currentlyPlaying = true;
let openDoor1, openDoor2, openDoor3;


function isClicked(door) {
  return door.src !== closedDoorPath;
}

function isBot(door) {
  return door.src === botDoorPath;
}

function playDoor(door) {
  numClosedDoors--;
  if (numClosedDoors === 0 && isBot(door)) {
    gameOver('win');
  }
  else if (numClosedDoors > 0 && isBot(door)){
    gameOver('lose');
  }
}

function gameOver(status) {
  if (status === 'win') {
    startButton.innerHTML = 'You WIN! Play again?';
  }
  else if (status === 'lose') {
    startButton.innerHTML = 'You LOST. HAHA. Play again?'
  }
  currentlyPlaying = false;
}

function randomChoreDoorGenerator() {
    const choreDoor = Math.floor(Math.random() * numClosedDoors);
    switch (choreDoor) {
      case 0:
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
        break;
      case 1:
        openDoor2 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor3 = spaceDoorPath;
        break;
      case 2:
        openDoor3 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor1 = spaceDoorPath;
        break;
    }
};
randomChoreDoorGenerator();

function startRound() {
  doors[0].src = closedDoorPath;
  doors[1].src = closedDoorPath;
  doors[2].src = closedDoorPath;
  numClosedDoors = 3;
  currentlyPlaying = true;
  startButton.innerHTML = 'Good luck!';
  randomChoreDoorGenerator();

}

doors[0].addEventListener('click', () => {
  if (!isClicked(doors[0]) && currentlyPlaying) {
    doors[0].src = openDoor1;
    playDoor(doors[0]);
  }
  });

doors[1].addEventListener('click', () => {
  if (!isClicked(doors[1]) && currentlyPlaying) {
    doors[1].src = openDoor2;
    playDoor(doors[1]);
  }
});

doors[2].addEventListener('click', () => {
  if (!isClicked(doors[2]) && currentlyPlaying) {
    doors[2].src = openDoor3;
    playDoor(doors[2]);
  }
});

startButton.addEventListener('click', () => {
  if (!currentlyPlaying) {
    startRound();
  }
});