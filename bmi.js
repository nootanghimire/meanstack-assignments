/**
 * @author Nootan Ghimre <nootan.ghimire@gmail.com>
 *
 * @desc Calculate Basic BMI 
 * 
 * @tutor Punit Jajodia
 *
 * Run the function `run()` to run this project
 */

function calcBMI(weight_in_kg, height_in_metre){
	return weight_in_kg/Math.pow(height_in_metre, 2);	
}

function run(weight_in_kg, height_in_metre){

	weight_in_kg = weight_in_kg || 82.9 ; //My current weight
	height_in_metre = height_in_metre || 1.72; //My current height

	var myBMI = calcBMI(weight_in_kg, height_in_metre);

	console.log("Your BMI is " + myBMI);

	if(myBMI<18.5){
		console.log("You are Underweight!");
	} else if(myBMI>=18.5 && myBMI<25){
		console.log("You have normal weight");
	} else if(myBMI>=25 && myBMI<30){
		console.log("You are overweight!");
	} else {
		console.log("You are obese!");
	}

}

