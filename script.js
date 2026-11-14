// Перемикання теми
document.getElementById('themeBtn').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
 
// Запит до REST API
const result = document.getElementById('result');
document.getElementById('factBtn').addEventListener('click', async () => {
  result.textContent = 'Завантаження...';
  try {
    const response = await fetch('https://api.github.com/zen');
    if (!response.ok) throw new Error('HTTP ' + response.status);
    result.textContent = await response.text();
  } catch (err) {
    result.textContent = 'Помилка запиту: ' + err.message;
  }
});