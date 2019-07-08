// - Funções puras são mais genéricas e reutilizáveis.
// - Funções puras não alteram o que está do lado de fora 
//   da função.

let a = 123;

// Função NÃO pura:
const incrementA = () => {
  return a++;
}

// incrementA(); // 124
// incrementA(); // 125
// incrementA(); // 126
// console.log(a); // a === 126 -> alterou o 'a' inicial, 
// // portanto incrementA é uma função impura.

const immutableIncrement = x => {
  return x + 1;
}

// immutableIncrement(a); // a === 123 | retorno === 124
// immutableIncrement(a); // a === 123 | retorno === 124
// immutableIncrement(a); // a === 123 | retorno === 124
// console.log(a);

a = immutableIncrement(a); // a === 123 | retorno === 124
a = immutableIncrement(a); // a === 124 | retorno === 125
a = immutableIncrement(a); // a === 125 | retorno === 126
// console.log(a); // 126

// ------------------------------------------------------------ //

let state = {
  number: 123,
  name: 'Rodrigo Henrique'
}
console.log(state);

const incrementNumber = () => {
  state.number++;
}

// incrementNumber()
// console.log(state);

const incrementState = paramState => {
  paramState.number++;
}

// incrementState(state);
// console.log(state);

const pureIncrementNumber = state => {
  // const newState = Object.assign({}, state);
  // newState.number++;
  // return newState;
  return Object.assign({}, state, { number: state.number + 1 })
}

state = pureIncrementNumber(state);
console.log(state);