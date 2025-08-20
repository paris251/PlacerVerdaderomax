    function playVideo(src) {
      // Abre play.html con la URL del video como parámetro
      window.location.href = 'play.html?src=' + encodeURIComponent(src);
    }