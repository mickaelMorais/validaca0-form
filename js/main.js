function validacao(){
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{0,}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let email = document.querySelector('.email').value
    let senha = document.querySelector('.senha').value
    let erro = document.querySelector('.erro')
    let test = regex.test(senha)
    let testEmail = regexEmail.test(email)
    
    if(email == '' || email == undefined){
        erro.innerHTML = '<p>o campo de email é obrigatório</p>' 
        erro.style.display = "block"
    }else if (!testEmail) {
        erro.innerHTML = '<p>email invalido</p>' 
        erro.style.display = "block"
    }else if(senha == '' || senha == undefined){
        erro.innerHTML = '<p>o campo de senha é obrigatório</p>' 
        erro.style.display = "block"
    }else if(!test) {
        erro.innerHTML = '<p>a senha deve conter 1 letra maiuscula e minuscula e 1 numero</p>' 
        erro.style.display = "block"
    }else if(senha.length > 0 && senha.length <= 8) {
        erro.innerHTML = '<p>senha fraca</p>' 
        erro.style.display = "block"
    }else{
        erro.innerHTML = '<p>LOGOU</p>' 
        erro.style.display = "block"
        erro.style.color = "green"
    }
    setTimeout(() => {
        erro.style.display = "none"
    }, 3500);
}