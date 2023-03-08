console.log("This is application form");

const success_message=document.getElementById('success_message');
const resetForm=document.getElementById('resetForm');
const fs_name=document.getElementById('fsname');
const ls_name=document.getElementById('lsname');
const mobile_number=document.getElementById('mobileno');
const email=document.getElementById('email');
const age=document.getElementById('age');
const qualification=document.getElementById('qualification');
const password1=document.getElementById('password1');
const password2=document.getElementById('password2');
const show_Password=document.getElementById('showPassword');
const street1=document.getElementById('street1');
const pin1=document.getElementById('pin1');
const state1=document.getElementById('state1');
const city1=document.getElementById('city1');

const street2=document.getElementById('street2');
const pin2=document.getElementById('pin2');
const state2=document.getElementById('state2');
const city2=document.getElementById('city2');
const understand=document.getElementById('understand');
const temporary_address=document.getElementById('temporary_address');
const btn_submit=document.getElementById('btnSubmit');
let allInputOk=new Array();

btn_submit.addEventListener('click',successMessage);
function successMessage(e){
    if(understand.checked){
        // length of all input field 
        let count=0;
        for(let i=0;i<allInputOk.length;i++){
            if(allInputOk[i]){
                count++;
            }
        }
        if(count==allInputOk.length){
            resetForm.reset();
            allInputOk.push(false);
            success_message.innerText="Successfully Registered";
            setTimeout(() => {
                success_message.innerText="";
            }, 3000);
            removeIsValidClass();
        }
        else{
            success_message.innerText="Reload your website";
            setTimeout(() => {
                success_message.innerText="";
            }, 3000);
        }
    }
    e.preventDefault();
    
}
function removeIsValidClass(){
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

fs_name.addEventListener('blur',validateName1);
ls_name.addEventListener('blur',validateName2);
mobile_number.addEventListener('blur',validateMobileNumber);
email.addEventListener('blur',validateEmail);
age.addEventListener('blur',validateAge);
qualification.addEventListener('blur',validateQualification);
password1.addEventListener('blur',validatePassword1);
password2.addEventListener('blur',validatePassword2);
show_Password.addEventListener('click',showPassword);
street1.addEventListener('blur',validateStreet1);
pin1.addEventListener('blur',validatePin1);
street2.addEventListener('change',validateStreet2);
pin2.addEventListener('change',validatePin2);
temporary_address.addEventListener('click',temporaryAddress);

// temporary_address autofill
function temporaryAddress(){
    if(street1.value!=""&&temporary_address.checked){
        street2.value=street1.value;
        validateStreet2();
    }
    if(pin1.value!=""&&temporary_address.checked){
        pin2.value=pin1.value;
        validatePin2();
    }
    if(temporary_address.checked){
        let option_selected_value=state1.value;
        for(let i=1;i<state2.children.length;i++){
            if(option_selected_value==state2.children[i].value){
                state2.children[i].selected=true;
            }
        }
    }
    if(temporary_address.checked){
        let option_selected_value=city1.value;
        for(let i=1;i<city2.children.length;i++){
            if(option_selected_value==city2.children[i].value){
                city2.children[i].selected=true;
            }
        }
    }
}

// Below is validation

function validateName1(){
    let regx=/^[a-zA-Z]([a-zA-Z]){2,10}$/;
    let str=fs_name.value;
    if(regx.test(str)){
        fs_name.classList.add('is-valid');
        fs_name.classList.remove('is-invalid');
        allInputOk[0]=true;
    }
    else{
        fs_name.classList.add('is-invalid');
        fs_name.classList.remove('is-valid');
        allInputOk[0]=false;
    }
}
function validateName2(){
    let regx=/^[a-zA-Z]([a-zA-Z]){0,10}$/;
    let str=ls_name.value;
    if(regx.test(str)){
        ls_name.classList.add('is-valid');
        ls_name.classList.remove('is-invalid');
        allInputOk[1]=true;
    }
    else{
        ls_name.classList.add('is-invalid');
        ls_name.classList.remove('is-valid');
        allInputOk[1]=false;
    }
}
function validateMobileNumber(){
    let regx=/^[0-9]{10}$/;
    let str=mobile_number.value;
    if(regx.test(str)){
        mobile_number.classList.add('is-valid');
        mobile_number.classList.remove('is-invalid');
        allInputOk[2]=true;
    }
    else{
        mobile_number.classList.add('is-invalid');
        mobile_number.classList.remove('is-valid');
        allInputOk[2]=false;
    }
}
function validateEmail(){
    let regx=/^[a-zA-Z]+([a-zA-Z_\.\-0-9@])+\.([a-zA-z]){2,5}$/;
    let str=email.value;
    if(regx.test(str)){
        email.classList.add('is-valid');
        email.classList.remove('is-invalid');
        allInputOk[3]=true;
    }
    else{
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
        allInputOk[3]=false;
    }
}
function validateAge(){
    if(age.value<=130&&age.value>0){
        age.classList.add('is-valid');
        age.classList.remove('is-invalid');
        allInputOk[4]=true;
    }
    else{
        age.classList.add('is-invalid');
        age.classList.remove('is-valid');
        allInputOk[4]=false;
    }
}
function validateQualification(){
    let regx=/^[a-zA-Z]([a-zA-Z\.()]){1,10}$/;
    let str=qualification.value;
    if(regx.test(str)){
        qualification.classList.add('is-valid');
        qualification.classList.remove('is-invalid');
        allInputOk[5]=true;
    }
    else{
        qualification.classList.add('is-invalid');
        qualification.classList.remove('is-valid');
        allInputOk[5]=false;
    }
}
function validatePassword1(){
    let regx=/^[a-zA-Z0-9]([a-zA-Z_@#$&0-9\.]){7,16}$/;
    let str=password1.value;
    if(regx.test(str)){
        password1.classList.add('is-valid');
        password1.classList.remove('is-invalid');
        allInputOk[6]=true;
    }
    else{
        password1.classList.add('is-invalid');
        password1.classList.remove('is-valid');
        allInputOk[6]=false;
    }
}
function validatePassword2(){
    if(password1.value==password2.value&&password1.value.length>7){
        password2.classList.add('is-valid');
        password2.classList.remove('is-invalid');
        allInputOk[7]=true;
    }
    else{
        password2.classList.add('is-invalid');
        password2.classList.remove('is-valid');
        allInputOk[7]=false;
    }
}
function showPassword(){
    if(password1.type==='password'||password2.type==='password'){
        password1.type='text';
        password2.type='text';
    }
    else{
        password1.type='password';
        password2.type='password';
    }
}
function validateStreet1(){
    if(street1.value!=""){
        street1.classList.add('is-valid');
        street1.classList.remove('is-invalid');
        allInputOk[8]=true;
    }
    else{
        street1.classList.remove('is-valid');
        street1.classList.add('is-invalid');
        allInputOk[8]=false;
    }
}
function validateStreet2(){
    if(street2.value!=""){
        street2.classList.add('is-valid');
        street2.classList.remove('is-invalid');
        allInputOk[9]=true;
    }
    else{
        street2.classList.remove('is-valid');
        street2.classList.add('is-invalid');
        allInputOk[9]=false;
    }
}
function validatePin1(){
    let regx=/^[0-9]([0-9]){5}$/;
    let str=pin1.value;
    if(regx.test(str)){
        pin1.classList.add('is-valid');
        pin1.classList.remove('is-invalid');
        allInputOk[10]=true;
    }
    else{
        pin1.classList.add('is-invalid');
        pin1.classList.remove('is-valid');
        allInputOk[10]=false;
    }
}
function validatePin2(){
    let regx=/^[0-9]([0-9]){5}$/;
    let str=pin2.value;
    if(regx.test(str)){
        pin2.classList.add('is-valid');
        pin2.classList.remove('is-invalid');
        allInputOk[11]=true;

    }
    else{
        pin2.classList.add('is-invalid');
        pin2.classList.remove('is-valid');
        allInputOk[11]=false;
    }
}