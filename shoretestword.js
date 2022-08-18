// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


function findShort(s){

    // create a new arr out of words in the string
    let newArr =s.split(' ')
    
    //sort elements of the newly created array based of their length
      newArr.sort((a, b) => a.length - b.length);
    
    //return length of the first element of the newArr
    return newArr[0].length;
    
    
  }