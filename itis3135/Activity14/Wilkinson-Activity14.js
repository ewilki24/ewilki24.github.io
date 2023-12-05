$(document).ready(function() {
	$("a").click(function() {
        let title = $(this).attr("title");
        getJSON(title + ".json");
    });
}); // end ready