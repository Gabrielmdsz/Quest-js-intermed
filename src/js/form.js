const camposFormulario = document.querySelectorAll('.campo')
const botaoEnviar = document.querySelector('.btn-enviar')

botaoEnviar.addEventListener('click', function(event) {
    event.preventDefault();

    camposFormulario.forEach((input) =>{
        if (!input.value) {
            input.classList.add('campo-vazio');  
            input.nextElementSibling.classList.add('erro-ativo'); 
        } else {
            input.classList.remove('campo-vazio');
            input.classList.add('valido');  
            input.nextElementSibling.classList.remove('erro-ativo'); 
        }
})
});