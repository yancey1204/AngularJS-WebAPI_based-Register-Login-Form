function validateEmail() {
    var Email = $("#userEmail").val();
    if (Email == "") $("#ErrorMessage").html("User email can't be blank");
    else  $("#ErrorMessage").html("");
}
function validatePasswordMatch() {
    var password = $("#PW1").val();
    var confirmPassword = $("#PW2").val();
    if (password != confirmPassword)
        $("#ErrorMessage").html("Passwords do not match!");
    else $("#ErrorMessage").html("");
}
function validatePassword() {
    var Email = $("#userEmail").val();
    var password = $("#PW1").val();
    var re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,}$/;
    // user Email can't be blank
    if (password == "") $("#ErrorMessage").html("password can't be blank");
    // check the length of password
    else if (password.length < 6) $("#ErrorMessage").html("Password must contain at least six characters!");
    // check if userEmail is equal to password
    else if (Email == password) $("#ErrorMessage").html("Password must be different from Username!");
    // check password
    else if (!password.match(re)) $("#ErrorMessage").html("password must contain only letters, numbers and underscores!!");
    else $("#ErrorMessage").html("");

}
$(document).ready(function () {

    $("#userEmail").keyup(validateEmail);
    $("#PW1").keyup(validatePassword);
    $("#PW2").keyup(validatePasswordMatch);
    $("#RegisterBT").click(function (e) {
        e.preventDefault();
        $("#registerForm").fadeIn();
        $("#loginForm").hide();
    });
    $("#LoginBT").click(function (e) {
        e.preventDefault();
        $("#loginForm").fadeIn();
        $("#registerForm").hide();
    });
});