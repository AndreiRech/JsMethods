const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const elementos = document.getElementById(this.id);
    const categoria = elementos.value;
    let filtrados = categoria == 'disponivel' ? filtroDisponibilidade() : filtroCategoria(categoria)
    exibirLivros(filtrados);

    if (categoria == 'disponivel') {
        const total = calculaTotal(filtrados);
        exibirTotal(total);
    }
}

function filtroCategoria(categoria) {
    return lista.filter(livro => livro.categoria == categoria);
}

function filtroDisponibilidade() {
    return lista.filter(livro => livro.quantidade > 0);
}

function exibirTotal(total) {
    valorTotal.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${total}</span></p>
    </div>
    `;
}