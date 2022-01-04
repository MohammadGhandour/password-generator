const passwordOutput = document.getElementById('password-output');
const dataLowerCase = "qwertyuioplkjhgfdsazxcvbnm".split('');
const dataUpperCase = "QWERTYUIOPLKJHGFDSAZXCVBNM".split('');
const dataNumbers = "0123456789".split('');
const dataSymbols = "!@#$%^&*-_=+\|:;',.>/?~".split('');
const displayPasswordLength = document.getElementById('display-password-length');

function generatePassword() {
    const data = [].concat(
        lowerCase.checked ? dataLowerCase : [],
        upperCase.checked ? dataUpperCase : [],
        numbers.checked ? dataNumbers : [],
        symbols.checked ? dataSymbols : []
    );
    
    let passwordLength = parseInt(displayPasswordLength.value);

        let newPassword = ''

    if(data.length == 0){
        alert ('Veuillez sélectionner au moins une critère');
        return;
    }
    
    for (let i = 0; i < passwordLength; i++) {
        newPassword += data[Math.floor(Math.random() * data.length)];
    }
    passwordOutput.value = newPassword;
    passwordOutput.style.fontFamily = 'serif';
    passwordOutput.select(ev);
    document.execCommand('copy');
    generateButton.innerHTML = "Copied !";
    setTimeout(() => {generateButton.innerHTML = "Generate Password"}, 2000);
    ev.preventDefault();
}
