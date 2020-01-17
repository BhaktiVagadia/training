 var userArray = new Array();
userArray = JSON.parse(localStorage.getItem("LoginDetails"));
var nrow=1;
userArray.forEach(obj => {
    var table = document.getElementById("userSession");
    var row = table.insertRow(nrow);
   
    var temp = [obj.name,obj.loginTime]
    for (var i = 0; i < 2; i++) {
        row.insertCell(i).innerHTML = temp[i];
    }
    nrow++;
})