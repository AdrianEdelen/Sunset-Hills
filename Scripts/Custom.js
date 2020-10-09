// event listener for the do it button
document.getElementById("calculate").addEventListener("click", () => {
	//declaring vars
	let b1 = parseInt(document.getElementById("building1").value);
	let b2 = parseInt(document.getElementById("building2").value);
	let b3 = parseInt(document.getElementById("building3").value);
	let b4 = parseInt(document.getElementById("building4").value);
	let b5 = parseInt(document.getElementById("building5").value);
	let b6 = parseInt(document.getElementById("building6").value);
	//putting the vars in an array to work with
	let bldgArr = [b1, b2, b3, b4, b5, b6];
	//clear the colors of from last time
	clean(bldgArr);
	//iterate through the loop and find each building that can see the sun and store it in an array
	let bigArr = new Array();
	let bigTemp = -1;
	for (let i = 0; i < bldgArr.length; i++) {
		if (bldgArr[i] > bigTemp) {
			bigTemp = bldgArr[i];
			bigArr.push("prog" + (i + 1));
			console.log(i);
		}
	}
	//apply the yellow color to the buildings that can see the sun
	for (let i = 0; i < bigArr.length; i++) {
		document.getElementById(bigArr[i]).classList.add("bg-warning");
	}
	progFill();
	//this takes the user inputted value and sets a percentage to fill each bar
	function progFill() {
		for (let i = 0; i <= bldgArr[0] * 10; i++) {
			let prog = 'prog1';
			sleep1(i, prog);
		}
		for (let j = 0; j <= bldgArr[1] * 10; j++) {
			let prog = 'prog2';
			sleep1(j, prog);
		}
		for (let k = 0; k <= bldgArr[2] * 10; k++) {
			let prog = 'prog3';
			sleep1(k, prog);
		}
		for (let l = 0; l <= bldgArr[3] * 10; l++) {
			let prog = 'prog4';
			sleep1(l, prog);
		}
		for (let z = 0; z <= bldgArr[4] * 10; z++) {
			let prog = 'prog5';
			sleep1(z, prog);
		}
		for (let x = 0; x <= bldgArr[5] * 10; x++) {
			let prog = 'prog6';
			sleep1(x, prog);
		}
	}
	//this function is called in the previous loops, this fills the bars 1% at a time
	//with a 10ms delay between each 'tick'
	function sleep1(i, prog) {
		setTimeout(function () {
			document.getElementById(prog).style.height = i + "%";
		}, 10 * i)
	}
})
//verify user input
document.querySelectorAll(".numbersOnly").forEach(a => {
	a.addEventListener("keydown", (evt) => {
		let keyChar = (evt.which) ? evt.which : evt.keyCode

		if (keyChar >= 48 && keyChar <= 57 ||
			keyChar >= 96 && keyChar <= 105 ||
			keyChar == 08 ||
			keyChar == 37 ||
			keyChar == 39) {
			return true;
		} else {
			evt.preventDefault();
			return false;
		}
	})
})
//clean resets the coloring of the buildings
function clean(bldgArr) {
	for (i = 0; i < bldgArr.length; i++) {
		let bldg = document.getElementById("prog" + (i + 1))
		bldg.classList.remove("bg-warning");

	}

}
//clears text out of the text boxes on click
function cleanText(el) {
	document.getElementById(el).value = "";
}
document.getElementById("building1").addEventListener("click", () => {
	cleanText("building1");
})
document.getElementById("building2").addEventListener("click", () => {
	cleanText("building2");
})
document.getElementById("building3").addEventListener("click", () => {
	cleanText("building3");
})
document.getElementById("building4").addEventListener("click", () => {
	cleanText("building4");
})
document.getElementById("building5").addEventListener("click", () => {
	cleanText("building5");
})
document.getElementById("building6").addEventListener("click", () => {
	cleanText("building6");
})

