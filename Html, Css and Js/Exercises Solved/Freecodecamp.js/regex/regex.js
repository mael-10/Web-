const invalidName = document.querySelector('.invalid-camp');
const form = document.querySelector('form');

form.addEventListener('submit', function(update) { //What is 'update'? (see later)
    update.preventDefault(); 
    const nameText = document.getElementById('text-name').value; //Get element's value
    console.log(nameText);

    console.log(nameText.match(/^teste$/)); //Return a null value if isnt corret 

    if(nameText.match(/^teste$/) === null){
        invalidName.style.display = 'block';
    } else {
        invalidName.style.display = 'none';
    }
})

