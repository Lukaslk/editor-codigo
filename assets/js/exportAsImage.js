const convertToImage = document.querySelector(".btn__export")

convertToImage.addEventListener('click', () => {
    
    let select = document.querySelector('.select__editor')
    let ext = select.options[select.selectedIndex].text;

    if(ext === "SVG") {
        var alt = 'html2canvas.svg'
    } else if (ext === "PNG") {
        var alt = 'html2canvas.png'
    } else {
        var alt = 'html2canvas.jpeg'
    }

    const elm = document.querySelector(".cor__fundo")
    html2canvas(elm).then(function(canvas) {
        document.querySelector(".result").append(canvas)
        let cvs = document.querySelector("canvas")
        let a = document.createElement("a")
        a.href = cvs.toDataURL() 
        a.download = `${alt}` 
        a.click();
        canvas.remove()
    })
})