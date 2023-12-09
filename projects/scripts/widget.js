$(function() {
    $("#dialog").dialog({
        autoOpen: false, modal: true, show: "blind", hide: "blind"
    });
    $("#guide").click(function() {
        $("#dialog").dialog("open");
        false;
    });
});