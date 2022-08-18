// 1 to num, 3 fizz, 5 buzz, 3&5fizzbuzz



function fizbuz(num){


    for(let i = 1; i<= num; i++){
        if(i%3 === 0 && i%5===0){
            console.log('Fizzbuzz', i);
        }else if(i%3 === 0){
            console.log('Fizz', i);
        }else if(i%5 === 0){
            console.log('Buzzz', i)
        }else{
            console.log(i);
        }
    }
}


fizbuz(70)


