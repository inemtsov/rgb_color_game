let colors = generateRandomColors(6);

let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let message = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");

colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", ()=>{
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(let i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#232323";
})

for(let i=0; i<squares.length; i++){

	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", ()=>{
		let clickedColor = squares[i].style.backgroundColor;
		if(clickedColor === pickedColor){
			message.textContent = "Correct";
			resetButton.textContent = "play again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else{
			squares[i].style.backgroundColor = "#232323";
			message.textContent = "Try again"
		}
	})
}

function changeColors(color){
	for(let i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}
function pickColor(){
	return colors[Math.floor(Math.random()*colors.length)];
}

function generateRandomColors(number) {
	let arr = [];

	for(let i=0; i< number; i++){
		arr.push(randomColor());
	}


	return arr;
}



function randomColor() {
	let r = Math.floor(Math.random()*256);
	let g = Math.floor(Math.random()*256);
	let b = Math.floor(Math.random()*256);
	return "rgb("+ r +", "+ g +", "+ b +")"

}