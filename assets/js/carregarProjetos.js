const carregaProjeto = () => {
        
    const projetos = document.querySelector('#div');
    let projetosSalvos = JSON.parse(localStorage.getItem('projetos') || '[]');

    projetosSalvos.forEach( (projeto) => {
        const conteudo = document.createElement('div')
            
        conteudo.innerHTML =   `<div class="container__textoComunidade">
                                    <div class="cor__fundoComunidade" name="corFundo" style="background-color: ${projeto.color}">
                                        <div id="editor" name="editor">
                                            <img src="mac_buttons.png" alt=""><br>
                                            ${projeto.CodigoInterno}
                                        </div>
                                    </div>
                                    <div class="descricaoProjeto__comunidade">
                                        <h3>${projeto.title}</h3>
                                        <h4>${projeto.desc}</h4>
                                    </div>
                                </div>`

            projetos.appendChild(conteudo);
        });
    }
carregaProjeto();

document.querySelector("#lixo").addEventListener('click', () => {
    localStorage.removeItem('projetos')
    location.reload()
})