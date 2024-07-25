const invalidName = document.querySelector('.invalid-camp');
const form = document.querySelector('form');

form.addEventListener('submit', function(event) { // Corrigido: substituído 'update' por 'event'
    event.preventDefault(); // Corrigido: 'update' foi alterado para 'event'

    const nameText = document.getElementById('text-name').value; // Obtém o valor do elemento
    console.log(nameText);

    // Verifica se o valor corresponde exatamente à string "teste"
    console.log(nameText.match(/^teste$/)); // Retorna null se não estiver correto

    if (nameText.match(/^teste$/) === null) {
        invalidName.style.display = 'block';
    } else {
        invalidName.style.display = 'none';
    }
});

//telephone: /^\d{11}$/, 
//username: /^[a-z\d]{11}$/i,
//email: /^[a-z\d._%+-]+@[a-z]+\.[a-z]{2,8}\.?[a-z]{2,8}?$ 