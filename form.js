function validateForm() {
    var firstname = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    document.getElementById("nameError").innerHTML = "";
 
    document.getElementById("emailError").innerHTML = "";

    if (name.trim() === "") {
        document.getElementById("nameError").innerHTML = "First name can't be blank";
        valid = false;
    } else if (!/^[a-zA-Z]+$/.test(firstname)) {
        document.getElementById("nameError").innerHTML = "First name must contain only alphabets";
        valid = false;
    }
    if (email.trim() === "") {
        document.getElementById("emailError").innerHTML = "Email can't be blank";
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById("emailError").innerHTML = "Invalid email format";
        valid = false;
    }

}