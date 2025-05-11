document.addEventListener('DOMContentLoaded', () => {
  const videoFiles = [
    '1.mp4',
    '2.mp4',
    '3.mp4',
    '4.mp4'
  ];

  const videoList = document.getElementById('videoList');

  videoFiles.forEach(file => {
    const title = file.replace(/\.[^/.]+$/, '').replace(/_/g, ' ');

    const card = document.createElement('div');
    card.className = 'video-card';
    card.setAttribute('data-title', title.toLowerCase());

    const video = document.createElement('video');
    video.src = `videos/${file}`;
    video.controls = true;
    video.preload = 'metadata';
    video.style.width = '100%';

    // ▶️ On click: go fullscreen + play
    video.addEventListener('click', () => {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
      video.play();
    });

    // 🛑 On end: exit fullscreen
    video.addEventListener('ended', () => {
      if (document.fullscreenElement) {
        document.exitFullscreen?.();
      } else if (document.webkitFullscreenElement) {
        document.webkitExitFullscreen?.();
      } else if (document.msFullscreenElement) {
        document.msExitFullscreen?.();
      }
    });

    const label = document.createElement('p');
    label.textContent = title;

    card.appendChild(video);
    card.appendChild(label);
    videoList.appendChild(card);
  });
});

function searchVideos() {
  const input = document.getElementById('search').value.toLowerCase();
  const videos = document.querySelectorAll('.video-card');

  videos.forEach(card => {
    const title = card.getAttribute('data-title');
    card.style.display = title.includes(input) ? 'block' : 'none';
  });
}
