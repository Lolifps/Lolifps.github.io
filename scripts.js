// scripts.js
document.getElementById('heartButton').addEventListener('click', function () {
    const loveMessage = document.getElementById('loveMessage');
    loveMessage.classList.remove('hidden');
    this.disabled = true; // Desabilita o botão após o clique
});