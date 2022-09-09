// Description:

// Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

// There will only be one 'longest' word.


function findLongest(str){
  let arr = str.split(' ')
  let longestString = ''
 for(let i = 0; i<arr.length; i++){
    if(arr[i].length> longestString.length){
      longestString=arr[i]
    }
 }
  return longestString.length
  
}
  
  


