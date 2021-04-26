let brazilStates = [
  " Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Distrito Federal",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins"
];

const statesSimple = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO"
];

const inputState = document.getElementById('state');

for (let index = 0; index < brazilStates.length; index += 1) {
  let newOption = document.createElement('option');
  newOption.innerText = brazilStates[index];
  newOption.setAttribute.value = `"${statesSimple[index]}"`;
  inputState.appendChild(newOption);

}

const cpf = document.getElementById('cpfNumbers');
cpf.addEventListener('keypress', function () {

  if (cpf.value.length === 3) {
    cpf.value += '.';

  } else if (cpf.value.length === 7) {
    cpf.value += '.';

  } else if (cpf.value.length === 11) {
    cpf.value += '-';
  }
});


const date = document.getElementById('date');
date.addEventListener('keypress', function () {

  if (date.value.length === 2) {
    date.value += '/';

  } else if (date.value.length === 5) {
    date.value += '/';
  }
});
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', function () {
  let day = parseInt(date.value[0] + date.value[1]);
  let month = parseInt(date.value[3] + date.value[4]);
  let year = parseInt(date.value[6] + date.value[7] + date.value[8] + date.value[9]);

  if (day <= 0 || day > 31 || month < 0 || month > 12 || year < 0) {
    alert('Por favor insira uma data válida')
  }
});
