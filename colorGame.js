let colors = [
		"rgb(255, 0, 0)",
		"rgb(255, 255, 0)",
		"rgb(0, 0, 255)",
		"rgb(0, 255, 255)",
		"rgb(0, 255, 0)",
		"rgb(255, 0, 255)"
		]

let squares = document.querySelectorAll(".square");
let pickedColor = colors[3];
let colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

for(let i=0; i<squares.length; i++){

	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", ()=>{
		let clickedColor = squares[i].style.backgroundColor;
		if(clickedColor === pickedColor){
			alert ("correct");
		} else{
			alert("wrong");
		}
	})
}