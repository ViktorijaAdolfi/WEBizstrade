let menu = document.querySelector("#menu")
let navbar = document.querySelector("nav")

menu.onclick = () => {
    navbar.classList.toggle("nav-toggle")
    menu.classList.toggle("fa-times")
}
window.onscroll = () => {
    navbar.classList.remove("nav-toggle")
    menu.classList.remove("fa-times")
}