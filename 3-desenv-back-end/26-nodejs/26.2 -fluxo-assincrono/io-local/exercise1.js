// dividirNumeros(2, 1)
//   .then(result => console.log(`sucesso: ${result}`))
//   .catch(err => console.log(`erro: ${err.message}`));
// const fs = require('fs').promises;

// async function main() {
//   try {
//     await fs.writeFile('./meu-arquivo.txt', 'Meu textão');
//     console.log('Arquivo escrito com sucesso!');
//   } catch (err) {
//     console.error(`Erro ao escrever o arquivo: ${err.message}`);
//   }
// }

// main()

const fs = require('fs').promises;

function exercise1(a, b, c) {
  const promise = new Promise((resolve, reject) => {
    if (typeof a !== "number") return reject(Error ("Insira números válidos"));
    if (typeof b !== "number") return reject(Error ("Insira números válidos"));
    if (typeof c !== "number") return reject(Error ("Insira números válidos"));
    
    const result = (a + b) * c;

    if(result < 50) return reject(Error ("Valor muito baixo"));
    resolve(result);
  })
  return promise;
}

exercise1(20,2,3)
  .then(result => console.log(`Resultado: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));
