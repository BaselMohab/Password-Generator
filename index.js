const buttonEl = document.getElementById("button");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy")
const alertEl = document.getElementById("alert")
const alertRedEl = document.getElementById("alertRed")


function generatePassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passwordLen = 14;
    let password="";
    for (let i=0 ;i<passwordLen;i++) {
       const randomNum = Math.floor(Math.random() * chars.length) 
       password += chars.substring(randomNum, randomNum + 1)

    }
    inputEl.value = password;
}


function copyPassword() {
    inputEl.select();
    // for mobile
    inputEl.setSelectionRange(0, 9999); 
    navigator.clipboard.writeText(inputEl.value);
    if (inputEl.value) {
        alertEl.innerText = "Password Copied";
       
    } else {
        alertRedEl.innerText = "Please Generate Password";
    }
    
}


copyIconEl.addEventListener("click", copyPassword)
buttonEl.addEventListener("click", generatePassword)


