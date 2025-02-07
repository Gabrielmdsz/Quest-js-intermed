document.getElementById('btn-enviar').addEventListener('click', function(event) {
    event.preventDefault();

    /*Variaveis inputs */
    const inputNome = document.getElementById('nome');
    const inputEmail = document.getElementById('email');
    const inputTelefone = document.getElementById('telefone');
    const inputMensagem = document.getElementById('mensagem');

    /*Variaveis erros */
    const erroNome = inputNome.nextElementSibling;
    const erroEmail = inputEmail.nextElementSibling;
    const erroTelefone = inputTelefone.nextElementSibling;
    const erroMensagem = inputMensagem.nextElementSibling;
    

    let ehValido = true;

    function validarInputsEhErros(input, erro) {
        if (!input.value.trim()) {
            input.classList.add('campo-vazio');  
            erro.classList.add('erro-ativo');  
            ehValido = false;
        } else {
            input.classList.remove('campo-vazio');
            input.classList.add('valido');  
            erro.classList.remove('erro-ativo'); 
        }
    }

    validarInputsEhErros(inputNome, erroNome);
    validarInputsEhErros(inputEmail, erroEmail);
    validarInputsEhErros(inputTelefone, erroTelefone);
    validarInputsEhErros(inputMensagem, erroMensagem);

    if (ehValido) {
        document.querySelector('.formulario').submit();
    }
});
