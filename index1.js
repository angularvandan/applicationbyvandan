console.log("This is typescript");
var success_message = document.getElementById('success_message');
var resetForm = document.getElementById('resetForm');
var fs_name = document.getElementById('fsname');
var ls_name = document.getElementById('lsname');
var mobile_number = document.getElementById('mobileno');
var email = document.getElementById('email');
var age = document.getElementById('age');
var qualification = document.getElementById('qualification');
var password1 = document.getElementById('password1');
var password2 = document.getElementById('password2');
var show_Password = document.getElementById('showPassword');
var street1 = document.getElementById('street1');
var pin1 = document.getElementById('pin1');
var state1 = document.getElementById('state1');
var city1 = document.getElementById('city1');
var street2 = document.getElementById('street2');
var pin2 = document.getElementById('pin2');
var state2 = document.getElementById('state2');
var city2 = document.getElementById('city2');
var understand = document.getElementById('understand');
var temporary_address = document.getElementById('temporary_address');
var btn_submit = document.getElementById('btnSubmit');
var allInputOk = new Array();
function valueStore() {
    var valueObj = {
        fs_name: fs_name.value,
        ls_name: ls_name.value,
        mobile_number: mobile_number.value,
        email: email.value,
        age: age.value,
        qualification: qualification.value,
        password1: password1.value,
        password2: password2.value,
        street1: street1.value,
        pin1: pin1.value,
        state1: state1.value,
        city1: city1.value,
        street2: street2.value,
        pin2: pin2.value,
        state2: state2.value,
        city2: city2.value
    };
    dataBase(valueObj);
}
function dataBase(valueObj) {
    var url = "https://winter-summer-sceptre.glitch.me/submit";
    var parameter = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(valueObj)
    };
    fetch(url, parameter).then(function (response) { return response.json(); }).then(function (data) {
        console.log(data);
    });
}
btn_submit.addEventListener('click', successMessage);
function successMessage(e) {
    if (understand.checked) {
        // length of all input field 
        var count = 0;
        for (var i = 0; i < allInputOk.length; i++) {
            if (allInputOk[i]) {
                count++;
            }
        }
        if (count == allInputOk.length) {
            valueStore();
            resetForm.reset();
            allInputOk.push(false);
            success_message.innerText = "Successfully Registered";
            setTimeout(function () {
                success_message.innerText = "";
            }, 3000);
            removeIsValidClass();
        }
        else {
            success_message.innerText = "Reload your website";
            setTimeout(function () {
                success_message.innerText = "";
            }, 3000);
        }
    }
    e.preventDefault();
}
function removeIsValidClass() {
    fs_name.classList.remove('is-valid');
    ls_name.classList.remove('is-valid');
    mobile_number.classList.remove('is-valid');
    email.classList.remove('is-valid');
    age.classList.remove('is-valid');
    qualification.classList.remove('is-valid');
    password1.classList.remove('is-valid');
    password2.classList.remove('is-valid');
    street1.classList.remove('is-valid');
    street2.classList.remove('is-valid');
    pin1.classList.remove('is-valid');
    pin2.classList.remove('is-valid');
}
fs_name.addEventListener('blur', validateName1);
ls_name.addEventListener('blur', validateName2);
mobile_number.addEventListener('blur', validateMobileNumber);
email.addEventListener('blur', validateEmail);
age.addEventListener('blur', validateAge);
qualification.addEventListener('blur', validateQualification);
password1.addEventListener('blur', validatePassword1);
password2.addEventListener('blur', validatePassword2);
show_Password.addEventListener('click', showPassword);
street1.addEventListener('blur', validateStreet1);
pin1.addEventListener('blur', validatePin1);
street2.addEventListener('change', validateStreet2);
// when user change the select option then call method 
pin2.addEventListener('change', validatePin2);
temporary_address.addEventListener('click', temporaryAddress);
// temporary_address autofill
function temporaryAddress() {
    if (street1.value != "" && temporary_address.checked) {
        street2.value = street1.value;
        validateStreet2();
    }
    if (pin1.value != "" && temporary_address.checked) {
        pin2.value = pin1.value;
        validatePin2();
    }
    if (temporary_address.checked) {
        var option_selected_value = state1.value;
        for (var i = 1; i < state2.children.length; i++) {
            if (option_selected_value == state2.children[i].value) {
                state2.children[i].selected = true;
            }
        }
    }
    if (temporary_address.checked) {
        var option_selected_value = city1.value;
        for (var i = 1; i < city2.children.length; i++) {
            if (option_selected_value == city2.children[i].value) {
                city2.children[i].selected = true;
            }
        }
    }
}
// Below is validation
function validateName1() {
    var regx = /^[a-zA-Z]([a-zA-Z]){2,10}$/;
    var str = fs_name.value;
    if (regx.test(str)) {
        fs_name.classList.add('is-valid');
        fs_name.classList.remove('is-invalid');
        allInputOk[0] = true;
    }
    else {
        fs_name.classList.add('is-invalid');
        fs_name.classList.remove('is-valid');
        allInputOk[0] = false;
    }
}
function validateName2() {
    var regx = /^[a-zA-Z]([a-zA-Z]){0,10}$/;
    var str = ls_name.value;
    if (regx.test(str)) {
        ls_name.classList.add('is-valid');
        ls_name.classList.remove('is-invalid');
        allInputOk[1] = true;
    }
    else {
        ls_name.classList.add('is-invalid');
        ls_name.classList.remove('is-valid');
        allInputOk[1] = false;
    }
}
function validateMobileNumber() {
    var regx = /^[0-9]{10}$/;
    var str = mobile_number.value;
    if (regx.test(str)) {
        mobile_number.classList.add('is-valid');
        mobile_number.classList.remove('is-invalid');
        allInputOk[2] = true;
    }
    else {
        mobile_number.classList.add('is-invalid');
        mobile_number.classList.remove('is-valid');
        allInputOk[2] = false;
    }
}
function validateEmail() {
    var regx = /^[a-zA-Z]+([a-zA-Z_\.\-0-9@])+\.([a-zA-z]){2,5}$/;
    var str = email.value;
    if (regx.test(str)) {
        email.classList.add('is-valid');
        email.classList.remove('is-invalid');
        allInputOk[3] = true;
    }
    else {
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
        allInputOk[3] = false;
    }
}
function validateAge() {
    if (parseInt(age.value) <= 130 && parseInt(age.value) > 0) {
        age.classList.add('is-valid');
        age.classList.remove('is-invalid');
        allInputOk[4] = true;
    }
    else {
        age.classList.add('is-invalid');
        age.classList.remove('is-valid');
        allInputOk[4] = false;
    }
}
function validateQualification() {
    var regx = /^[a-zA-Z]([a-zA-Z\.()]){1,10}$/;
    var str = qualification.value;
    if (regx.test(str)) {
        qualification.classList.add('is-valid');
        qualification.classList.remove('is-invalid');
        allInputOk[5] = true;
    }
    else {
        qualification.classList.add('is-invalid');
        qualification.classList.remove('is-valid');
        allInputOk[5] = false;
    }
}
function validatePassword1() {
    var regx = /^[a-zA-Z0-9]([a-zA-Z_@#$&0-9\.]){7,16}$/;
    var str = password1.value;
    if (regx.test(str)) {
        password1.classList.add('is-valid');
        password1.classList.remove('is-invalid');
        allInputOk[6] = true;
    }
    else {
        password1.classList.add('is-invalid');
        password1.classList.remove('is-valid');
        allInputOk[6] = false;
    }
}
function validatePassword2() {
    if (password1.value == password2.value && password1.value.length > 7) {
        password2.classList.add('is-valid');
        password2.classList.remove('is-invalid');
        allInputOk[7] = true;
    }
    else {
        password2.classList.add('is-invalid');
        password2.classList.remove('is-valid');
        allInputOk[7] = false;
    }
}
function showPassword() {
    if (password1.type === 'password' || password2.type === 'password') {
        password1.type = 'text';
        password2.type = 'text';
    }
    else {
        password1.type = 'password';
        password2.type = 'password';
    }
}
function validateStreet1() {
    if (street1.value != "") {
        street1.classList.add('is-valid');
        street1.classList.remove('is-invalid');
        allInputOk[8] = true;
    }
    else {
        street1.classList.remove('is-valid');
        street1.classList.add('is-invalid');
        allInputOk[8] = false;
    }
}
function validateStreet2() {
    if (street2.value != "") {
        street2.classList.add('is-valid');
        street2.classList.remove('is-invalid');
        allInputOk[9] = true;
    }
    else {
        street2.classList.remove('is-valid');
        street2.classList.add('is-invalid');
        allInputOk[9] = false;
    }
}
function validatePin1() {
    var regx = /^[0-9]([0-9]){5}$/;
    var str = pin1.value;
    if (regx.test(str)) {
        pin1.classList.add('is-valid');
        pin1.classList.remove('is-invalid');
        allInputOk[10] = true;
    }
    else {
        pin1.classList.add('is-invalid');
        pin1.classList.remove('is-valid');
        allInputOk[10] = false;
    }
}
function validatePin2() {
    var regx = /^[0-9]([0-9]){5}$/;
    var str = pin2.value;
    if (regx.test(str)) {
        pin2.classList.add('is-valid');
        pin2.classList.remove('is-invalid');
        allInputOk[11] = true;
    }
    else {
        pin2.classList.add('is-invalid');
        pin2.classList.remove('is-valid');
        allInputOk[11] = false;
    }
}
