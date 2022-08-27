// Task
// Yesterday you found some shoes in your room. Each shoe is described by two values:

// type indicates if it's a left or a right shoe;
// size is the size of the shoe.
// Your task is to check whether it is possible to pair the shoes you found in such a way that each pair consists of a right and a left shoe of an equal size.

// Example
// For:

// shoes = [[0, 21], 
//          [1, 23], 
//          [1, 21], 
//          [0, 23]]
// the output should be true;

// For:

// shoes = [[0, 21], 
//          [1, 23], 
//          [1, 21], 
//          [1, 23]]
// the output should be false.

// Input/Output
// [input] 2D integer array shoes
// Array of shoes. Each shoe is given in the format [type, size], where type is either 0 or 1 for left and right respectively, and size is a positive integer.

// Constraints: 2 ≤ shoes.length ≤ 50,  1 ≤ shoes[i][1] ≤ 100.

// [output] a boolean value

// true if it is possible to pair the shoes, false otherwise.

function pairOfShoes(shoes) {
    //coding and coding..
    var mutated = [...shoes]
    if ( shoes.length < 2 || shoes.length % 2 != 0) {
      return false
    }
    var confirmedPairs = [];
    function recursion(arr){
      for ( var i = 0; i < arr.length; i++ ){
      for ( var j = 0; j < arr.length; j++ ){
        if ( arr[i][1] == arr[j][1] && arr[i][0] != arr[j][0] ){
          confirmedPairs.push(arr[i])
          confirmedPairs.push(arr[j])
          arr.splice(j, 1)
          arr.shift()
          recursion(arr)
        }
      }
    }
    
    }
    recursion(mutated)
    return confirmedPairs.length == shoes.length
  }