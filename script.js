document.querySelectorAll('.bloco-nome p').forEach((element) => {
    element.addEventListener('click', () => {
        element.classList.add('click');
    });

    element.addEventListener('animationend', () => {
        element.classList.remove('click');
    });
});

document.addEventListener('DOMContentLoaded', function(){
    const whatsapp = document.getElementById('whatsapp-icon')
    const textWhatsapp = document.getElementById('text-whatsapp-icon')

    whatsapp.addEventListener('click', function(){
        window.location.href = 'https://w.app/LRSOxe'
    })

    textWhatsapp.addEventListener('click', function(){
        window.location.href = 'https://w.app/LRSOxe'
    })
})

// Adiciona o cursor de loading ao iniciar
document.body.classList.add('loading');

// Remove o cursor de loading após o carregamento completo
window.addEventListener('load', () => {
  document.body.classList.remove('loading');
});