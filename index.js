$(document).ready(function() {
    FontAwesome();
    SourceSansPro('html, body');
});

var newUser = function() {
    var url = "orgs.json";
    $.getJSON(url, function(data) {
        $.each(data, function(key, val) {
            console.log("key", key);
            console.log("val", val);
            $('.active .org').text(val["org"]);
            // $('.active .photo').css('backgroundImage', 'url(' + user.picture.large + ')');
            $('.active .keyword').text(val["keyword"]);
            // items.push("<li id='" + key + "'>" + val + "</li>");
        });
    });
};

$(function() {
    newUser();
    $('.item:lt(3)').show();
    $('.item:eq(0)').addClass('active');
    $('.item:eq(1)').addClass('next');
    $('.item:eq(2)').addClass('last');
    var control = function(e) {
        $('.active').switchClass('active', e);
        $('.next').switchClass('next', 'active');
        $('.last').switchClass('last', 'next').next().show().addClass('last');
        newUser();
    };
    $('.pass button').on('click', function() { control('remove'); });
    $('.like button').on('click', function() { control('save'); });
});