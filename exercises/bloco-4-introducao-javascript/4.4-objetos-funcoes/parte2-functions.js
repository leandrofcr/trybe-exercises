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

//EXERCICIO 2
function verificaMaiorNum (array){
  let maiorNum = null;
  for (let index = 0; index < array.length -1; index += 1){
    if  (array[index] > maiorNum){
      maiorNum = array[index];
    } else {
      
    }
}
return maiorNum;
}

let arrayTeste = [2, 4, 6, 7, 10, 0, -3];
console.log(verificaMaiorNum(arrayTeste));
