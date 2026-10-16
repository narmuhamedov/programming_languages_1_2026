const phoneInput = document.getElementById('phoneInput');
const formCard = document.getElementById('formCard');
const statusMessage = document.getElementById('statusMessage');

// +996555123321, 0555789987, 996555787787, +996 555 123 456
const kgPhoneRegex = /^(?:\+996|996|0)\s?(?:312|50\d|55\d|70\d|75\d|77\d|99\d)\s?\d{3}\s?\d{3}$/;

let typeTimer = null; // чтобы отменять предыдущую печать

function typeWriteEffect(text, index, element) {
  if (index >= text.length) return;
  element.textContent += text[index];
  typeTimer = setTimeout(() => {
    typeWriteEffect(text, index + 1, element);
  }, 40);
}

function startTypeWrite(text, element) {
  clearTimeout(typeTimer);
  element.textContent = '';
  typeWriteEffect(text, 0, element);
}

phoneInput.addEventListener('input', () => {
  // Убираем всё, кроме цифр и +
  const cleanValue = phoneInput.value.replace(/[-()\s]/g, '');

  if (kgPhoneRegex.test(cleanValue)) {
    formCard.classList.add('success-card');
    phoneInput.classList.add('success-input');
    statusMessage.className = 'status success-text';
    startTypeWrite('Номер подтверждён', statusMessage);
  } else {
    formCard.classList.remove('success-card');
    phoneInput.classList.remove('success-input');
    statusMessage.className = 'status';
    clearTimeout(typeTimer);
    statusMessage.textContent =
      phoneInput.value.length > 5 ? 'Неверный формат номера' : '';
  }
});