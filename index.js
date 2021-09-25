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
let edit = document.getElementById("editBtn")
let list = document.getElementById("ds-border")
let container = document.getElementById("container-classes")
let addClass = document.getElementById("addClass")
let keyString = localStorage.getItem('key')
const dbRef = firebase.database().ref();
let refresh = document.getElementById("refresh")
if (!currentUser) {
    location.replace("https://letantruong197.github.io/du-an-cuoi-khoa-WI/login.html")
}
let logoutBtn = document.getElementById("logout")
function logout() {
    event.preventDefault()
    localStorage.removeItem("uid")
    setTimeout(location.replace("https://letantruong197.github.io/du-an-cuoi-khoa-WI/login.html"), 3000)
}
if (localStorage.getItem("lastListClass") === null) {
    localStorage.setItem("listClass", JSON.stringify([]))
    localStorage.setItem("lastListClass", JSON.stringify([]))
}
let addClassesName = document.getElementById("inputPassword6")
let classNameBtn = document.getElementById("classname")
let save = document.getElementById("saveClass")
let inputHelp = document.getElementById("passwordHelpInline")
let classContent = JSON.parse(localStorage.getItem("lastListClass"))
let listClassContent = JSON.parse(localStorage.getItem("listClass"))
function classLoad() {
    if (keyString !== null) {
        dbRef.child("users").child(currentUser).child('class').child(keyString).get().then((snapshot) => {
            if (snapshot.exists()) {
                container.innerHTML = ""
                let snapshotValue = snapshot.val();
                localStorage.setItem("listClass", JSON.stringify(snapshotValue))
                localStorage.setItem('lastListClass', JSON.stringify(snapshotValue.classname))
                let listClassContent = JSON.parse(localStorage.getItem("listClass"))
                for (let i = 0; i < listClassContent.classname.length; i++) {
                    container.innerHTML += `<div onclick="currentClass()" class="container_box"><div class="container_box_content"><h3 id="classname">${listClassContent.classname[i].name}</h3></div></div>`
                }
                localStorage.setItem("container", true)
            }
        }).catch((error) => {
            console.error(error);
            localStorage.setItem("container", false)
        });
    }
}
function addClasses() {
    const userExists = listClassContent.classname?.some(user => user.name === addClassesName.value);
    if (userExists) {
        inputHelp.style.color = "red"
        inputHelp.innerHTML = "You already had that class"
        return new Error({ error: 'User exists' })
    } else {
        let classObj = {}
        classObj.name = addClassesName.value
        classContent.push(classObj)
        localStorage.setItem("lastListClass", JSON.stringify(classContent))
        container.innerHTML += `<div class="container_box"><div onclick="currentClass()" class="container_box_content"><h3 id="classname">${addClassesName.value}</h3></div></div>`
        addClassesName.value = ""
    }
}
classLoad()

function saveClass() {
    event.preventDefault();
    let newOrderRef = dbRef.child("users").child(currentUser).child('class').push({
        classname: classContent
    }
    );
    let key = newOrderRef.key
    localStorage.setItem("key", key)
    setTimeout(location.reload(),3000)
}
function currentClass() {
    if (localStorage.getItem("container")) {
        event.preventDefault();
        let currentClass = document.getElementById("classname").textContent
        localStorage.setItem("currentClass", currentClass)
        location.replace("https://letantruong197.github.io/du-an-cuoi-khoa-WI/scoreTable.html")
    }
}
// function refreshClass(){
//     container.innerHTML =""
//     for (let i = 0; i < listClassContent.classname.length; i++) {
//         container.innerHTML += `<div onclick="currentClass()" class="container_box"><div class="container_box_content"><h3 id="classname">${listClassContent.classname[i].name}</h3></div></div>`
//     }
// }

addClass.addEventListener("click", addClasses)
save.addEventListener("click", saveClass)
// refresh.addEventListener("click",refreshClass)