const video = document.getElementById("conviteVideo");

function playLoopWithPause() {
  video.currentTime = 0;
  video.play();

  const onEnd = () => {
    setTimeout(() => {
      video.removeEventListener('ended', onEnd);
      playLoopWithPause();
    }, 3000);
  };

  video.addEventListener('ended', onEnd);
}

// Espera 3 segundos antes de tocar pela primeira vez
setTimeout(() => {
  playLoopWithPause();
}, 3000);

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
