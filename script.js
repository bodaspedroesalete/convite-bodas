
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
