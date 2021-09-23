const firebaseConfig = {
    apiKey: "AIzaSyCuOQh8wp2PR8oEpaUkUvVGk9l0gX4Y2WE",
    authDomain: "cuoi-khoa-wi02.firebaseapp.com",
    projectId: "cuoi-khoa-wi02",
    storageBucket: "cuoi-khoa-wi02.appspot.com",
    messagingSenderId: "783435565365",
    appId: "1:783435565365:web:f0624cdf7f9a531373e47c",
    measurementId: "G-BGTYEFDP5Y",
    databaseURL : "https://cuoi-khoa-wi02-default-rtdb.asia-southeast1.firebasedatabase.app"
};
firebase.initializeApp(firebaseConfig)
var database = firebase.database();
let email = document.getElementById("email")
let password = document.getElementById("password")
let rePassword = document.getElementById("re-password")
let errorMsg = document.getElementById("valid-text")
let signUp = document.getElementById("signUp")
let google = document.getElementById("googleLogin")
function signup() {
    if (email.value == "" || password.value == "" || rePassword.value == "") {
        errorMsg.style.color = "red"
        errorMsg.innerHTML = "Please type in your password and re-password"
    } if (password.value !== rePassword.value) {
        errorMsg.style.color = "red"
        errorMsg.innerHTML = "Please check your password and re-password"
    } else {
        firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                // ...
                errorMsg.style.color = "green"
                errorMsg.innerHTML = "Success"
                setTimeout(location.replace("https://letantruong197.github.io/du-an-cuoi-khoa-WI/login.html"), 5000)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                errorMsg.style.color = "red"
                errorMsg.innerHTML = errorCode
                console.log(errorCode, errorMessage)
            });
    }
}
var provider = new firebase.auth.GoogleAuthProvider();
function googleLogin() {
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            localStorage.setItem("uid", user.uid)
            errorMsg.style.color = "green"
            errorMsg.innerHTML = "Success"
            setTimeout(location.replace("https://letantruong197.github.io/du-an-cuoi-khoa-WI/"), 5000)
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log(errorCode, errorMessage, email)
            errorMsg.style.color = "red"
            errorMsg.innerHTML = errorCode
            // ...
        });
}
function redirectToSignIn() {
    location.replace("https://letantruong197.github.io/du-an-cuoi-khoa-WI/login.html")
}
signUp.addEventListener("click", signup)
google.addEventListener("click", googleLogin)