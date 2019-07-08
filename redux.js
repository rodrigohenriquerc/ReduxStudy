let state = {
  number: 123,
  name: 'Rodrigo'
}

console.log(state);

const incrementNumber = () => {
  state.number++;
}

// incrementNumber();
// console.log(state);

// const incrementState = paramState => {
//   paramState.number++;
// }

// incrementState(state);
// console.log(state);

const pureIncrementNumber = state => Object.assign({}, state, { number: state.number + 1 });

// console.log(state);
state = pureIncrementNumber(state);
console.log(state);