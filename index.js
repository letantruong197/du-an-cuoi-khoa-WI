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
// let currentUser = localStorage.getItem("uid")
// if (!currentUser){
//     location.replace("https://letantruong197.github.io/du-an-cuoi-khoa-WI/login.html")
// }
let logoutBtn = document.getElementById("logout")
function logout(){
    event.preventDefault()
    localStorage.removeItem("uid")
    // setTimeout(location.replace("https://letantruong197.github.io/du-an-cuoi-khoa-WI/login.html"),3000)
}
let edit = document.getElementById("editBtn")
let addAGS = `       
<div class="ds-border-stt">
<div class="ds-border_stt_contain">
    <h4>Average Score</h4>
</div>
<div class="ds-border_stt_contain">
    <h4>9</h4>
</div>
<div class="ds-border_stt_contain">
    <h4>8</h4>
</div>
<div class="ds-border_stt_contain">
    <h4>7</h4>
</div>
</div>
</div>
`
let list = document.getElementById("ds-border")
function writeUserData(email,user) {
    event.preventDefault()
    firebase.database().ref('users/' + 'class/' + 'A2/' ).set({
        math: [1,2,3,4],
        english: [3,4,5,6]
    });
}
edit.addEventListener("click",writeUserData)
