// const outraFuncao = connect(mapStateToProps);
// const ConnectedComponent = outraFuncao(MeuComponente);

function somaDoisNumeros(a) {
  return function segundaFuncao(b) {
    return a + b;
  }
}

const somaCinquenta = somaDoisNumeros(50);

console.log(somaCinquenta(20));
console.log(somaCinquenta(30));
console.log(somaCinquenta(40));
console.log(somaCinquenta(50));
console.log(somaCinquenta(60));