let keyInput = document.getElementById('keyInput');
let keyName = document.getElementById('keyName'); 
let keyCode = document.getElementById('keyCode'); 
let badgeCtrl = document.getElementById('badgeCtrl'); 
let badgeShift = document.getElementById('badgeShift'); 
let badgeAlt = document.getElementById('badgeAlt');

keyInput.addEventListener('keydown', (event) => {
  // Выводим имя клавиши (обрабатываем пробел)
  keyName.textContent = event.key === ' ' ? 'Space (Пробел)' : event.key;
  keyCode.textContent = event.code;

  // Активируем бейджи модификаторов
  if (event.ctrlKey) badgeCtrl.classList.add('active');
  if (event.shiftKey) badgeShift.classList.add('active');
  if (event.altKey) badgeAlt.classList.add('active');

  // Меняем цвет рамки в зависимости от клавиши
  if (event.code === 'KeyG') {
    keyInput.style.borderColor = '#2ed573';
  } else {
    keyInput.style.borderColor = '#ff4757';
  }
});

keyInput.addEventListener('keyup', (event) => {
  // Проверяем состояние модификаторов напрямую для надежности
  if (!event.ctrlKey) badgeCtrl.classList.remove('active');
  if (!event.shiftKey) badgeShift.classList.remove('active');
  if (!event.altKey) badgeAlt.classList.remove('active');
});
