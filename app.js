

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
        firstNameDialog.innerHTML = ''
        
        // Boarder valid
        firstNameInput.classList.add('valid')

        // remove Error boarder
        firstNameInput.classList.remove('error');
      
         // Icon Valid
         let iconValid = document.createElement('i');
         iconValid.classList.add('fa-solid', 'fa-circle-check');
         firstNameDialog.appendChild(iconValid)

        return firstNameInput;
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
        lastNameDialog.innerHTML = ''
        let validIcon = document.createElement('i');
        validIcon.classList.add('fa-solid', 'fa-circle-check');
        lastNameDialog.appendChild(validIcon);

        return lastNameInput;

    }
}

// #-------- Email address Validate

function validateEmail() {
    let emailInput = document.querySelector('#email-field').value;

    if(emailInput.trim() === '') {

        // Show no message
        let emailDialog = document.querySelector('.email-dialog');
        emailDialog.innerHTML = ''

        // Remove Error Boarder
        let emailInput = document.querySelector('.email');
        emailInput.classList.remove('error')

        // Remove Valid Boarder
        emailInput.classList.remove('valid')

        return false;

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

        return false;

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

        return false;

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

        return emailInput;

    }
}


// #---------- Validate Password
function validatePassword(){
    const passInputField = document.querySelector('#password-field').value;

    if (passInputField.trim() === '') {

        //Remove Error Message
        let passwordDialog = document.querySelector('.password-dialog');
        passwordDialog.innerHTML = ''

        //Remove Boarder Error and Boarder Valid
        let passInputBoarder = document.querySelector('.password');
        passInputBoarder.classList.remove('error')
        passInputBoarder.classList.remove('valid')

        //Remove Error Icon


        return false;

    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(passInputField)) {

        //Show Error Message
        let passwordDialog = document.querySelector('.password-dialog');
        passwordDialog.innerHTML = 'Password should At least one uppercase letter, one lowercase letter, one digit, one special character and Minimum length of 8 characters'


        // Show Error Boarder
        let passInputBoarder = document.querySelector('.password');
        passInputBoarder.classList.add('error');

        //Show Error Icon
        const errorIcon = document.createElement('i');
        errorIcon.classList.add('fa-solid', 'fa-circle-xmark');
        passwordDialog.appendChild(errorIcon);

        //Remove Valid Boarder
        passInputBoarder.classList.remove('valid')


        return false;
        
    } else {

        //Remove Error Boarder
        let passInputBoarder = document.querySelector('.password');
        passInputBoarder.classList.remove('error');

        //Remove Error Message
        let passwordDialog = document.querySelector('.password-dialog');
        passwordDialog.innerHTML = '';

        // Show Valid Icon
        const validIcon = document.createElement('i');
        validIcon.classList.add('fa-solid', 'fa-circle-check');
        passwordDialog.appendChild(validIcon)

        //Show Valid Boarder
        passInputBoarder.classList.add('valid');


        return passInputField;

    }
}

// #----------- Validate Confirm Password

function validateConPassword(){
    const passInputField = document.querySelector('#password-field').value;
    const conPasswordInput = document.querySelector('#conpassword-field').value;
    const conPassword = document.querySelector('.conpassword')
    const conPasswordDialog = document.querySelector('.conpassword-dialog');

    if (conPasswordInput.trim() === '') {

        // Remove any message once empty
        conPasswordDialog.innerHTML = '';

        // Remove Boarder Error
        conPassword.classList.remove('error');

        // Remove 
        conPassword.classList.remove('valid')

        return false;

    } else if (conPasswordInput != passInputField) {

        // Show Error Message Dialog
        conPasswordDialog.innerHTML = 'Password not matched';

        // Show Error Boarder
        conPassword.classList.add('error')

        // Remove Valid Boarder
        conPassword.classList.remove('valid')

        // Show Icon Error
        const errorIcon = document.createElement('i');
        errorIcon.classList.add('fa-solid', 'fa-circle-xmark');
        conPasswordDialog.appendChild(errorIcon);
        

        return false;

    } else {

        // Remove Error Boarder;
        conPassword.classList.remove('remove');

        // Add Valid Boarder
        conPassword.classList.add('valid');

        // Remove Error Message
        conPasswordDialog.innerHTML = ''

        //add Valid Icon
        const validIcon = document.createElement('i');
        validIcon.classList.add('fa-solid', 'fa-circle-check');
        conPasswordDialog.append(validIcon);

        return conPasswordInput;

    }
}

