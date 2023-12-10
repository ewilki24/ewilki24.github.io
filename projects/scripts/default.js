function fakeComment() {
    if (document.getElementById(comment).onclick) {
        alert("Sorry, this purposely doesn't work. Thank you for the comment!");
        document.write("Sorry, this purposely doesn't work. Thank you for the comment!");
    } 
}

xhttp.open("GET", "ajax_info.txt", true);
xhttp.send();

xhttp.open("POST", "ajax_info.txt", true);
xhttp.send();