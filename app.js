

// #----------Last name input validation

function validateFirstName() {
    let firstNameInput = document.querySelector('#firstname-field').value;

    const firstNameDialog = document.querySelector('.firstname-dialog');
    
    if (firstNameInput.trim() === '') {
        // Remove existing message
        let firstNameInput = document.querySelector('#firstname-field');
        firstNameInput.classList.remove('valid')
        firstNameInput.classList.remove('error')
        firstNameDialog.innerHTML = '';

        return false;

    } else if (!/^[a-zA-Z\s]+$/.test(firstNameInput)) {

        // Boarder Error
        let firstNameInput = document.querySelector('#firstname-field')
        firstNameInput.classList.add('error')
        firstNameInput.classList.remove('valid')

        // Show Error Dialog Message
        firstNameDialog.innerHTML = 'First name should contain letters';
        
        // Show Icon Error
        let iconError = document.createElement('i');
        iconError.classList.add('fa-solid', 'fa-circle-xmark');
        firstNameDialog.appendChild(iconError)

        return false;

    } else {
        let firstNameInput = document.querySelector('#firstname-field')
        let firstNameDialog = document.querySelector('.firstname-dialog')
        
        // Boarder valid
        firstNameInput.classList.add('valid')

        // remove Error boarder
        firstNameInput.classList.remove('error');
      
         // Icon Valid
         let iconValid = document.createElement('i');
         iconValid.classList.add('fa-solid', 'fa-circle-check');
         firstNameDialog.appendChild(iconValid)

        return true

    }
}

// #-----------Last name input validation

function validateLastName() {
    let lastNameInput = document.querySelector('#lastname-field').value;

    if (lastNameInput.trim() === '') {
        
        //Remove Error Message
        let lastNameDialog = document.querySelector('.lastname-dialog');
        lastNameDialog.innerHTML = '';

        //Remove Error Boarder
        let lastNameInput = document.querySelector('.lastname');
        lastNameInput.classList.remove('error');

        //Remove Valid Boarder
        lastNameInput.classList.remove('valid');


        return false;

    } else if (!/^[a-zA-Z\s]+$/.test(lastNameInput)) {

        // Show Error Message
        let lastNameDialog = document.querySelector('.lastname-dialog');
        lastNameDialog.innerHTML = 'Last name should contain letters';

        // Show Error Boarder
        let lastNameField = document.querySelector('.lastname');
        lastNameField.classList.add('error');
        lastNameField.classList.remove('valid');

        // Show Icon Error
        let iconError = document.createElement('i');
        iconError.classList.add('fa-solid', 'fa-circle-xmark');
        lastNameDialog.appendChild(iconError);

        return false;
    } else {

        // Show Valid Boarder
        let lastNameInput = document.querySelector('.lastname');
        lastNameInput.classList.add('valid');

        // Show Valid Icon
        let lastNameDialog = document.querySelector('.lastname-dialog')
        let validIcon = document.createElement('i');
        validIcon.classList.add('fa-solid', 'fa-circle-check');
        lastNameDialog.appendChild(validIcon);

        return true
    }
}

// #-------- Email address Validate

function validateEmail() {
    let emailInput = document.querySelector('#email-field').value;

    if(emailInput === '') {

        // Show no message
        let emailDialog = document.querySelector('.email-dialog');
        emailDialog.innerHTML = ''

        // Remove Error Boarder
        let emailInput = document.querySelector('.email');
        emailInput.classList.remove('error')

        // Remove Valid Boarder
        emailInput.classList.remove('valid')

        return false

    } else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)) {

        //Show Error Message
        let emailDialog = document.querySelector('.email-dialog');
        emailDialog.innerHTML = 'Email address is not valid'
        
        //Show Error Boarder
        let emailInputField = document.querySelector('.email');
        emailInputField.classList.add('error')

        //Remove Show Valid boarder
        emailInputField.classList.remove('valid')

        //Show Error Icon
        const errorIcon = document.createElement('i');
        errorIcon.classList.add('fa-solid', 'fa-circle-xmark');
        emailDialog.appendChild(errorIcon);

        return false

    } else if (emailInput === emailInput.value) {

         //Show Email Already Exist Message
         let emailDialog = document.querySelector('.email-dialog');
         emailDialog.innerHTML = 'Email address already exist';

        //Show Error Boarder
        let emailInputField = document.querySelector('.email');
        emailInputField.classList.add('error');

        // Remove Valid Boarder
        emailInputField.classList.remove('valid')

        //Show Error Icon
        const errorIcon = document.createElement('i');
        errorIcon.classList.add('fa-solid', 'fa-circle-xmark');
        emailDialog.appendChild(errorIcon);


    }else {

        //Remove Error Message
        let emailDialog = document.querySelector('.email-dialog');
        emailDialog.innerHTML = '';

         //Remove Error Boarder
         let emailInputField = document.querySelector('.email');
         emailInputField.classList.remove('error');

         // Add Valid Boarder
         emailInputField.classList.add('valid')

         //Show Valid Icon
         const validIcon = document.createElement('i');
         validIcon.classList.add('fa-solid', 'fa-circle-check');
         emailDialog.appendChild(validIcon);

        return true

    }
}








validateFirstName();
validateLastName();
validateEmail();