function calculaTotal(lista) {
    return lista.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2);
}