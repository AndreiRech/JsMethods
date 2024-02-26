let lista = [];
const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosAPI();

async function getBuscarLivrosAPI() {
    const res = await fetch(endPointAPI);
    lista = await res.json();
    let livrosDesconto = aplicarDesconto(lista);
    exibirLivros(livrosDesconto);
}