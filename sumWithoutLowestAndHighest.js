// Description:
// Task

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.
// Example

// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

function sumArray(array) { 
    let sum=0
    if(array===undefined|| array===null || array.length<3){
      return 0
    }else if(array.length>=3){
      array.sort((a, b) => a - b);
      array.shift()
      array.pop()
      for(let i =0; i<array.length; i++){
        sum+=array[i]
      }
    }
    return sum

}