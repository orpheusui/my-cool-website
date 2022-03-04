function horse() {
    var numWords = document.getElementById("length").value
    var count = numWords
    var capitals = document.getElementById("capitals").checked
    var separator = document.getElementById("separator").value
    var password = ""
    var newword

    if (count > 10) {return null}

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

    // Print length

    document.getElementById("outputLength").innerHTML = "Password length: " + password.length

    // Print bits of entropy

    document.getElementById("entropy").innerHTML = "Entropy: " + Math.round(Math.log2(7776 ** numWords) * 100)/100 + " bit"

    return password;
}