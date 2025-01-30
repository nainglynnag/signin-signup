const form = document.querySelector("form"),
    container = document.querySelector(".container"),
    signupLink = document.querySelector(".signup"),
    loginLink = document.querySelector(".login"),
    signInBtn = document.getElementById('signInBtn'),
    signUpBtn = document.getElementById('signUpBtn');

signupLink.addEventListener("click", () => {
    container.classList.add("active");
});

loginLink.addEventListener("click", () => {
    container.classList.remove("active");
});


signInBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('lemail'),
        password = document.getElementById('lpassword'),
        mErrTxt = document.querySelector('.mail-err'),
        pErrTxt = document.querySelector('.pass-err');

    email.addEventListener("keyup", checkmail(email,mErrTxt));
    password.addEventListener("keyup", checkpass(password,pErrTxt));

    if(!email.classList.contains("invalid") && !password.classList.contains("invalid")){
        // console.log("Form Submitted");
        window.alert("Sign in successfully.")
    }

});

signUpBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const email = document.getElementById('remail'),
        password = document.getElementById('rpassword'),
        cPassword = document.getElementById('cpassword'),
        mErrTxt = document.querySelector('.rmail-err'),
        pErrTxt = document.querySelector('.rpass-err');

    const checkbox = document.querySelector('.termChecked');

    email.addEventListener("keyup", checkmail(email,mErrTxt));
    password.addEventListener("keyup", checkpass(password,pErrTxt));
    cPassword.addEventListener("keyup", confirmPass(password, cPassword));

    if(!checkbox.checked){
        checkbox.classList.add('uncheck');
        setTimeout(()=>{
            checkbox.classList.remove('uncheck');
        }, 2000);
    }

    if(email.classList.contains("invalid") && password.classList.contains("invalid")){
        container.style.height = "650px";
        setTimeout(()=>{     
            container.style.removeProperty('height');  
        }, 2000);
    }

    if(!email.classList.contains("invalid") && !password.classList.contains("invalid") && !cPassword.classList.contains("invalid") && checkbox.checked){
        // console.log("Form Submitted");
        window.alert("Sign up successfully.")
    }

});


function checkmail(email,mErrTxt){
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.value.match(pattern)){
        email.classList.add("shake", "invalid");

        mErrTxt.textContent = "Enter a valid email address";
        // console.log(email.value);
        setTimeout(()=>{
            email.classList.remove("shake");
            mErrTxt.textContent = "";
        }, 2000);
    }else{
        email.classList.remove("shake", "invalid");
        email.classList.add("valid");
    }
};

function checkpass(password,pErrTxt){
    if(password.value == "" || password.value.length <= 8){
        password.classList.add("shake", "invalid");

        pErrTxt.textContent = "Password length must be greater than 8";
        // console.log(password.value.length);
        setTimeout(()=>{
            password.classList.remove("shake");
            pErrTxt.textContent = "";
        }, 2000);
    }else{
        password.classList.remove("shake", "invalid");
        password.classList.add("valid");
    }
};

function confirmPass(password,cPassword){
    if(password.value != cPassword.value){
        cPassword.classList.add("shake", "invalid");
        const cPassErrTxt = document.querySelector('.cpass-err')
        cPassErrTxt.textContent = "Password does not match";
        // console.log(cPassword.value);
        setTimeout(()=>{
            cPassword.classList.remove("shake", "invalid");
            cPassErrTxt.textContent = "";
        }, 2000);
    }
}