let getRandomNumber = require('./exerc1');

test('Verifica a função getRandomNumber', () => {
  getRandomNumber = jest.fn().mockReturnValue(10);
  getRandomNumber();

  expect.assertions(3);

  expect(getRandomNumber).toBeCalled();
  expect(getRandomNumber).toHaveBeenCalledTimes(1);
  expect(getRandomNumber()).toBe(10);
});
