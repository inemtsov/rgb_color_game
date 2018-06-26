let num = 6;
let colors = [];
let squares = document.querySelectorAll(".square");
let pickedColor;
let colorDisplay = document.getElementById("colorDisplay");
let message = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let mode = document.querySelectorAll(".mode");

init();

function init(){
	for(let i=0; i<mode.length; i++){
		mode[i].addEventListener("click", ()=>{
			mode[0].classList.remove("selected");
			mode[1].classList.remove("selected");
			mode[i].classList.add("selected");
			mode[i].textContent === "Easy"? num = 3 : num = 6;
			reset();
		});
	}

	for(let i=0; i<squares.length; i++){
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
	reset();
}

function reset(){
	colors = generateRandomColors(num);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	for(let i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		} else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	message.textContent = "";
}


resetButton.addEventListener("click", ()=>{
	reset();	
})



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