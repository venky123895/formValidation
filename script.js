const firstname=document.getElementById('firstName');
const lastname=document.getElementById('lastName');
const password=document.getElementById('password');
const button=document.getElementById('but');
const phone=document.getElementById('phoneNumber');
const biodata=document.getElementById('bio');
button.addEventListener('click',function(){
    if(firstname.value.length <= 3 || firstname.value.length >=16){
        alert('Enter the first name in between 3 and 16'); 
        return;
    }
    if(lastname.value.length <= 3 || lastname.value.length >=16){
        alert('Enter the Last name in between 3 and 16'); 
        return;
    }
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(! password.value.match(passw)){
        alert('Enter password in between 6 and 20 and 1 UpperCase Letter One Lower Case Letter and spetial Character');
        return;
    }
    if(phone.value.length !== 10){
        alert('Enter mobile Number in 10 digits');
        return;
    }
    let bioValue=biodata.value;
    for(let i=0;i<bioValue.length;i++){
        if(bioValue.charCodeAt(i) >= 97 && bioValue.charCodeAt(i) <= 122){
           if(bioValue.length <= 8 || bioValue.length >=50){
            alert('Enter text in between 8 and 50 characters');
            return;
           }
        }
        else{
            alert('Enter text in Lower Case only');
            return;
        }
    }
})