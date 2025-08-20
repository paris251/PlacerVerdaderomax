// Obtener el parámetro 'src' de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const src = urlParams.get('src');
    if(src) {
      document.getElementById('player').src = src;
    } else {
      document.body.innerHTML = '<p style="color:white;">No se encontró el video.</p>';
    }

