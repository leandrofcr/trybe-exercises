let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log('Bem-vinda, ' + info.personagem) //requisito 1

info.recorrente = 'Sim'; //requisito 2

for (let key in info) {
  console.log(info[key]); //requisito 3
}

let newCharacter = {
  personagem: "Tio Patinhas",
  origem: [ "Christmas on Bear Mountain", "Dell's Four Color Comics #178"],
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

console.log(info, newCharacter); //requisito 4