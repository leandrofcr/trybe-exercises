let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


// }
let oddNumbers = 0;
let evenNumbers = 0;
let oddNumbersArray = [];

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0){
        oddNumbers ++;
        oddNumbersArray.push(numbers[index]);
    } else {
       evenNumbers++;
    }
}
if (oddNumbers > 0) {
    console.log(`Existem ${oddNumbers} números ímpares. E eles são: ${oddNumbersArray}`);
} else {
    console.log ("Nenhum valor ímpar encontrado");
}
