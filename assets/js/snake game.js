let container = document.getElementById('gameContainer');
let containerSize = [32, 32];
let [width, height] = containerSize;

//snake
let snake = document.createElement('div');
snake.className = 'snake';
snake.style.width = '10px';
snake.style.height = '30px';
snake.style.backgroundColor = 'green';
snake.style.position = 'absolute';
snake.style.left = '50px';
snake.style.top = '50px';
container.appendChild(snake);

//buttons
let guidbtn = document.createElement('div');
guidbtn.className = 'button';

let buttons = [
    { id: 'up', iconClass: 'fa fa-arrow-up' },
    { id: 'down', iconClass: 'fa fa-arrow-down' },
    { id: 'left', iconClass: 'fa fa-arrow-left' },
    { id: 'right', iconClass: 'fa fa-arrow-right' },
];

buttons.forEach(button => {
    let btn = document.createElement('button');
    btn.id = button.id;

    let icon = document.createElement('i');
    icon.className = button.iconClass;

    btn.appendChild(icon);
    guidbtn.appendChild(btn);
});


document.body.appendChild(guidbtn);

//snake position
let snakePosition = { top: 50, left: 50 };
let directionX = 0;
let directionY = 0;

function moveSnake() {
    const moveAmount = 5; // مقدار جابجایی به ازای هر حرکت
    snakePosition.left += directionX * moveAmount;
    snakePosition.top += directionY * moveAmount;

    // به‌روز رسانی موقعیت مار
    snake.style.left = `${snakePosition.left}px`;
    snake.style.top = `${snakePosition.top}px`;

    checkCollision();
}

document.getElementById('up').addEventListener('click', () => {
    directionX = 0;
    directionY = -1;
});

document.getElementById('down').addEventListener('click', () => {
    directionX = 0;
    directionY = 1;
});

document.getElementById('left').addEventListener('click', () => {
    directionX = -1;
    directionY = 0;
});

document.getElementById('right').addEventListener('click', () => {
    directionX = 1;
    directionY = 0;
});

//dots
for (let i = 0; i < height; i++) {
    let row = document.createElement('div');
    row.style.display = 'flex';
    row.style.justifyContent = 'space-between';
    for (let j = 0; j < width; j++) {
        let column = document.createElement('div');
        column.innerText = '.';
        row.appendChild(column);
    }
    container.appendChild(row);
}

let targetPosition = { top: 0, left: 0 };
let target = null;


function RandomPlaceforTarget() {
    if (target) {
        container.removeChild(target);
    }

    let RandomWidth = Math.floor(Math.random() * (container.clientWidth - 5));
    let RandomHeight = Math.floor(Math.random() * (container.clientHeight - 20));

    targetPosition.left = RandomWidth;
    targetPosition.top = RandomHeight;


    target = document.createElement('div');
    target.style.width = '10px';
    target.style.height = '30px';
    target.style.backgroundColor = 'red';
    target.style.position = 'absolute';
    target.style.left = `${targetPosition.left}px`;
    target.style.top = `${targetPosition.top}px`;
    container.appendChild(target);
}

let score = 0;


function checkCollision() {

    if (
        snakePosition.left < targetPosition.left + 10 &&
        snakePosition.left + 10 > targetPosition.left &&
        snakePosition.top < targetPosition.top + 30 &&
        snakePosition.top + 30 > targetPosition.top
    ) {
        snake.style.height +='10px';
        txt.innerText=`score: 0`;
        score++;
        txt.innerText=`score: ${score}`;
        


        RandomPlaceforTarget();
    }
}
let txt=document.createElement("p");
txt.innerText=`score: ${score}`;
txt.style.fontSize = '19px';
container.appendChild(txt);

const intervalId = setInterval(moveSnake, 100);
RandomPlaceforTarget();
window.onload = function() {
    const result= confirm('Are You Ready To Start The Game?');
    if (result){

        moveSnake();
    }
}