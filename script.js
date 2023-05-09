a= document.getElementsByTagName("input")
console.log(a)

var validRegix = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    let passw = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;


function validation(){

    a= document.querySelectorAll(".input")


    if(first_name.value != ""  && last_name.value !="" && email.value !="" && email.value.match(validRegix) && pass.value !="" && pass.value.match(passw) && phone_number.value != "" && terms.value == "agree" ){

        error.innerHTML= ""
        error1.innerHTML= ""
        number_error.innerHTML= ""
        email_error.innerHTML = ""

        a= document.querySelectorAll(".input")
       
        a.forEach(a=> {
            console.log(a.value)
        })
       
        alert("form submitted successfully")

       
        

        
    }
        
    else{
        let first_name= document.getElementById("first_name")
        let last_name = document.getElementById("last_name")

        let error= document.getElementById("error")

        if(first_name.value == ""){
            error.innerHTML= "Name cannot be empty" 
        
        }
        else{
            error.innerHTML= ""

            }

        if(last_name.value == ""){
            error1.innerHTML= "Name cannot be empty"

        }
        else{
            error1.innerHTML= ""

        }

        number = document.getElementById("phone_number")
        number_error = document.getElementById("number_error")

        if(number.value.length<10){
            number_error.innerHTML = "Please enter a valid phone number"

        }
        else{
            number_error.innerHTML= ""
        }

        email= document.getElementById("email")
        email_error = document.getElementById("email_error")


        var validRegix = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(email.value.match(validRegix)){
            email_error.innerHTML = ""

            return true;

        }

        else{
            email_error.innerHTML= "Please enter a valid email address"
    
           }

        let passw = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;

        if(pass.value.length < 8){
            pass_error.innerHTML = "Password must be of atleast 8 characters"
        }
        else{
            pass_error.innerHTML =""

        }



        if(pass.value.match(passw)){
            pass_error.innerHTML=""
        
        }
        else{
            pass_error.innerHTML += " Password must contains one uppercase character and atleast one numeric value" 
        
        }

    }
}



function validEmail(){
    const emailRegix = "/[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/"
    const valid= email.match(emailRegix)
    return valid;
}

function checkbox(){
    terms.value = "agree"
}

