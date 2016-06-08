/**
 * @author Nootan Ghimre <nootan.ghimire@gmail.com>
 *
 * @desc To print number from 1 to 100, but when the number is 
 *       multiple of 3 -> print Fizz, and when 5 -> print Buzz
 *       and when both -> print FizzBuzz
 *
 * @tutor Punit Jajodia
 *
 * Run the function `run()` to run this project
 */

function fizzbuzz(num) {
  var str = "";
  //Modulo operation has O(n^2) time complexity, 
  //If dealing with large integers, it is advisable
  //to use routines which adds the digits and checks
  //the multiplicability
  if(num % 3 == 0) {
    str += "Fizz";
  }


  //Similary to eliminate modulo 5 in large integers
  //just check if last digit is 0 or 5.
  if(num % 5 == 0) {
    str += "Buzz";
  }

  if (str === "") {
   return num;
  }

  return str;
}

function run() {
  for (var i = 1; i <= 100; i++) {
    console.log(fizzbuzz(i));
  }
}