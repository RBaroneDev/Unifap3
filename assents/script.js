function verificarPermissao() {
    var select = document.getElementById("select-permissao");
    var opcaoSelecionada = select.value;
    var mensagem = "";

    switch (opcaoSelecionada) {
        case "comum":
            mensagem = "Você tem permissões básicas.";
            break;
        case "gerente":
            mensagem = "Você tem permissões de gerente.";
            break;
        case "diretor":
            mensagem = "Você tem permissões de diretor.";
            break;
        default:
            mensagem = "Selecione um tipo de permissão válido.";
    }

    var mensagemDiv = document.getElementById("mensagem-permissao");
    mensagemDiv.textContent = mensagem;
}
