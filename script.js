function toggleLanguage() {
    const ptText = document.querySelectorAll('.pt-text');
    const enText = document.querySelectorAll('.en-text');

    ptText.forEach(el => el.style.display = el.style.display === 'none' ? 'block' : 'none');
    enText.forEach(el => el.style.display = el.style.display === 'none' ? 'block' : 'none');
}

// Exemplo de como chamar a função
// Você pode criar um botão ou link na sua página para ativar a troca de idioma
const languageToggleBtn = document.createElement('button');
languageToggleBtn.innerText = 'Trocar Idioma';
languageToggleBtn.onclick = toggleLanguage;
document.body.prepend(languageToggleBtn);
