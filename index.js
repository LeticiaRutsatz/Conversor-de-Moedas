function Converter() {
    const valorElemento = document.getElementById("valor");
    const valor = valorElemento.value;
    const valorEmDolarNumerico = parseFloat(valor);
  
    const valorEmReal = valorEmDolarNumerico * 5.26;
    console.log(valorEmReal);
  
    let elementoValorConvertido = document.getElementById("valorConvertido");
    const valorConvertido = "O resultado em Dolar é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
  }