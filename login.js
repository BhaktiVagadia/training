function validateLogin()
{
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;


    if (email == "")
    {
        alert("please enter email");
        return false;
    }
    else if(password == "")
    {
        alert("please Enter Password");
        return false;
    }
    else
    {
       var userArray = new Array();
       var loginUserArray = new Array();
       userArray = JSON.parse(localStorage.getItem("userInformation"));
     loginUserArray = JSON.parse(localStorage.getItem("LoginDetails"));
        var flag =0;
       userArray.forEach(obj => {
           if(obj.userEmail == email && obj.userPassword == password)
           {
                flag=1;
                var time = new Date();
                localStorage.setItem("LoginName",obj.userName);
                var loginUser={
                    name : obj.userName,
                    loginTime : time 
                }
                
                loginUserArray.push(loginUser);
                localStorage.setItem("LoginDetails", JSON.stringify(loginUserArray));
                localStorage.setItem("LoginTime",time);
                location.replace('dashbord.html');
           }
       })
       if(flag == 0)
       {
           alert("Enter Correct email & password")
       }

        
        
    }
}
