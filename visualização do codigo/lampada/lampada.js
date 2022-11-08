function ligar_e_desligar(fileName){
    document.querySelector('.image').setAttribute('src','imagens/'+fileName)
    
}

document.querySelector('.image').addEventListener('dblclick',function (){
    document.querySelector('.image').setAttribute('src','imagens/MRjsF.jpg')
    document.querySelector('.image').removeAttribute('onMouseOut');
    document.querySelector('.image').removeAttribute('onMouseOver');
    document.querySelector('.ligar').removeAttribute('onClick');
    document.querySelector('.desligar').removeAttribute('onClick')
    


})