// #--------- Country Validation

function validateCountry(){

    const countryInputField = document.querySelector('#country-field').value;
    const countryInput = document.querySelector('.country');
    const countryDialog = document.querySelector('.country-dialog');

    if (countryInputField.trim() === '') {

        // Remove show error message
        countryDialog.innerHTML = '';

        // remove Boarder Error and Boarder valid
        countryInput.classList.remove('error')
        countryInput.classList.remove('valid')

        return false;

    } else if (!/^[a-zA-Z\s]+$/.test(countryInputField)){

        // Show Error Message
        countryDialog.innerHTML = 'Country only contain letters';

        // Show Error Boarder
        countryInput.classList.add('error');

        // Remove Valid boarder
        countryInput.classList.remove('valid');

        // Show Error Icon
        const errorIcon = document.createElement('i');
        errorIcon.classList.add('fa-solid', 'fa-circle-xmark');
        countryDialog.appendChild(errorIcon);


        return false;

    } else {

        //Remove Error message
        countryDialog.innerHTML = '';

        countryInput.classList.remove('error');

        // Show valid Boarder
        countryInput.classList.add('valid');

         // Show valid Icon
         const validIcon = document.createElement('i');
         validIcon.classList.add('fa-solid', 'fa-circle-check');
         countryDialog.appendChild(validIcon);
 

        return countryInputField;

    }
}

// #-------- VALIDATE PHONE NUMBER

function validatePhone(){
    const inputPhoneField = document.querySelector('#phonenumber-field').value;
    const inputPhone = document.querySelector('.phonenumber');
    const phoneDialog = document.querySelector('.phonenum-dialog')

    if(inputPhoneField.trim() === ''){

        // Remove Boarder Error
        inputPhone.classList.remove('error');

        // Remove Boarder Valid
        inputPhone.classList.remove('valid');

        // Remove Error Message
        phoneDialog.innerHTML = '';
       
        return false;

    } else if (!/(09|\+639)\d{9}$/.test(inputPhoneField)){

        // Show Error Message 
        phoneDialog.innerHTML = 'Phone number is not valid'

        // Show Error Boarder
        inputPhone.classList.add('error');

        // Remove Valid Boarder
        inputPhone.classList.remove('valid');

        // Show Error Icon
        const errorIcon = document.createElement('i');
        errorIcon.classList.add('fa-solid', 'fa-circle-xmark');
        phoneDialog.appendChild(errorIcon);

        return false;

    } else {

        // Show valid Boarder
        inputPhone.classList.add('valid');

        // Remove Error Message
        phoneDialog.innerHTML = ''

        // Show Valid icon
        const validIcon = document.createElement('i');
        validIcon.classList.add('fa-solid', 'fa-circle-check');
        phoneDialog.appendChild(validIcon)

        return inputPhoneField;

    }
}


