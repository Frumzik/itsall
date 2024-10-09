
// Получаем модальное окно
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModal');

// Функция для открытия модального окна
function openModal() {
    modal.style.display = 'flex';
}
openModalBtn.addEventListener('click', openModal);
// Функция для закрытия модального окна
function closeModal() {
    modal.style.display = 'none';
}

// Закрытие окна при нажатии на свободную область (бэкдроп)
window.onclick = function(event) {
    if (event.target == modal) {
    closeModal();
    }
};
