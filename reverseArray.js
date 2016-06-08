/**
 * @author Nootan Ghimre <nootan.ghimire@gmail.com>
 *
 * @desc Reverse an array (w/o using Array.reverse())
 * 
 * @tutor Punit Jajodia
 *
 * Use [Your-Array].myOwnReverse(); to reverse it
 */

Array.prototype.myOwnReverse = function(){

	var returnArr = [];

	for (var i = this.length - 1; i >= 0; i--) {
		returnArr.push(this[i]);
	};

	//Use the following section only if you want to mutate the array
	this.length = 0; 
	for (var i = 0; i <returnArr.length; i++) {
		this.push(returnArr[i]);
	};


	return returnArr;
}