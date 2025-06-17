document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('video');

  // Define o tempo de pausa entre ciclos (3 segundos)
  const pausa = 3000;

  function iniciarCiclo() {
    setTimeout(() => {
      video.play();
    }, pausa);
  }

  video.addEventListener('ended', () => {
    setTimeout(() => {
      video.currentTime = 0;
      video.play();
    }, pausa);
  });

  // Impede autoplay direto e inicia o primeiro ciclo com delay
  video.pause();
  video.currentTime = 0;
  iniciarCiclo();
});
