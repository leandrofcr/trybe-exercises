let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log('Bem-vinda, ' + info.personagem) //requisito 1

info.recorrente = 'Sim';

for (let key in info) {
  console.log(info[key]); //requisito 2
}

