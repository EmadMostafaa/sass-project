const mybtn = document.getElementById("toggle-btn")
const navbar = document.getElementsByClassName("navbar")[0]
mybtn.onclick = function() {
  navbar.classList.toggle("active")
}