var menuItem = document.querySelectorAll('.itens-menu')

function selectLink() {
    menuItem.forEach((itens)=>
        itens.classList.remove('active')
    )
    this.classList.add('active')
}

menuItem.forEach((itens)=>
    itens.addEventListener('click', selectLink)
)

var expa = document.querySelector('.btn-side')
var menuSide = document.querySelector('.menu-side')
var txtBig = document.querySelector('.txt-info')
var showText= document.querySelector('.bghome')
var btnPass = document.querySelector('.btn-pass')
var like = document.querySelector('.liked')


    expa.addEventListener('click', function select(){
        menuSide.classList.toggle('expanded')
        txtBig.classList.toggle('expanded')
        btnPass.classList.toggle('expanded')
})
    btnPass.addEventListener('click',function button(){
        showText.classList.toggle('bigger')
        btnPass.classList.toggle('bigger')
        like.classList.toggle('bigger')
    })

