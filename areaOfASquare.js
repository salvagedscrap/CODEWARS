// Description:

// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

// Graph

// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)
function squareArea(A){
    let r = (A * 2)/ Math.PI
    let result = r*r
    if(result%1 == 0){
      return result
    }else{
      
      return Number(result.toFixed(2)); 
    }
    
    
  }