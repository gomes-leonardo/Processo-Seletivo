function verificarFibonacci(n) {
  let num1 = 0;
  let num2 = 1;
  let proximo;

  while (num2 < n) {
    proximo = num1 + num2;
    num1 = num2;
    num2 = proximo;
  }

  if (num2 === n) {
    console.log(`${n} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${n} não pertence à sequência de Fibonacci.`);
  }
}

// Exemplo de uso, podemos usar um prompt também
verificarFibonacci(6)

