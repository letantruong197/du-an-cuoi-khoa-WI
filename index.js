let currentUser = localStorage.getItem("uid")
if (!currentUser){
    location.replace("login.html")
}