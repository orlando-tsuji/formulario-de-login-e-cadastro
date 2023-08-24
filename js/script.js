const form = document.querySelector('.formulário');
const emailInput = document.querySelector('#email');
const senhaInput = document.querySelector('#senha');
const check = document.querySelector('#checkbox');
const alerta = document.querySelector('.msg-dados-invalidos');
const container = document.querySelector('.container');

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    if(!validaEmail(emailInput.value)){
        alerta.style.display = 'block';
        return ; 
    }

    if(!validaSenha(senhaInput.value, 8)){
        alerta.style.display = 'block';
        return ;
    } 

    loginBemSucedido();
    container.style.display = 'none';
})


function validaSenha(senha, minDigitos) {
    // Verifica o comprimento mínimo da senha
    if (senha.length >= minDigitos) {
        const senhaRegex = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~])(?=.*\d)(?=.*[A-Z]).{8,}$/;
        return senhaRegex.test(senha);
    }

    return false;
}


function validaEmail (email){
    const nomeRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;

    return nomeRegex.test(email);
}


emailInput.addEventListener('focus', () =>{
    alerta.style.display = 'none';
})
senhaInput.addEventListener('focus', () =>{
    alerta.style.display = 'none';
})

function loginBemSucedido() {
    const tituloBemVindo = document.getElementById('titulo-bem-vindo');
    tituloBemVindo.classList.remove('hidden'); 
    setTimeout(() => {
        tituloBemVindo.classList.add('fade-in');
    }, 300);
}
