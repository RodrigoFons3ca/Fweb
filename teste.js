

function gerar(){
    fetch("./atividade240424.json")
    .then(response => response.json())
    .then(dados => {
    // Itera sobre os dados JSON
    for (const dado in dados.pessoas){
        console.log(dados.pessoas[dado]);
       
        const elementotitulo = document.createElement("h1");
        elementotitulo.textContent = dados.pessoas[dado].Nome;
        elementotitulo.textContent = elementotitulo.textContent + ", " + dados.pessoas[dado].idade + " anos, CPF: " + dados.pessoas[dado].CPF + " celular: " + dados.pessoas[dado].telefone;
        const divp = document.querySelector(".divprincipal");
        divp.appendChild(elementotitulo);
        }

    });



};

