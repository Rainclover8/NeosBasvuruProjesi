const mail = document.getElementById('mail')
const sifre = document.getElementById('sifre')
const btn = document.getElementById('btn')



btn.addEventListener('click', () =>{
    console.log(mail.value);
    console.log(sifre.value);

    if(mail.value == 'admin' && sifre.value == '123'){
        alert('giriş başarılı')
        mail.value = ''
        sifre.value = ''
        window.location.href = 'index.html'
    }else{
        alert('Kullanıcı adı veya şifreniz hatalı')
        mail.value = ''
        sifre.value = ''
    }
})