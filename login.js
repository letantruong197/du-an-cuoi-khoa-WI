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
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
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
            setTimeout(location.replace("https://letantruong197.github.io/du-an-cuoi-khoa-WI/classSelect.html"), 5000)
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
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
function writeUserData(emailValue,user) {
        firebase.database().ref('users/' + user.uid).set({
            email: emailValue,
        });
    }
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
                //
                writeUserData(user.email,user)
                setTimeout(location.replace("https://letantruong197.github.io/du-an-cuoi-khoa-WI/classSelect.html"), 5000)
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
signin.addEventListener("click",writeUserData)
google.addEventListener("click", googleLogin)
forgotPw.addEventListener("click", getPwBack)
  