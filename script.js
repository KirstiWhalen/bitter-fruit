$(document).ready(function() {

    $('a[data-opens]').click(function() {

        var openedby = $(this).attr('data-opens');
        $('[data-openedby="' + openedby +'"]').removeClass('off').addClass('on');

        var closedby = $(this).attr('data-closes');
        $('[data-closedby="' + closedby +'"]').css('display', 'none');

        $(this).addClass('clicked');

    });

});
