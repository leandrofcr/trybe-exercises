const naturezaNumero = (n) => {
  return n > 0 ? 'positivo' : n === 0 ? 'neutro' : 'negativo';
}

console.log(naturezaNumero(0));

module.exports = naturezaNumero;