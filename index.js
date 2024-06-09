const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const opt1El = document.getElementById("option1-el")
const opt2El = document.getElementById("option2-el")
const btnClick = document.getElementById("password-btn")
const password = []

function generatePassword() {
    password.length = 0
    for (i = 0; i < 16; i++) {
        let r = Math.floor(Math.random()*characters.length)
        let c = characters[r]
        password.push(c)
    }
    return password
}

function buttonClicked() {
    opt1El.textContent = ""
    opt2El.textContent = ""
    generatePassword()
    for (i = 0; i < password.length; i++) {
        opt1El.textContent += password[i]
    }
    generatePassword()
    for (i = 0; i < password.length; i++) {
        opt2El.textContent += password[i]
    }
}

btnClick.addEventListener("click", () => {buttonClicked()})