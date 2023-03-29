fetch("dados.json")
  .then(response => response.json())
  .then(data => {
    const faturamentoDiario = data.map(dado => dado.valor).filter(valor => valor !== 0);

 
    const menorFaturamentoDiario = Math.min(...faturamentoDiario);
    console.log(`Menor faturamento diário: R$ ${menorFaturamentoDiario.toFixed(2)}`);

   
    const maiorFaturamentoDiario = Math.max(...faturamentoDiario);
    console.log(`Maior faturamento diário: R$ ${maiorFaturamentoDiario.toFixed(2)}`);

 
    const mediaMensalFaturamento = faturamentoDiario.reduce((acc, valor) => acc + valor, 0) / faturamentoDiario.length;
    const diasAcimaMediaMensal = faturamentoDiario.filter(valor => valor > mediaMensalFaturamento).length;
    console.log(`Número de dias com faturamento diário acima da média mensal: ${diasAcimaMediaMensal}`);
  })
  .catch(error => console.error(error));
