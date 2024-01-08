function toggleMode(){
    const html = document.documentElement

    /* essa parte do if e else pode ser substituido pela html.classList.toggle('light'), que o processo continuará igual */
    if(html.classList.contains('light')){
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }

    /*
    simplificando a function com o cod abaixo
    html.classList.toggle('light')
    */

    /*pegar a tag imagem */
    const img = document.querySelector('#profile img')

    //substituir a iagem
    if(html.classList.contains('light')){
        //se tiver light mode, adicionar a imagem light
        img.setAttribute('src', './assets/avatar-light.png')
    } else {
        // se tiver light mode, manter a imagem normal
        img.setAttribute('src', './assets/avatar.png')
    }
}
