
const video = document.getElementById('videoPlayer');
const forward = 'VidnozImageToVideoEffects.mp4.mp4';
const reverse = 'VidnozImageToVideoEffects_reversed.mp4';
let isReversing = false;

async function playLoop() {
  video.src = forward;
  video.load();
  await delay(3000);
  video.play();

  video.onended = async () => {
    video.src = reverse;
    video.load();
    await video.play();
    video.onended = async () => {
      await delay(3000);
      playLoop();
    };
  };
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

playLoop();

// Envio do formulário
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
