const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// parece um array mas não é um array
// const nomesAtualizados = new Set(nomes);

// agora sim é um array
const listaNomesAtualizados = [...new Set(nomes)];

console.log(listaNomesAtualizados);
