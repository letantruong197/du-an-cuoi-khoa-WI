const firebaseConfig = {
    apiKey: "AIzaSyCuOQh8wp2PR8oEpaUkUvVGk9l0gX4Y2WE",
    authDomain: "cuoi-khoa-wi02.firebaseapp.com",
    projectId: "cuoi-khoa-wi02",
    storageBucket: "cuoi-khoa-wi02.appspot.com",
    messagingSenderId: "783435565365",
    appId: "1:783435565365:web:f0624cdf7f9a531373e47c",
    measurementId: "G-BGTYEFDP5Y"
};
firebase.initializeApp(firebaseConfig)
let email = document.getElementById("email")
let password = document.getElementById("password")
let rePassword = document.getElementById("re-password")
let errorMsg = document.getElementById("valid-text")
let signUp = document.getElementById("signUp")
function signup() {
    if (password.value == rePassword.value) {
      
        firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                // ...
                errorMsg.style.color = "green"
                errorMsg.innerHTML = "Success"
                setTimeout(location.replace("https://letantruong197.github.io/du-an-cuoi-khoa-WI"),5000)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                errorMsg.style.color = "red"
                errorMsg.innerHTML = errorCode
                console.log(errorCode, errorMessage)
            });
    } else {
        errorMsg.style.color = "red"
        errorMsg.innerHTML = "Please check your password and re-password"
    }
}
signUp.addEventListener("click", signup)