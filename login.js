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
let google = document.getElementById("googleLogin")
let email = document.getElementById("email")
let password = document.getElementById("password")
let signin = document.getElementById("Sign-in")
let signUpBtn = document.getElementById("sign-up")
let errorMsg = document.getElementById("text-valid")
let forgotPw = document.getElementById("forgotPw")
function signup() {
    event.preventDefault();
    location.replace("https://letantruong197.github.io/du-an-cuoi-khoa-WI/register.html");
}
signUpBtn.addEventListener("click", signup)
function login() {
    if (email.value == "" || password == "") {
        errorMsg.style.color = "red"
        errorMsg.innerHTML = "Please type in your email or password"
    } else {
        event.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email.value, password.value)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
                console.log(`current user uid: ${user.uid}`)
                localStorage.setItem("uid", user.uid)
                errorMsg.style.color = "green"
                errorMsg.innerHTML = "Success"
                setTimeout(location.replace("https://letantruong197.github.io/du-an-cuoi-khoa-WI/"), 5000)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage, email)
                errorMsg.style.color = "red"
                errorMsg.innerHTML = errorCode
            });

    }
}
function getPwBack() {
    event.preventDefault()
    if (!email.value) {
        errorMsg.style.color = "red"
        errorMsg.innerHTML = "Please type in your email"
    } else {
        firebase.auth().sendPasswordResetEmail(email.value)
            .then(() => {
                // Password reset email sent!
                // ..
                errorMsg.style.color = "green"
                errorMsg.innerHTML = "Password reset email sent"
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
                errorMsg.style.color = "red"
                errorMsg.innerHTML = errorCode
            });

    }
}
signin.addEventListener("click", login)
google.addEventListener("click", googleLogin)
forgotPw.addEventListener("click", getPwBack)