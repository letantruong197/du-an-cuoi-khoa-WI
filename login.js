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
let signin = document.getElementById("Sign-in")
let signUpBtn = document.getElementById("sign-up")
function signup (){
    location.replace("register.html");
    location.reload()
}
signUpBtn.addEventListener("click",signup)
function login() {
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            console.log(`current user uid: ${user.uid}`)
            localStorage.setItem("uid",user.uid)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage,email)
        });

}
signin.addEventListener("click", login)

