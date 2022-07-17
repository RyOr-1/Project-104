// Create login Function here.
function login() {
    playerName = document.getElementById('playername').value 
    localStorage.setItem("playerName", playerName)

    window.location = "gamepage.html"
}