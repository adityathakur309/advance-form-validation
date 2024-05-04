let form = document.querySelector("form");
let name = document.getElementById("name")
let phone = document.getElementById("phone")
let email = document.getElementById("email");
let select = document.getElementById("course");
let password = document.getElementById("password")
// set error 
function setError(input, message) {
    let parent = input.parentElement;
    parent.className = "input error"
    let p = parent.querySelector("p");
    p.innerText = message;
}
// end 
// set succes 
function setSuccess(input) {
    let parent = input.parentElement;
    parent.className = "input success"
}
// end 
// more email validate 
let isEmail =(email) => {
    let atSymbol = email.indexOf("@");
    let dot = email.lastIndexOf(".");
    if(atSymbol === 0) return false;
    if(dot  === email.length - 1 || dot <= atSymbol + 3) return false;
    return true;
}
// end 
// send data 
let sendData = (count,inputAllLength) => {
    if(count===inputAllLength){
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "rajputru690@gmail.com",
            Password : "B69221FF322381530B2AC4421D15D0054900",
            To : 'rajputru690@gmail.com',
            From : "rajputru690@gmail.com",
            Subject : "This is concact form",
            Body : "Name: " +document.getElementById("name").value+
            "<br>Email address: " + document.getElementById("email").value+
            "<br>Phone number: " + document.getElementById("phone").value+
            "<br>selected course: " + document.getElementById("course").value
           

        }).then(
          message => {
            if(message === "OK"){
                Swal.fire({
                    title: "Good job!",
                    text: "Your form has been submitted",
                    icon: "success"
                  });
            }
            else{
                Swal.fire({
                    title: "somthing went wrong",
                    text: "Your form has not been submitted",
                    icon: "error"
                  });
            }
          }
        );
    }
    else{
        return false;
    }
}
// end 
// getready and success 
let getSuccess = () => {
    let inputAll = document.querySelectorAll(".input");
    let count = 0;
    for(let i = 0; i<inputAll.length; i++){
        if(inputAll[i].className = "input success"){
            count++;
        }
        sendData(count,inputAll.length -1);

    }
}
let isPassword = (password) => {
        // Check length
        if (password.length < 8) {
            return false;
        }
    
        // Check for lowercase letters
        if (!/[a-z]/.test(password)) {
            return false;
        }
    
        // Check for uppercase letters
        if (!/[A-Z]/.test(password)) {
            return false;
        }
    
        // Check for numbers
        if (!/\d/.test(password)) {
            return false;
        }
    
        // Check for special characters
        if (!/[^a-zA-Z0-9]/.test(password)) {
            return false;
        }
    
        // All criteria met
        return true;
    }
    
   
// end 
let validate = () => {
    let test = true;
    let nameValue = document.getElementById("name").value.trim();
    let phoneValue = document.getElementById("phone").value.trim();
    let emailValue = document.getElementById("email").value.trim();
    let selectValue = document.getElementById("course").value.trim();
    let passValue = document.getElementById("password").value.trim();
    // name validate
    if(nameValue === ""){
        setError(name,"please enter your name");
        test = false;
    }
    else if(nameValue.length < 3){
        setError(name,"name should be minimum 3 character")
        test = false;
    }
    else{
        setSuccess(name);
    }
    // end 
    // phone numbervalidte 
    if(phoneValue === ""){
        setError(phone,"please enter your mobile number")
        test =false;

    }
    else if(phoneValue.length < 10 || phoneValue.length > 10){
        setError(phone, "please enter a valid phone number")
        test =false
    }
    else{
        setSuccess(phone)
    }
    // end
 // email validte 
 if(emailValue === ""){
    setError(email,"please enter your email address")
    test =false;

}
else if(!isEmail(emailValue)){
    setError(email, "please enter a valid email address")
    test =false
}
else{
    setSuccess(email)
}
// end
// password validate 
if(passValue === ""){
    setError(password,"plese create a password");
    test = false;
}
else if(!isPassword(passValue)){
    setError(password,"please create a valid password with format")
    test = false;

}
else{
    setSuccess(password);
}
// end 
// select course validate 
if(selectValue === "select"){
    setError(select,"")
    test =false;
}
else{
    setSuccess(select);
}
// end 


    if (test) {
        getSuccess();
        return true;
    }
    else {
        false;
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validate();
})

