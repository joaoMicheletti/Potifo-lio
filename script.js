// Função para verificar se o elemento está visível na viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Seleciona a imagem
const imgPerform = document.querySelector('#ImgPerform');

// Adiciona um evento de scroll para verificar a posição do elemento
window.addEventListener('scroll', () => {
    if (isElementInViewport(imgPerform)) {
        imgPerform.classList.add('animate'); // Adiciona a classe para animar
    }
});
