const linguagem = document.querySelector('.linguagem')
const areaDoCodigo = document.querySelector('.code')

function aplicaHighLight() {
    const codigo = areaDoCodigo.innerText
    areaDoCodigo.innerHTML = `<code class="code hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de código"></code>`
    areaDoCodigo.querySelector('code').textContent = codigo
    hljs.highlightElement(areaDoCodigo.querySelector('code'))
}

let alter = document.querySelector('.btn__highlight')

linguagem.addEventListener('change', () => {
    aplicaHighLight()
})

alter.addEventListener('click', () => {
    aplicaHighLight()
})

document.querySelector('#menuDireito__pegarCor').addEventListener('input', () => {
    const cor = document.querySelector('#menuDireito__pegarCor').value
    document.querySelector('.cor__fundo').style.backgroundColor = cor
})