const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addTurno(value) {
  lesson2.turno = value;
}
addTurno('manhã');

function showKeys(object) {
  let counter = 0;
  for (const key in object) {
    counter++;
  }
  console.log(Object.keys(object));
  console.log(counter);
  console.log(Object.values(object));
}

const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});
console.log(allLessons);