const gonder = document.getElementById('gonder')
const email = document.getElementById('mail')
const sifre = document.getElementById('sifre')
const dosya = document.getElementById('dosya')


function emailControl(email){
    const regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
    return regex.test(email);
}

function kaydetme(email, sifre){
    localStorage.setItem('userName', email)
    localStorage.setItem('userPassword', sifre)
}

gonder.addEventListener('click', () =>{
    if(!emailControl(email.value)){
        return alert('Geçerli bir e-posta giriniz')
    }else{
        alert('giriş başarlı')
        window.location.href = 'index.html'
        kaydetme(email.value , sifre.value)
    }
})