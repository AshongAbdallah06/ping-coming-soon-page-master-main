let notifyButton = document.querySelector('.notify');
let errorMessage =document.querySelector('.error-message');
let email = document.querySelector('.email');
let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const width = window.innerWidth;


function checkWidth() {
    if (width < 700) {
        if (errorMessage.style.opacity = '1') {
            email.classList.add('email-mobile');
            errorMessage.classList.add('error-message-mobile');    
        } else {
            email.classList.remove('email-mobile');
            errorMessage.classList.remove('error-message-mobile');    
        }
    }
}


function renderEmailAndError() {
    errorMessage.style.opacity = '1';
    email.style.borderColor = 'red';
}


function emailMatches() {
    errorMessage.innerHTML = ''; // Clear any previous error messages
    errorMessage.style.opacity = '0';
    email.style.borderColor = 'rgb(219, 219, 219)'
    email.value = ''

    document.querySelector('.popup').innerHTML = `
        <div id="pop-up">
            <div class="container">
                <p class="thank-you">Thank You!😁 You will be notified.🔔</p>
            </div>
        </div>   
    `

    email.classList.remove('email-mobile');

    setTimeout(() => {
        document.querySelector('.popup').innerHTML = ''
    }, 2000);
}


function emptyEmail() {
    errorMessage.innerHTML = 'Whoops! It looks like you forgot to add your email';
    email.classList.add('email-mobile');
    errorMessage.classList.add('empty'); 

    renderEmailAndError();

}

function checkEmail() {
    
    if (email.value.match(emailRegex)) { // If email matches
        emailMatches();
    } else if (email.value.trim() === '') {
        emptyEmail();
    } else {
        errorMessage.style.opacity = '1'
        errorMessage.innerHTML = 'Provide a valid email address';
        errorMessage.classList.add('invalid'); 
        renderEmailAndError();
    
        checkWidth();
      }
}


notifyButton.addEventListener('click', () => {
    checkEmail();
})

email.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        checkEmail();
    }
})
