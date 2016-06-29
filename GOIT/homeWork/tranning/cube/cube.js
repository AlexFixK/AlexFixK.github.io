/**
 * Created by Alexander on 5/19/2016.
 */
$('.menu').on('click', function () {

    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.submenu').removeClass('active');
    } else {
        $(this).addClass('active');
        $('.submenu').addClass('active');
    }

})
