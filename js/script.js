// ini javascrit

function replaceName() {
    let name = prompt("Siapa nama anda?", "");
    document.getElementById("name").innerHTML = name
}

document.getElementById('tombol').addEventListener("click", function() {
    replaceName()
})

function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birtDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const message = document.forms["message-form"]["messages"].value;

    if (name == "" || birthDate == "" || gender == "" || messages =="") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    setSenderUI(name, birthDate, gender, messages);

    return false;

    function setSenderUI(name, birtDate, gender, messages) {
        document.getElementById("sender-full-name").innerHTML = name;
        document.getElementById("sender-birth-date").innerHTML = name;
        document.getElementById("sender-gender").innerHTML = name;
        document.getElementById("sender-messages").innerHTML = name;
    }
}