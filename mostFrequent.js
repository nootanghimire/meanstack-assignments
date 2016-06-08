/**
 * @author Nootan Ghimre <nootan.ghimire@gmail.com>
 *
 * @desc Find the most frequent item in an array
 * 
 * @tutor Punit Jajodia
 *
 * Run the function `run()` to run this project
 */

function returnFrequentItem(arr) {
	//Make use of ES6 Maps
	
	var hashMap = new Map();
	for (var i = arr.length - 1; i >= 0; i--) {
		if(hashMap.has(arr[i])){
			hashMap.set(arr[i], hashMap.get(arr[i])+1);
		} else {
			hashMap.set(arr[i], 1);
		}
	};


	hashMapKeys = hashMap.keys();

	var max_key = hashMapKeys.next().value;
	var max_value = hashMap.get(max_key);
	
	hashMapKeys = hashMap.keys(); //reset
	
	while(1){
		var e = hashMapKeys.next();
		if(e.done) break;
		if(hashMap.get(e.value) > max_value) {
			max_key = e.value;
			max_value = hashMap.get(max_key);
		}
	}

	return {"item":max_key, "frequency":max_value};

}

function run(){
	var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

	var returnObj = returnFrequentItem(arr1);

	console.log(returnObj.item + " was repeated " + returnObj.frequency +" times!");
}