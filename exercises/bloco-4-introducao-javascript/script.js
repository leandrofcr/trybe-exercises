let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let numbersSum = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     numbersSum += numbers[index];
    
// }
// let numbersAverage = (numbersSum/numbers.length);
// console.log(numbersAverage);

// if (numbers[numbers.length-1] > 20){
//     console.log("Valor maior que 20!")
// } else {
//     console.log("Valor menor ou igual a 20!")
// }
let maiorNumero = null;

for (let index = 0; index < numbers.length; index += 1) {
     if (numbers[index] > maiorNumero ){
        maiorNumero = numbers[index];
    }
}        
console.log(maiorNumero);