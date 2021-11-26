const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const sequence = [4,2.5,1,-0.5,-2,-3.5]
//Print odd
for(var i = 0; i<numbers.length; i++){
    if(numbers[i]%2 != 0){
        console.log(numbers[i])
    }
}

//print decreasing multiples of 3
for(var j = 100; j >=0; j--){
    if(j%3 == 0){
        console.log(j)
    }
}

//print the sequence
for(var k = 0; k<sequence.length; k++){
    console.log(sequence[k])
}

//print sigma
let sum = 0;
for(var l = 0; l<=100; l++){
    sum += l
    
}
console.log(sum)

//print factorial
let product = 1;
for(var m = 1; m<=12; m++){
    product = product * m
}
console.log(product)
