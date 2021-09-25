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
let currentUser = localStorage.getItem("uid")
 if (!currentUser){
     location.replace("https://letantruong197.github.io/du-an-cuoi-khoa-WI/login.html")
 }
let logoutBtn = document.getElementById("logout")
function logout(){
    event.preventDefault()
    localStorage.removeItem("uid")
    setTimeout(location.replace("https://letantruong197.github.io/du-an-cuoi-khoa-WI/login.html"),3000)
}
let edit = document.getElementById("editBtn")
let list = document.getElementById("ds-border")
let changeClass = document.getElementById("changeClass")

function redirectToClassSelect (){
    location.replace("https://letantruong197.github.io/du-an-cuoi-khoa-WI/classSelect.html")
}
let localCurrentClass = localStorage.getItem("currentClass")
function checkCurrentClass(){
    let classContainer = document.getElementById("container-fluid")
    classContainer.innerHTML = `  <div class="container_box">
    <div class="container_box_content">
        <a>
            <h3 id="classname">${localCurrentClass}</h3>
        </a>
    </div>
</div>`
}
function updateClass(){
    event.preventDefault()
    location.replace("https://letantruong197.github.io/du-an-cuoi-khoa-WI/UpdateClass.html")
}
checkCurrentClass();
edit.addEventListener("click",updateClass)



