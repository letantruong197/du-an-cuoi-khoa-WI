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
function googleLogin(){
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
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
}
let google = document.getElementById("googleLogin")
let email = document.getElementById("email")
let password = document.getElementById("password")
let signin = document.getElementById("Sign-in")
let signUpBtn = document.getElementById("sign-up")
let errorMsg = document.getElementById("text-valid")
function signup (){
    location.replace("register.html");
    location.reload()
}
signUpBtn.addEventListener("click",signup)
function login() {
    // event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            console.log(`current user uid: ${user.uid}`)
            localStorage.setItem("uid",user.uid)
            errorMsg.style.color = "green"
            errorMsg.innerHTML = "Success"
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage,email)
            errorMsg.style.color = "red"
            errorMsg.innerHTML = errorCode
        });

}
signin.addEventListener("click", login)
google.addEventListener("click",googleLogin)
