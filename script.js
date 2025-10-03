// Array con la información de todos los videos
const videos = [
  { id: 1, title: "Video 1", src: "video00.mp4", thumb: "videos/video1.mp4" },
  { id: 2, title: "Video 2", src: "video01.mp4", thumb: "videos/video2.mp4" },
  { id: 3, title: "Video 3", src: "video02.mov", thumb: "videos/video3.mp4" },
  { id: 4, title: "Video 4", src: "video03.mp4", thumb: "videos/video4.mp4" },
  { id: 5, title: "Video 5", src: "video04.mp4", thumb: "videos/video5.mp4" },
  { id: 6, title: "Video 6", src: "video05.mov", thumb: "videos/video6.mp4" },
  { id: 7, title: "Video 7", src: "video06.mov", thumb: "videos/video7.mp4" },
  { id: 8, title: "video 8", src: "video07.mp4", thumb: "bideos/video8.mp4" },
  { id: 9, title: "Video 9", src: "video08.mp4", thumb: "videos/video9.mp4" },
  { id: 10, title: "Video 10", src: "video09.mp4", thumb: "videos/video10.mp4" },
  { id: 11, title: "Video 11", src: "video10.mp4", thumb: "videos/video11.mp4" },
  { id: 12, title: "Video 12", src: "video11.mp4", thumb: "videos/video12.mp4" },
  { id: 13, title: "Video 13", src: "video12.mp4", thumb: "videos/video13.mp4" },
  { id: 14, title: "Video 14", src: "video13.mov", thumb: "videos/video14.mp4" },
  { id: 15, title: "Video 15", src: "video14.mov", thumb: "videos/video15.mp4" },
  { id: 16, title: "Video 16", src: "video15.mp4", thumb: "videos/video16.mp4" },
  { id: 17, title: "Video 17", src: "video16.mov", thumb: "videos/video17.mp4" },
  { id: 18, title: "Video 18", src: "video17.mp4", thumb: "videos/video18.mp4" },
  { id: 19, title: "Video 19", src: "video18.mp4", thumb: "videos/video19.mp4" },
  { id: 20, title: "Video 20", src: "video19.mp4", thumb: "videos/video20.mp4" },
  { id: 21, title: "Video 21", src: "video20.mov", thumb: "videos/video21.mp4" },
  { id: 22, title: "Video 22", src: "video22.mp4", thumb: "videos/video22.mp4" },
  { id: 23, title: "Video 23", src: "video23.mp4", thumb: "videos/video23.mp4" },
  { id: 24, title: "Video 24", src: "video24.mp4", thumb: "videos/video24.mp4" },
  { id: 25, title: "Video 25", src: "video25.mp4", thumb: "videos/video25.mp4" },

];  

function playVideo(src) {
  // Agrega más videos aquí simplemen  // Abre play.html con la URL del video como parámetro
  window.location.href = 'play.html?src=' + encodeURIComponent(src);
}

// Función para cargar la galería de videos
function loadVideoGallery() {
  const gallery = document.getElementById('videoGallery');
  
  videos.forEach(video => {
    const thumbDiv = document.createElement('div');
    thumbDiv.className = 'video-thumb';
    thumbDiv.onclick = () => playVideo(video.src);
    
    const videoElement = document.createElement('video');
    videoElement.src = video.thumb;
    videoElement.muted = true;
    
    // Añadir título debajo del video
    const titleElement = document.createElement('p');
    titleElement.textContent = video.title;
    titleElement.className = 'video-title';
    
    thumbDiv.appendChild(videoElement);
    thumbDiv.appendChild(titleElement);
    gallery.appendChild(thumbDiv);
  });
}

// Cargar la galería cuando la página esté lista
document.addEventListener('DOMContentLoaded', loadVideoGallery);