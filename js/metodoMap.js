function aplicarDesconto(lista) {
    const desconto = 0.3;
    livrosDesconto = lista.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    });

    return livrosDesconto;
}