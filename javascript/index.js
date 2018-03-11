(function(titulo) {

  console.log(titulo);
  var resultadoFinal;

  // converte simbolos para valores numéricos correspondente
  // Bascamente I, V, X, L, C, D e M
  function converteRomanos(string) {
    let resultado = "";
    switch (string) {
      case "I":
        resultado = 1;
        break;
      case "V":
        resultado = 5;
        break;
      case "X":
        resultado = 10;
        break;
      case "L":
        resultado = 50;
        break;
      case "C":
        resultado = 100;
        break;
      case "D":
        resultado = 500;
        break;
      case "M":
        resultado = 1000;
        break;
    }

    return resultado;
  }


  // compara com a posição a  return resultadoFinal;
  // anterior decide se soma ou subtraia
  function somaValores(ant, prox) {

    if (ant >= prox) {
      return true;
    }
    return false;
  }


  // percorre a string e usa outras funções para avaliar cada caracter
  function percorrerResultado(str) {
    str = str.toUpperCase();

    var i = 0;
    var convertido = converteRomanos(str[i]);
    i++;

    while (i < str.length) {
      if (somaValores(converteRomanos(str[i - 1]), converteRomanos(str[i]))) {
        convertido += converteRomanos(str[i]);
      } else {
        convertido -= converteRomanos(str[i]);
      }
      i++;
    }

    return convertido;
  }

  // retorna o resultado
  console.log(percorrerResultado("xxx"));

})('resposta');
