(function() {

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


  function avaliaValores(ant, prox){
    // compara com a posição anterior decide se soma ou subtraia

  }

  function percorrerResultado(str) {
    var i = 0;
    do {
      /*
      usa a função avaliaValores para obter um resultado de soma ou subtração
      */
    } while (i < str.length);
  }

})();
