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

const cpf = document.getElementById('cpf');
cpf.addEventListener('keypress', function () {

  if (cpf.value.length === 3) {
    cpf.value += '.';

  } else if (cpf.value.length === 7) {
    cpf.value += '.';

  } else if (cpf.value.length === 11) {
    cpf.value += '-';
  }
});