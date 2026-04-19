const nameInput = document.getElementById('name');
const email = document.getElementById('email')
const subject = document.getElementById('subject');
const msg = document.getElementById('message');
const form = document.querySelector('.contactForm');
const nameIncorrectInput = [
    '1','2','3','4','5','6','7','8','9','0','!','@','£','#','$','%','^','&','*','(',')','[',']',
    '{','}','~',':',';','/','?','<','>','.'
];

function formSubmit(e){
    e.preventDefault();
    let isNameValid = true;
    let isEmailValid = true;

    //Checking if name is valid

    for(let letter = 0; letter < nameInput.value.length; letter++){
        for(let i = 0; i < nameIncorrectInput.length; i++){
            if(nameInput.value[letter] === nameIncorrectInput[i]){
                isNameValid = false;
                break;
            }
        }
    }

    //checking if email is valid

    let username = email.value.slice(0, email.value.indexOf('@'));
    let domain = email.value.slice(email.value.indexOf('.'));  
    let count = 0;  
    console.log(username);
    console.log(domain);

    for(let i = 0; i < email.value.length; i++){
        if(email.value[i] === '@'){
            count++;
        }
        if(count > 1){
            isEmailValid = false;
            break;
        }
    }
    if(!(domain === '.com')){
        isEmailValid = false;
    }
    


    if(!isNameValid){
        alert('Incorrect input name cannot have a number or special character');
    }
    else if(!isEmailValid){
        alert('Invalid email please check details');
    }
    else{
        alert('Message has been sent!')
        nameInput.value = '';
        email.value = '';
        subject.value = '';
        msg.value = '';
    }

}

form.addEventListener('submit', formSubmit);