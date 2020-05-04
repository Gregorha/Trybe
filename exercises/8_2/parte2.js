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

const exercicio1  = (obj, key, value ) => {
  obj[key] = value
  return obj
}

const exercicio2 = obj => Object.keys(obj)

const exercicio3 = obj => exercicio2(obj).length

const exercicio4 = obj => Object.values(obj)

const allLessons = {
  lesson1: Object.assign({}, lesson1), lesson2: Object.assign({}, lesson2), lesson3: Object.assign({}, lesson3)}

const exercicio6 = obj => {
  let estudantes = 0;
  exercicio2(obj).map(subObj => {
    estudantes += obj[subObj].numeroEstudantes
  })
  return estudantes
}

const exercicio7 = (obj, key) => {
  return Object.keys(obj)[key]
}

const exercicio8 = (obj, key, value) => {
  for (let [keys, values] of Object.entries(obj)){
    if (key === keys && value === values){
      return true
    }
  }
  return false
}

console.log(exercicio1(lesson2, "turno", "manhã"))
console.log(exercicio2(lesson3))
console.log(exercicio3(lesson1))
console.log(exercicio4(lesson2))
console.log(allLessons)
console.log(exercicio6(allLessons))
console.log(exercicio7(lesson1, 0))
console.log(exercicio8(lesson3, 'turno', 'noite'))
console.log(exercicio8(lesson3, 'materia', 'Maria Clara'))
