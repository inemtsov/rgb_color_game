let colors = [
		"rgb(255, 0, 0)",
		"rgb(255, 255, 0)",
		"rgb(0, 0, 255)",
		"rgb(0, 255, 255)",
		"rgb(0, 255, 0)",
		"rgb(255, 0, 255)"
		]

let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let message = document.querySelector("#message");
colorDisplay.textContent = pickedColor;

for(let i=0; i<squares.length; i++){

	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", ()=>{
		let clickedColor = squares[i].style.backgroundColor;
		if(clickedColor === pickedColor){
			message.textContent = "Correct";
			changeColors(clickedColor);
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
