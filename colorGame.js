
let num = 6;
let colors = generateRandomColors(num);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let message = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");

colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", ()=>{
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	num = 3;
	colors = generateRandomColors(num);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(let i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display = "none";
		}
	}
})



hardBtn.addEventListener("click", ()=>{
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	num = 6;
	colors = generateRandomColors(num);	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(let i=0; i<squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	}
})




resetButton.addEventListener("click", ()=>{
	colors = generateRandomColors(num);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(let i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
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