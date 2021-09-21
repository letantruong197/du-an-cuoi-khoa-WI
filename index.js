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
var database = firebase.database();
// let currentUser = localStorage.getItem("uid")
// if (!currentUser){
//     location.replace("https://letantruong197.github.io/du-an-cuoi-khoa-WI/login.html")
// }
let logoutBtn = document.getElementById("logout")
function logout(){
    event.preventDefault()
    localStorage.removeItem("uid")
    setTimeout(location.replace("https://letantruong197.github.io/du-an-cuoi-khoa-WI/login.html"),3000)
}