console.log("This is typescript");

const success_message=document.getElementById('success_message')as HTMLInputElement ;
const resetForm=document.getElementById('resetForm')as HTMLFormElement ;
const fs_name=document.getElementById('fsname')as HTMLInputElement ;
const ls_name=document.getElementById('lsname')as HTMLInputElement ;
const mobile_number=document.getElementById('mobileno')as HTMLInputElement ;
const email=document.getElementById('email')as HTMLInputElement ;
const age=document.getElementById('age')as HTMLInputElement ;
const qualification=document.getElementById('qualification')as HTMLInputElement ;
const password1=document.getElementById('password1')as HTMLInputElement ;
const password2=document.getElementById('password2')as HTMLInputElement ;
const show_Password=document.getElementById('showPassword')as HTMLInputElement ;
const street1=document.getElementById('street1')as HTMLInputElement ;
const pin1=document.getElementById('pin1')as HTMLInputElement ;
const state1=document.getElementById('state1')as HTMLSelectElement ;
const city1=document.getElementById('city1')as HTMLSelectElement ;

const street2=document.getElementById('street2')as HTMLInputElement ;
const pin2=document.getElementById('pin2')as HTMLInputElement ;
const state2=document.getElementById('state2')as HTMLSelectElement;
const city2=document.getElementById('city2')as HTMLSelectElement ;
const understand=document.getElementById('understand')as HTMLInputElement ;
const temporary_address=document.getElementById('temporary_address')as HTMLInputElement;
const btn_submit=document.getElementById('btnSubmit')!;

let allInputOk:boolean[]=new Array();

interface valueObjUsers{
    fs_name:string,
    ls_name:string,
    mobile_number:string,
    email:string,
    age:string,
    qualification:string,
    password1:string,
    password2:string,
    street1:string,
    pin1:string,
    state1:string,
    city1:string,
    street2:string,
    pin2:string,
    state2:string,
    city2:string
}
function valueStore(){
    let valueObj:valueObjUsers={
        
        fs_name:fs_name.value,
        ls_name:ls_name.value,
        mobile_number:mobile_number.value,
        email:email.value,
        age:age.value,
        qualification:qualification.value,
        password1:password1.value,
        password2:password2.value,
        street1:street1.value,
        pin1:pin1.value,
        state1:state1.value,
        city1:city1.value,
        street2:street2.value,
        pin2:pin2.value,
        state2:state2.value,
        city2:city2.value
    }
    dataBase(valueObj);
}
function dataBase(valueObj:valueObjUsers){
    let url="https://winter-summer-sceptre.glitch.me/submit";
    let parameter={
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(valueObj)
    };
    fetch(url,parameter).then(response=>response.json()).then(data=>{
        console.log(data);
    });
}
btn_submit.addEventListener('click',successMessage);
function successMessage(e:any){
    if(understand.checked){
        // length of all input field 
        let count=0;
        for(let i=0;i<allInputOk.length;i++){
            if(allInputOk[i]){
                count++;
            }
        }
        if(count==allInputOk.length){
            valueStore();
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
// when user change the select option then call method 
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
            if(option_selected_value==(state2.children[i]as HTMLSelectElement).value){
                (state2.children[i]as HTMLOptionElement).selected=true;
            }
        }
    }
    if(temporary_address.checked){
        let option_selected_value=city1.value;
        for(let i=1;i<city2.children.length;i++){
            if(option_selected_value==(city2.children[i]as HTMLSelectElement).value){
                (city2.children[i]as HTMLOptionElement).selected=true;
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
    if(parseInt(age.value)<= 130 && parseInt(age.value) > 0){
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