function calcular(conta) {
  let v1 = parseFloat(document.getElementById("valor1").value);
  let v2 = parseFloat(document.getElementById("valor2").value);
  let result = 0;

  if (conta == "+") {
    result = v1 + v2;
  } else if (conta == "-") {
    result = v1 - v2;
  } else if (conta == "*") {
    result = v1 * v2;
  } else if (conta == "/") {
    result = v2 != 0 ? v1 / v2 : "Erro";
  }

  document.getElementById("resultado").value = result;
}
