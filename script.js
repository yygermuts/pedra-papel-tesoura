var elementos = document.querySelector('player-options div'> img);

for (var i=0; i < elementos.lenght; i++){
    elementos[i].addEventListener('click', function(){
        alert('clicado')
    })
}
