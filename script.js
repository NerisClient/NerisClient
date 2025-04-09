document.addEventListener("DOMContentLoaded", () => {
  // Кнопка скачивания
  const downloadBtn = document.getElementById("downloadBtn");
  downloadBtn.addEventListener("click", () => {
    // Здесь ты можешь добавить логику для скачивания файла
    alert("Файл начнёт скачиваться через несколько секунд!");
    setTimeout(() => {
      window.location.href = "https://example.com/yourfile.zip"; // Заменить на ссылку на файл
    }, 2000); // Начнётся скачивание через 2 секунды
  });
});