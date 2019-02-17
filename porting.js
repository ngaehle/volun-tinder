$(document).ready(function() {
    var url = "orgs.json";
    $.ajax({
        dataType: "json",
        url: url,
        data: data,
        success: function(data) {
            console.log(data);
        }
    });
});