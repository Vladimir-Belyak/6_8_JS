document.querySelector('#changelink').addEventListener('click', function(event) {
    const UserText=prompt('Введите текст для изменения', 'Например, абракадабру');
    this.textContent = UserText;
    event.preventDefault();
});