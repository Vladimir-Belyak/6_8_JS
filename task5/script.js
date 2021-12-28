document.querySelector('#clearText').addEventListener('click', function(event) {
    let input = document.querySelector('input');
    console.log(input.value);
    document.querySelector('input').value="";
    document.querySelector('#duplicateField').textContent = "";
    event.preventDefault();
});

document.addEventListener('keyup', () => {
    document.querySelector('#duplicateField').textContent =document.querySelector('input').value;
  });