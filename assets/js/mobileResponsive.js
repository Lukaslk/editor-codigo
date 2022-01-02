const logo = document.querySelector('.logo')
const mobileSearch = document.querySelector('.mobile__inputPesquisa')
let toggleNav = false

document.querySelector('#search__mobile').addEventListener('click', () => {
    if(toggleNav === false){
        logo.style.display = "none"
        mobileSearch.style.display = "block"
        toggleNav = true
    } else if(toggleNav === true){
        logo.style.display = "flex"
        mobileSearch.style.display = "none"
        toggleNav = false
    }
})

const burguerMenu = document.querySelector('.mobile__menu')

burguerMenu.addEventListener('click', () => {
    const navegacao = document.querySelector('.navegacao')
    navegacao.classList.toggle('active')
})