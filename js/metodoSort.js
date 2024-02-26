let btnPreco = document.getElementById('btnOrdenarPorPreco');
btnPreco.addEventListener('click', ordenarPreco);

function ordenarPreco() {
    let ordenados = lista.sort((a,b) => a.preco - b.preco);
    exibirLivros(ordenados);
}