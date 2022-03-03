// 7775 words

function horse() {

var count = document.getElementById("length").value
var capitalization
var separator = document.getElementById("separator").value
var password = ""



while (count != 0) {
    password += largeWordlist[Math.floor(Math.random() * largeWordlist.length)] + separator
    count -= 1
}

if (separator != "") {
    password = password.slice(0, password.length - 1)
}

return password;
}