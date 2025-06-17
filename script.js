const video = document.getElementById("conviteVideo");

function startLoop() {
  video.currentTime = 0;
  video.play();

  const onEnd = () => {
    setTimeout(() => {
      video.removeEventListener('ended', onEnd);
      startLoop();
    }, 3000);
  };

  video.addEventListener('ended', onEnd);
}

// Pausa inicial antes do primeiro play
video.pause();
video.addEventListener('canplaythrough', () => {
  setTimeout(() => {
    startLoop();
  }, 3000);
});

// Formulário
document.getElementById("rsvpForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  await fetch("https://script.google.com/macros/s/AKfycbzQ80lrIPB3wYGpL4mW-ZfMHbW025KEBCCzgVue_9yOrjDZSZW_r2HLU4eASuaV7yse/exec", {
    method: "POST",
    body: formData,
  });
  alert("Confirmação recebida com sucesso!");
  this.reset();
});
