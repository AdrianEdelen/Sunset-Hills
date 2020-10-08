// event listener for the button
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
	let bigArr = new Array();
		
		let bigTemp = -1;
	for (let i = 0; i < bldgArr.length; i++) {
		if (bldgArr[i] > bigTemp) {
			bigTemp = bldgArr[i];
			bigArr.push("Building" + i);
			console.log(i + 1);
		}

	}
	
})