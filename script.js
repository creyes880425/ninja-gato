$(document).ready(function () {
    $('img').click(function() {
        var src = $(this).attr('src')
        var alt = $(this).attr('data-alt-src');
        $(this).attr('src', alt);
        $(this).attr('data-alt-src', src);
    });
});