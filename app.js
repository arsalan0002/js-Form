var nAme = document.getElementById("name");
var fName = document.getElementById("fName");
var email = document.getElementById("email");
var pswrd = document.getElementById("pswrd");
var cntct = document.getElementById("number");
var cnic = document.getElementById("identity");


function getName() {
        
        console.log(nAme.value);
        console.log(fName.value);
        console.log(email.value);
        console.log(pswrd.value);
        console.log(cntct.value);
        console.log(cnic.value);

        nAme.value = ""
        fName.value = ""
        email.value = ""
        pswrd.value = ""
        cntct.value = ""
        cnic.value = ""
}