// CHECK ALL FIELD SUBMIT FORM
const form = document.querySelector('#form');

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const isFirstNameValid = validateFirstName();
    const isLastNameValid = validateLastName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConPassValid = validateConPassword();
    const isCountryValid = validateCountry();
    const isPhoneNumberValid = validatePhone();


    // CHECK ALL FIELD

    if(isFirstNameValid == '') {
        const firstNameBoarder = document.querySelector('.firstname');
        const firstNameDialog = document.querySelector('.firstname-dialog');

        firstNameBoarder.classList.add('error');
        firstNameDialog.innerHTML = 'First name is required*';

    } else {
        console.log('first name is ok')
    }

    if(isLastNameValid == '') {
        const lastNameBoarder = document.querySelector('.lastname');
        const lastNameDialog = document.querySelector('.lastname-dialog');

        lastNameBoarder.classList.add('error');
        lastNameDialog.innerHTML = 'Last name is required*';

    } else {
        console.log('last name is ok')
    }


    if(isEmailValid == '') {
        const emailBoarder = document.querySelector('.email');
        const emailDialog = document.querySelector('.email-dialog');

        emailBoarder.classList.add('error');
        emailDialog.innerHTML = 'Email is required*';

    } else {
        console.log('email is ok');
    }


    if(isPasswordValid == '') {
        const passBoarder = document.querySelector('.password');
        const passDialog = document.querySelector('.password-dialog');

        passBoarder.classList.add('error');
        passDialog.innerHTML = 'Password is required*';
        
    } else {
        console.log('password is ok');
    }


    if(isConPassValid == '') {
        const conPassBoarder = document.querySelector('.conpassword');
        const conPassDialog = document.querySelector('.conpassword-dialog');

        conPassBoarder.classList.add('error');
        conPassDialog.innerHTML = 'Confirm Password is required*';

    } else {
        console.log('confirm password is ok');
    }

    if(isCountryValid == '') {
        const countryBoarder = document.querySelector('.country');
        const countryDialog = document.querySelector('.country-dialog');

        countryBoarder.classList.add('error');
        countryDialog.innerHTML = 'Country is required*';

    } else {
        console.log('country is ok');
    }

    if(isPhoneNumberValid == '') {
        const phoneNumberBoarder = document.querySelector('.phonenumber');
        const phoneNumberDialog = document.querySelector('.phonenum-dialog');

        phoneNumberBoarder.classList.add('error');
        phoneNumberDialog.innerHTML = 'Phone number is required*';

    } else {
        console.log('phone number is ok');
    }


    // VALIDATE FORM

    if ( isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid && isConPassValid && isCountryValid && isPhoneNumberValid) {

        alert("Welcome new User!");

        // FIRST NAME FIELD
        let firstNameField = document.querySelector('.firstname');
        firstNameField.value = ""
        firstNameField.classList.remove('valid')
        firstNameField.classList.remove('error')

        let firstNameDialog = document.querySelector('.firstname-dialog')
        firstNameDialog.innerHTML = '';

        // LAST NAME FIELD
        let lastNameField = document.querySelector('.lastname');
        lastNameField.value = ""
        lastNameField.classList.remove('valid')
        lastNameField.classList.remove('error')

        let lastNameDialog = document.querySelector('.lastname-dialog')
        lastNameDialog.innerHTML = '';

        //EMAIL FIELD
        let emailField = document.querySelector('.email');
        emailField.value = ""
        emailField.classList.remove('valid')
        emailField.classList.remove('error')

        let emailDialog = document.querySelector('.email-dialog')
        emailDialog.innerHTML = '';

        // PASSWORD FIELD
        let passwordField = document.querySelector('.password');
        passwordField.value = ""
        passwordField.classList.remove('valid')
        passwordField.classList.remove('error')

        let passwordDialog = document.querySelector('.password-dialog')
        passwordDialog.innerHTML = '';

        // CONFIRM PASSWORD FIELD
        let conpasswordField = document.querySelector('.conpassword');
        conpasswordField.value = ""
        conpasswordField.classList.remove('valid')
        conpasswordField.classList.remove('error')

        let conpasswordDialog = document.querySelector('.conpassword-dialog')
        conpasswordDialog.innerHTML = '';

        //COUNTRY FIELD
        let countryField = document.querySelector('.country');
        countryField.value = ""
        countryField.classList.remove('valid')
        countryField.classList.remove('error')

        let countryDialog = document.querySelector('.country-dialog')
        countryDialog.innerHTML = '';

        //PHONE NUMBER FIELD
        let phoneNumberField = document.querySelector('.phonenumber');
        phoneNumberField.value = ""
        phoneNumberField.classList.remove('valid')
        phoneNumberField.classList.remove('error')

        let phoneNumberDialog = document.querySelector('.phonenum-dialog')
        phoneNumberDialog.innerHTML = '';

    } else {

        alert("Fill out all required field");

    }

})
