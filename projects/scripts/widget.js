$(document).ready(function () {
    $('#dialog').dialog({
        autoOpen: false, title: 'Basics Guide'
    });
    $('#guide').click(function () {
        $('#dialog').dialog('open');
    });
});