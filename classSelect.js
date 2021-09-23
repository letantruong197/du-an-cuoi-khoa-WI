const firebaseConfig = {
    apiKey: "AIzaSyCuOQh8wp2PR8oEpaUkUvVGk9l0gX4Y2WE",
    authDomain: "cuoi-khoa-wi02.firebaseapp.com",
    projectId: "cuoi-khoa-wi02",
    storageBucket: "cuoi-khoa-wi02.appspot.com",
    messagingSenderId: "783435565365",
    appId: "1:783435565365:web:f0624cdf7f9a531373e47c",
    measurementId: "G-BGTYEFDP5Y",
    databaseURL: "https://cuoi-khoa-wi02-default-rtdb.asia-southeast1.firebasedatabase.app"
};
firebase.initializeApp(firebaseConfig)
var database = firebase.database();
let currentUser = localStorage.getItem("uid")
// if (!currentUser){
//     location.replace("https://letantruong197.github.io/du-an-cuoi-khoa-WI/login.html")
// }
let logoutBtn = document.getElementById("logout")
function logout() {
    event.preventDefault()
    localStorage.removeItem("uid")
    // setTimeout(location.replace("https://letantruong197.github.io/du-an-cuoi-khoa-WI/login.html"),3000)
}
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
let edit = document.getElementById("editBtn")
let list = document.getElementById("ds-border")
let container = document.getElementById("container-classes")
const dbRef = firebase.database().ref();
let listClassContent = []
function classLoad(){
dbRef.child("users").child(currentUser).child('class').get().then((snapshot) => {
    if (snapshot.exists()) {
        console.log(snapshot.val());
    } else {
        console.log("No data available");
    }
    let snapshotValue = snapshot.val();
    listClassContent.push(JSON.stringify(snapshotValue.classname))
    localStorage.setItem("listClass", listClassContent)
    let numberOfClass = JSON.parse(localStorage.getItem("listClass"))
    for (let i = 0; i < numberOfClass.length; i++) {
        let classDiv = document.createElement("div")
        let classContainer = document.createElement("div")
        classContainer.className = "container_box"
        classDiv.className = "container_box_content"
        let className = document.createElement("h3")
        let classNameValue = document.createTextNode(numberOfClass[i])
        className.appendChild(classNameValue)
        classDiv.appendChild(className)
        classContainer.appendChild(classDiv)
        container.appendChild(classContainer)
    }
}).catch((error) => {
    console.error(error);
});}
classLoad()
let addClass = document.getElementById("addClass")
function addClasses() {
    let addClassesName = document.getElementById("inputPassword6").value
    if (addClassesName === null) {
        alert("Please type in your new class name !")
    } if (listClassContent.includes(addClassesName)) {
        alert("You already had that class !")
    } else {
        listClassContent.push(addClassesName)
        dbRef.child("users").child(currentUser).child('class').update({
            classname: listClassContent,
        });
        classLoad();
        addClassesName = ""
    }
}
addClass.addEventListener("click", addClasses)
