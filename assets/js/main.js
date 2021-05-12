/* Carousel*/
$('.carousel').carousel({
    pause: false,
});


$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});