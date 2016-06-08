/**
 * @author Nootan Ghimre <nootan.ghimire@gmail.com>
 *
 * @desc To take two arrays as input, merge them and remove
 *       duplicates if any.
 *
 * @tutor Punit Jajodia
 *
 * Run the function `run()` to run this project
 */

function needleInHaystack(needle, haystack) {
	for (var i = haystack.length - 1; i >= 0; i--) {
		if(needle === haystack[i]) return true;
	};
	return false;
}

function mergeArraysRemoveDups(arr1, arr2) {
	for (var i = arr2.length - 1; i >= 0; i--) {
		if(!needleInHaystack(arr2[i], arr1)) {
			arr1.push(arr2[i]);
		}
	};
	return arr1;
}

function run() {
	// Test Data Provided
	// Sorting order may differ
	arr1 = [1, 2, 3];
	arr2 = [2, 30, 1];

	console.log(mergeArraysRemoveDups(arr1, arr2));

}