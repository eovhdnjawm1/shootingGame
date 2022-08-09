

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

function main() {

	render();
	requestAnimationFrame(main);
}


loadImage();
main();