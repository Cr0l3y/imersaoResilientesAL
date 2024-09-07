function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // criando pesquisa expecifica
    let resPesquisa = document.getElementById("Res-pesquisa").value;

    //Se o campo estiver vazio retorna a nada encontrado
    if (!resPesquisa){
        //escrevendo um comentario caso a saida esja essa
        section.innerHTML = "<p>Entrada invalida ou não existente</p>"
        return
    }

    resPesquisa = resPesquisa.toLowerCase();


    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    let cinematrografico = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        cinematrografico = dado.cinematrografico.toLocaleLowerCase();
        if(titulo.includes(resPesquisa) || descricao.includes(resPesquisa) || tags.includes(resPesquisa) || cinematrografico.includes(resPesquisa)){
            // Cria um novo elemento HTML para cada resultado
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p <span class=".novo-filme">${dado.cinematrografico}</span></p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>`;
    }

    if (!resultados){
        resultados = "<p>Nem uma resposta encontrada</p>"
    }

    }


    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}
