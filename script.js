// Adiciona eventos de clique aos itens da lista para trocar o vídeo
document.querySelectorAll('.video-sidebar ul li').forEach(item => {
    item.addEventListener('click', function() {
        const videoSrc = this.getAttribute('data-video');
        const video = document.getElementById('video');
        const videoSource = document.getElementById('videoSource');

        videoSource.setAttribute('src', videoSrc);
        video.load();
    });
});

// Lógica para a seção de comentários
document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const commentInput = document.getElementById('comment');
    const commentText = commentInput.value;

    if (commentText.trim() !== '') {
        const commentsList = document.getElementById('commentsList');
        const newComment = document.createElement('li');
        newComment.textContent = commentText;
        commentsList.appendChild(newComment);
        commentInput.value = '';
    }
});
