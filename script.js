document.addEventListener('DOMContentLoaded', () => {
  // Get all video elements
  const videos = document.querySelectorAll('video');

  // Add event listener for each video
  videos.forEach((video) => {
    video.addEventListener('play', () => {
      // Pause all other videos when one is played
      videos.forEach((otherVideo) => {
        if (otherVideo !== video) {
          otherVideo.pause();
        }
      });
    });
  });
});
