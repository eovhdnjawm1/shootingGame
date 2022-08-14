

let canvas;
let ctx;
canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 700;

document.body.append(canvas);



let backgroundImage,bulletImage,characterImage,gameOverImage,enemyImage;

// 캐릭터 좌표
let charX = (canvas.width / 2) - 32;
let charY = canvas.height - 64;

function loadImage() {
	backgroundImage = new Image();
	backgroundImage.src = "images/background.jpg";

	bulletImage = new Image();
	bulletImage.src = "images/bullet.png"

	characterImage = new Image();
	characterImage.src = "images/character.png";

	enemyImage = new Image();
	enemyImage.src = "images/enemy.png"

	gameOverImage = new Image();
	gameOverImage.src = "images/gameOver.png";
}

function render() {
	ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
	ctx.drawImage(characterImage, charX, charY);
}



// 중복 키 방지를 위한것
let keyDown = {}

function setupKeyboardListener() {
	document.addEventListener("keydown", (event) => {
		keyDown[event.keyCode] = true;
		// if (event.keyCode === 37 && charX >= 0){
		// 	charX -= .05;
		// }
		// else if (event.keyCode === 39 && charX <= 350) {
		// 	charX += .05;
		// }
		document.addEventListener("keyup", (event) => {
			delete keyDown[event.keyCode];
		})
	});
}


function update() {
	if ( 37 in keyDown && charX >= 0){
		charX -= 5;
	}
	else if ( 39 in keyDown && charX <= 350) {
		charX += 5;
	}
}

function main() {

	update();
	render();
	setupKeyboardListener();
	requestAnimationFrame(main);
}

loadImage();
main();