$(document).ready(function() {
    var url = "orgs.json";
    // $.ajax({
    //     dataType: "json",
    //     url: url,
    //     data: data,
    //     success: function(data) {
    //         console.log(data);
    //     }
    // });
    $.getJSON(url, function(data) {
        var items = [];
        $.each(data, function(key, val) {
            items.push("<li id='" + key + "'>" + val + "</li>");
        });

        $("<ul/>", {
            "class": "my-new-list",
            html: items.join("")
        }).appendTo("body");
    });
});