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