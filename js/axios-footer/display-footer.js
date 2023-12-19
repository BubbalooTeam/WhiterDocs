function loadContent() {
    axios.get('https://bubbalooteam.github.io/WhiterDocs/footer.html')
        .then(function (response) {
            var contentContainer = document.getElementById('footerContentContainer');
            contentContainer.innerHTML = response.data;

            var contentHeight = contentContainer.offsetHeight;
            parent.postMessage({ iframeHeight: contentHeight }, '*');
        })
        .catch(function (error) {
            console.error('Erro ao carregar conteúdo:', error);
        });
}
document.addEventListener('DOMContentLoaded', loadContent);