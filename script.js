// Adiciona eventos de clique aos itens da lista para trocar o vídeo
document.querySelectorAll('.video-sidebar ul li').forEach(item => {
    item.addEventListener('click', function() {
        const videoSrc = this.getAttribute('data-video');
        const videoIf = this.getAttribute('data-video');

        const video = document.getElementById('video');
        

        const videoSource = document.getElementById('videoSource');
        const videoIframe = document.getElementById('videoIframe');

        videoSource.setAttribute('src',videoSrc);
        videoIframe.setAttribute('src', videoIf);

        video.load();
        
    });
});


