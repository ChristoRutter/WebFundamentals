const numbers = [1,3,5,9,15,30,31,40]

for(var i = 0; i < numbers.length; i++){
    if(numbers[i] % 15 == 0){
        console.log(`FizzBuzz`)
    }
    else if(numbers[i] % 5 == 0){
        console.log(`Buzz`)
    }
    else if(numbers[i] % 3 == 0){
        console.log(`Fizz`)
    }
    else{
        console.log(numbers[i])
    }
}