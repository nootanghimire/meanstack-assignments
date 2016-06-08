/**
 * @author Nootan Ghimre <nootan.ghimire@gmail.com>
 *
 * @desc Get an array of objects and sort them by title (Case Sensitive)
 * 
 * @tutor Punit Jajodia
 *
 * Run the function `run()` to run this project
 */

function mergeSortObjArray(arrObj, key) {
	if (arrObj.length <= 1) return arrObj;

	var left = [];
	var right = [];

	for(var i = 0; i<arrObj.length; i++){
		if(i & 1 == 1) { //if index is odd
			//console.log("Here I am: ");
			left.push(arrObj[i]);
			//console.log(left);
		} else {
			//console.log("This is me: ");
			right.push(arrObj[i]);
			//console.log(right);
		}
	}

	left = mergeSortObjArray(left, key);
	right = mergeSortObjArray(right, key);

	return mergeRoutine(left, right, key);
}

function mergeRoutine(leftArr, rightArr, key) {
	//console.log("Called");
	var result = [];
	while(leftArr.length && rightArr.length) {
		if(leftArr[0][key] <= rightArr[0][key]) {
			result.push(leftArr[0]);
			leftArr.shift(1);
		} else {
			result.push(rightArr[0]);
			rightArr.shift(1);
		}
	}

	//if the arrays were unequal
	//
	
	while(leftArr.length) {
		result.push(leftArr[0]);
		leftArr.shift(1);
	}

	while(rightArr.length) {
		result.push(rightArr[0]);
		rightArr.shift(1);
	}

	return result;
}

function run() {
	var library = [
					{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
					{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
					{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
	];

	console.log(mergeSortObjArray(library, "title"));
}