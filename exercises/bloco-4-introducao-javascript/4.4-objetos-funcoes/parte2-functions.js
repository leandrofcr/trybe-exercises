//EXERCICIO 1
// function verificaPalindrome(palavra) {
//   let arrayLetras = palavra.split("");
//   let isPalindrome = true;
//   for (let index in arrayLetras) {
//     if (arrayLetras[index] != palavra[(palavra.length - 1) - index]) {
//       isPalindrome = false;
//     }
//   }
//   return isPalindrome;
// }
// console.log(verificaPalindrome('arara'));

// //EXERCICIO 2
// function verificaMaiorNum (array){
//   let maiorIndice = 0;
//   for (let key in array){
//     if  (array[maiorIndice] < array[key]){
//       maiorIndice = key;
//     } else {
      
//     }
// }
// return maiorIndice;
// }

// let arrayTeste = [2, 3, 6, 7, 10, 1];
// console.log(verificaMaiorNum(arrayTeste));

//EXERCICIO 3
function verificaMaiorNum (array){
  let maiorIndice = 0;
  for (let key in array){
    if  (array[maiorIndice] > array[key]){
      maiorIndice = key;
    } else {
      
    }
}
return maiorIndice;
}

let arrayTeste2 = [2, 4, 6, 7, 10, 0, -3];
console.log(verificaMaiorNum(arrayTeste2));