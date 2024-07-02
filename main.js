const name = document.querySelector("#name")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const confirm = document.querySelector("#confirm")
const button = document.querySelector("#button")
const eror = document.querySelector("#error")
const passwordError = document.querySelector("#passwordError")
const confirmPassword = document.querySelector("#confirmPassword")
const eye = document.querySelector("#eye")

console.log(name)
console.log(email)
console.log(email)


button.addEventListener("click", function(e){
    e.preventDefault()
    checkEmpty()
    
})


function checkEmpty(){
    if(name.value == "" && email.value == "" &&
         password.value == "" && confirm.value == ""){
            eror.innerHTML = "form ka soo buuxi fadlan "
            eror.style.color = "red"
            name.style.border = "2px solid red"
            email.style.border = "2px solid red"
            password.style.border = "2px solid red"
            confirm.style.border = "2px solid red"
         }
         else{
            eror.innerHTML = ""
            eror.style.color = ""
            name.style.border = ""
            email.style.border = ""
            password.style.border =""
            confirm.style.border =""

         }
        

        if(password.value.length < 6){
            passwordError.innerHTML = "password must be at lest 6"
        }
        else{
             passwordError.innerHTML = "strong"
            passwordError.style.color= "green"
           
        }
        if(confirm.value != password.value){
            confirmPassword.innerHTML = "password are not same"
        }
        else {
            confirmPassword.innerHTML = "passwords matched"
            confirmPassword.style.color = "green"
    
        }
        eye.style.marginTop = "24px"
        
        

    }

    eye.addEventListener("click", function(){
         if(password.type == "password"){
            password.type = "text"
         }
         else {
            password.type = "password"
         }
    })