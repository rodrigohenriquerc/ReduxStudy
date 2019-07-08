// - Dados um parâmetro ou um conjunto de parâmetros, uma função pura 
//   sempre retorna o mesmo resultado.
// - Não produz efeitos colaterais.

const getFive = () => 5;
console.log(getFive());

const addFive = x => x + 5;
console.log(addFive(15));

// Math.random é uma função impura pois, mesmo passando sempre
// o mesmo parâmetro, retorna resultados diferentes:
const addRandom = x => x + Math.random();
console.log(addRandom(1));

// Já o Math.max é uma função pura pois, dado um determinado
// parâmetro ou conjunto de parâmetros, sempre retorna 
// o mesmo resultado.
console.log(Math.max(1, 5, 8, 15, 2, 5));