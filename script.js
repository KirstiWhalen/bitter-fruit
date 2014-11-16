$(document).ready(function() {

    $('a[opens]').click(function() {

        var openedby = $(this).attr('opens');
        $('[openedby="' + openedby +'"]').removeClass('off').addClass('on');

        var closedby = $(this).attr('closes');
        $('[closedby="' + closedby +'"]').css('display', 'none');

        $(this).addClass('clicked');

    });

});
