function horse() {

    var count = document.getElementById("length").value
    var capitals = document.getElementById("capitals").checked
    var separator = document.getElementById("separator").value
    var password = ""
    var newword


    while (count != 0) {

        newword = largeWordlist[Math.floor(Math.random() * largeWordlist.length)]

        if (capitals) {
            password += newword.charAt(0).toUpperCase() + newword.slice(1) + separator
        } else {
            password += newword + separator
        }

        count -= 1
    }

    if (separator != "") {
        password = password.slice(0, password.length - 1)
    }

    document.getElementById("outputLength").innerHTML = "Password length: " + password.length

    return password;
}
