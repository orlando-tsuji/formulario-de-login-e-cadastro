const form = document.querySelector('.cadastro-form');
const inputNome = document.querySelector('.nome-cadastro');
const inputSobrenome = document.querySelector('.sobrenome-cadastro');
const inputEmail = document.querySelector('.email-cadastro');
const inputSenha = document.querySelector('.senha-cadastro');
const inputConfirmaSenha = document.querySelector('.confirma-senha-cadastro');
const inputDataNascimento = document.querySelector('.data-de-nascimento-cadastro');
const validaSenha = document.querySelector('.verificacao-senha');
const alertaCadastro = document.querySelector('.none');

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    if(!validaNome(inputNome.value, inputSobrenome.value)){
      alert("Nome ou Sobrenome inválidos");
      return;
    } 
 
    if(!validaEmail(inputEmail.value)){
      alert('E-mail inválido');
      return;  
    } 

    if(verificações()){
       alertaCadastro.style = 'display: block;'
    } else{
      return
    }
});

// verifica se o nome e sobrenome é válido
function validaNome (nome, sobrenome){
    const nomeRegex = /^[a-z A-Z]+$/;

    return nomeRegex.test(nome) && nomeRegex.test(sobrenome);
}

// verifica se o e-mail digitado é válido
function validaEmail (email){
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z._-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(email);
}


// verificação se as senhas digitadas coincidem, caso os requisitos mínimos para a senha sejam atendidos
function verificações(){

   const senhaValida = document.querySelector('.formulario-msg-valido');
   const senhasNaoCoincidem = document.querySelector('.formulario-msg-confirma-senha');
  

   if(!requisitosAtendidos()){
      return false
   } else {
      senhaValida.style.display = 'block';
   }
   
   // verifica se as senhas coincidem
   if(inputSenha.value !== inputConfirmaSenha.value){
      senhasNaoCoincidem.style = 'display: block';
      return false;
   } 
 
   return true;
};

// Botão de redirecionamento para a página de login
function fecharAlert(){
   alertaCadastro.style = 'display: none;'
   location.href = 'index.html';
}

// função que verifica se os requisitos mínimos para senha são atendidos
function requisitosAtendidos(){
   
   const erroSenha = document.querySelector('.formulario-msg-senha');
   const minCaracteres = 8;
   const letrasMaiusculasRegex = /^(?=.*[A-Z])/;
   const numerosRegex = /^(?=.*\d)/;
   const caracteresEspeciaisRegex = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~])/;

   // verifica o mínimo de caracteres
   if(inputSenha.value.length < minCaracteres){
      erroSenha.innerText = 'Senha deve ter no mínimo 8 caracteres';
      erroSenha.style = 'display: block';
      return false;
   }
   
   
   //verifica se contém letras maiúsculas
   if(!letrasMaiusculasRegex.test(inputSenha.value)){
      erroSenha.innerText = 'Senha deve conter pelo menos uma letra maiúscula';
      erroSenha.style = 'display: block';
      return false;
   }
   

   // verifica se a senha contém pelo menos um cacarter especial
   if(!caracteresEspeciaisRegex.test(inputSenha.value)){
      erroSenha.innerText = 'Senha deve conter pelo menos um caracter especial';
      erroSenha.style = 'display: block';
      return false;
   }
   

   // verifica se a senha contém um número pelo menos
   if(!numerosRegex.test(inputSenha.value)){
      erroSenha.innerText = 'Senha deve conter pelo menos um número';
      erroSenha.style = 'display: block';
      return false;
   }
   
   erroSenha.style = 'display: none';
   return true
};
