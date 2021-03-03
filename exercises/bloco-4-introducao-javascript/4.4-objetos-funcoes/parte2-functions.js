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
// function verificaMaiorNum (array){
//   let maiorIndice = 0;
//   for (let key in array){
//     if  (array[maiorIndice] > array[key]){
//       maiorIndice = key;
//     } 
// }
// return maiorIndice;
// }

// let arrayTeste2 = [2, 4, 6, 7, 10, 0, -3];
// console.log(verificaMaiorNum(arrayTeste2));


//EXERCICIO 4

// function verificaNomes(nomes) {
//   maiorNome = '';
//   for (let key in nomes) {
//     if (nomes[key].length > maiorNome.length) {
//       maiorNome = nomes[key];
//     }
//   }
//   return maiorNome;
// }

// console.log(verificaNomes(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));


//EXERCICIO 5

// function maisRepetido(numeros) {
//   let contRepetido = 0;
//   let contNumero = 0;
//   let indexNumeroRepetido = 0;
//   for (let index in numeros) {
//     let verificaNumero = numeros[index];
//     for (let index2 in numeros) {
//       if (verificaNumero === numeros[index2]) {
//         contNumero++;
//       }
//     }
//     if (contNumero > contRepetido) {
//       contRepetido = contNumero;
//       indexNumeroRepetido = index;
//     }
//     contNumero = 0;
//   }
//   return numeros[indexNumeroRepetido];
// }

// console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));


//EXERCICIO 6

function somaNumeros(numero) {
  let total = 0;
  for (let index = 0; index <= numero; index += 1) {
    total = total + index;
  }
  return total;
}

console.log(somaNumeros(5));
