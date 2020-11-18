function generate(){
    const initPerson = personGenerator.getPerson();

    document.querySelector('#surnameOutput').innerText = initPerson.surname;
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#patronymicOutput').innerText = initPerson.patronymic;
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#birthDateOutput').innerText = initPerson.birthDate;
    document.querySelector('#professionOutput').innerText = initPerson.profession;
}

document.querySelector('#generate').addEventListener('click', () => {
    const card = document.querySelector('.card-body');

    card.classList.add('rotate');
    card.addEventListener('transitionend', () =>{
        if (card.classList.contains('rotate')){
            generate();
        }
        card.classList.remove('rotate');
        
    })
    
});


document.querySelector('#clear').addEventListener('click', () => {
    document.querySelector('#surnameOutput').innerText = "";
    document.querySelector('#firstNameOutput').innerText = "";
    document.querySelector('#patronymicOutput').innerText = "";
    document.querySelector('#genderOutput').innerText = "";
    document.querySelector('#birthDateOutput').innerText = "";
    document.querySelector('#professionOutput').innerText = ""; 
})