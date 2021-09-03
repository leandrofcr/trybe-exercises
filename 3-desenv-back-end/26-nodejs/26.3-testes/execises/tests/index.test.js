const { expect } = require('chai');

const naturezaNumero = require('../index');

describe('Testa a função naturezaNumero', () => {
  it('Retorna "positivo" quando um número maior que zero é inserido', () => {
    expect(naturezaNumero(2)).equals('positivo');
  });
  it('Retorna "negativo" quando um número maior que zero é inserido', () => {
    expect(naturezaNumero(-5)).equals('negativo');
  });
  it('Retorna "neutro" quando o número zero é inserido', () => {
    expect(naturezaNumero(0)).equals('neutro');
  });
});
