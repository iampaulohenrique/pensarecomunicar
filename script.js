function changeLanguage(lang) {
    const ptTexts = document.querySelectorAll('.pt-text');
    const enTexts = document.querySelectorAll('.en-text');
    const image = document.querySelector('.photo-xp-main img');

    // Armazenar a escolha do idioma no localStorage
    localStorage.setItem('language', lang);

    if (lang === 'en') {
        ptTexts.forEach(text => text.style.display = 'none');
        enTexts.forEach(text => text.style.display = 'inline');
        image.src = '/members/styles/logo-en.png'; // Altere para o caminho da imagem em inglês
    } else {
        ptTexts.forEach(text => text.style.display = 'inline');
        enTexts.forEach(text => text.style.display = 'none');
        image.src = '/members/styles/logo-pt.png'; // Imagem em português
    }
}

function toggleLanguage() {
    const ptTexts = document.querySelectorAll('.pt-text');
    const enTexts = document.querySelectorAll('.en-text');
    
    // Alternar visibilidade
    ptTexts.forEach(el => el.style.display = el.style.display === 'none' ? 'block' : 'none');
    enTexts.forEach(el => el.style.display = el.style.display === 'none' ? 'block' : 'none');
    
    // Salvar a escolha do idioma
    const currentLanguage = localStorage.getItem('language');
    const newLanguage = currentLanguage === 'en' ? 'pt' : 'en';
    localStorage.setItem('language', newLanguage);
}

// Criar o botão para alternar idiomas
const languageToggleBtn = document.createElement('button');
languageToggleBtn.innerText = 'Trocar Idioma';
languageToggleBtn.onclick = toggleLanguage;
document.body.prepend(languageToggleBtn);

// Carregar a escolha do idioma ao iniciar a página
window.onload = function() {
    const savedLanguage = localStorage.getItem('language') || 'pt'; // Padrão para português
    document.getElementById('language').value = savedLanguage; // Atualiza o seletor

    changeLanguage(savedLanguage); // Aplica a linguagem salva
};
