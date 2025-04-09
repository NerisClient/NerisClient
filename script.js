document.addEventListener("DOMContentLoaded", () => {
  const downloadBtn = document.getElementById("downloadBtn");

  downloadBtn.addEventListener("click", () => {
    alert("Скачивание начнется через несколько секунд...");
    setTimeout(() => {
      window.location.href = "https://example.com/yourfile.zip"; // Замените ссылку на реальную ссылку для скачивания
    }, 2000);
  });
});
