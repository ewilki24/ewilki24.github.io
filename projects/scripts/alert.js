function reset() {
    $("#link").attr("href", "styles/project_default.css");
    alertify.set({
        labels: {
            ok: "OK",
            cancel: "Cancel"
        },
        delay: 4000,
        buttonFocus: "OK",
        buttonReverse: false
    });
}

$("#notification").on('click', function() {
    reset();
    alertify.alert("New Comment!");
    alertify.alert("Thanks for the Feedback!");
});