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
let addClass = document.getElementById("addClass")


function classLoad() {
    dbRef.child("users").child(currentUser).child('class').get().then((snapshot) => {
        if(snapshot.exists()){
        console.log(snapshot.val())
        let snapshotValue = snapshot.val();
        localStorage.setItem("listClass", JSON.stringify(snapshotValue))
        localStorage.setItem("nameLength",snapshotValue.classname.length)
        let numberOfClass = JSON.parse(localStorage.getItem("listClass"))
        for (let i = 0; i < snapshotValue.classname.length; i++) {
            container.innerHTML += `<div class="container_box"><div class="container_box_content"><h3>${numberOfClass.classname[i].name}</h3></div></div>`
        }
    }}).catch((error) => {
        console.error(error);
    });
}
if (localStorage.getItem("listClass")) {
    classLoad()
}
let addClassesName = document.getElementById("inputPassword6")
function addClasses() {
    let classObj = {}
    dbRef.child("users").child(currentUser).child('class').get().then((snapshot) => {
        if (snapshot.exists()) {
            classObj.name = addClassesName.value
            listClassContent.push(classObj)
            localStorage.setItem("listClass", JSON.stringify(listClassContent))
            dbRef.child("users").child(currentUser).child('class').update({
                classname: JSON.parse(localStorage.getItem("listClass")),
            });
            let snapshotValue = snapshot.val();
            console.log(snapshotValue.classname.length)
            container.innerHTML += `<div class="container_box"><div class="container_box_content"><h3>${addClassesName.value}</h3></div></div>`
        } else {
            firebase.database().ref('users/'+ currentUser + '/class'  ).set({
                classname:[{name: addClassesName.value}]
              });
              container.innerHTML += `<div class="container_box"><div class="container_box_content"><h3>${addClassesName.value}</h3></div></div>`
        }
      }).catch((error) => {
        console.error(error);
      });  
}

addClass.addEventListener("click", addClasses)
