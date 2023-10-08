//function to prevent submission
document.getElementsByClassName("required").addEventListener("click", function(event) {
    event.preventDefault()
});

//function to reset the form
function resetForm() {
    document.getElementById("reset").reset();
}

//submit form
function submitForm() {
    document.getElementById("submit").submit();
}

//function to add text box 
function addText() {
    document.getElementById("addBox").conclick = function() {
        const text = document.getElementById("text");
        const input = document.createElement("input");
        input.type = "text";
        const br = document.createElement("br");
        text.appendChild(input);
        text.appendChild(br);
    }
}

//delete textbox
function deleteBox() {
    document.getElementById("delete").onclick = function() {
        document.getElementById("addBox").remove();
    }
}


