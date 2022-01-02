document.querySelector('.btn__salvaProjeto').addEventListener('click', () => {
    let projetos = JSON.parse(localStorage.getItem('projetos') || '[]');
    let id = 0
    for(let i = 0; i < projetos.length; i++) {
        id = i +1
    }
    let corDeFundo = document.querySelector('.cor__fundo').style.backgroundColor
    let code = document.querySelector('#code').textContent
    let titulo = document.querySelector('#input__titulo').value
    let descricao = document.querySelector('#input__descricao').value
    let select = document.querySelector('.linguagem')
    let linguagem = select.options[select.selectedIndex].text;
    let pegarCodigo = document.querySelector('#code').innerHTML

    /* Adiciona um novo valor no array criado */
    projetos.push({id: id, color: corDeFundo, code: code, title: titulo, desc: descricao, linguagem: linguagem, CodigoInterno:pegarCodigo})

    /* Salva o item */
    localStorage.setItem("projetos", JSON.stringify(projetos))
})