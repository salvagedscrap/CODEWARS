// Description:

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.


function find_average(array) {
    let avg
     if( array.length === 0 ){
        avg= 0
       return avg
     }else{
        let sum = 0
      for(let i = 0; i<array.length; i++){
          sum +=  array[i]
      }
     avg = sum/array.length
     return avg
     }
  
  }