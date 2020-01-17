function validateRegistration()
{
    var rexEmail=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var city= document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var condition = document.getElementById("term&condi").checked;

    if(name == "")
    {
        alert("Please Enter Name");
        return false;
    }
    else if(!rexEmail.test(email))
    {
        alert("Please Enter Valid Email...");
        return false;   
    }
    else if(password == "")
    {
        alert("Please Enter Password");
        return false;
    }
    else if (password != confirmPassword)
    {
        alert("Password and Confirm Password does not mathch");
        return false;
    }
    else if(city == "Select City")
    {
        alert("Please Select City");
        return false;
    }
    else if(state == "Select State")
    {
        alert("Please Select State");
        return false;
    }
    else if(condition == false)
    {
        alert("Please Check Term and Condition");
        return false;
    }

    else
    {
        location.replace("login.html");
        var admin =
        {
            AdminEmail : email,
            AdminPassword: password
        }
        localStorage.setItem("AdminDeatail",JSON.stringify(admin));
        //document.getElementById("register")
    }
}