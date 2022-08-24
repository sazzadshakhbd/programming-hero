// Step-1: Add Click Event Handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // Step-2: Get the email address inside the email input field
    /* Alwayes remember to use .value to get text from an input field */
    const emailField = document.getElementById('user-email');
    const emailText = emailField.value;
    emailField.value = '';

    // step-3: get password
    // step-3.a: Set ID on the html element
    // step-3: get the element 
    // step-3: get the value from the element

    const passworField = document.getElementById('user-password');
    const passwordText = passworField.value;
    passworField.value = '';

    /* Danger: Do not varify email password on the client side */
    // Step-4: verify email and password and check whether valid user or not

    if (emailText === 'sontan@baap.com' && passwordText === 'secret') {
        window.location.href = 'bank.html';
    } else {
        alert('Invalid User')
    }

});