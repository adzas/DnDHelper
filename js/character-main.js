import App from './app.js';

const app = new App;

$('.charecter-row').on('click', function(e){
    const target = $(e.target).parent();
    const show_details_status = "true" === target.attr('data-show-details');
    const new_show_details_status = show_details_status ? "false" : "true";
    target.attr('data-show-details', new_show_details_status);
    if (show_details_status) {
        target.find('.second-name').addClass('d-none');
        target.find('.description').addClass('d-none');
    } else {
        target.find('.second-name').removeClass('d-none');
        target.find('.description').removeClass('d-none');
    }
});

$('#search_character_by_locations').on('keyup', function(e){
    const target = $(e.target);
    let value = target.val();
    let neadle = value.toLowerCase();
    if (3 <= value.length) {
        $('.charecter-row').addClass('d-none');
        $.each($('.locations'), function(k, element) {
            let locations = $(element).html();
            let haystack = locations.toLowerCase();
            if (haystack.indexOf(neadle) >= 0) {
                $(element).parent().removeClass('d-none');
            }
        });
    } else {
        $('.charecter-row').removeClass('d-none');
    }
});

$('#search_character_by_tags').on('keyup', function(e){
    const target = $(e.target);
    let value = target.val();
    let neadle = value.toLowerCase();
    if (3 <= value.length) {
        $('.charecter-row').addClass('d-none');
        $.each($('.tags'), function(k, element) {
            let tag = $(element).html();
            let haystack = tag.toLowerCase();
            if (haystack.indexOf(neadle) >= 0) {
                $(element).parent().removeClass('d-none');
            }
        });
    } else {
        $('.charecter-row').removeClass('d-none');
    }
});

$('#search_character_by_name').on('keyup', function(e){
    const target = $(e.target);
    let value = target.val();
    let neadle = value.toLowerCase();
    if (3 <= value.length) {
        $('.charecter-row').addClass('d-none');
        $.each($('.second-name'), function(k, element) {
            let secondName = $(element).html();
            let haystack = secondName.toLowerCase();
            if (haystack.indexOf(neadle) >= 0) {
                $(element).parent().removeClass('d-none');
            }
        });
        $.each($('.name'), function(k, element) {
            let name = $(element).html();
            let haystack = name.toLowerCase();
            if (haystack.indexOf(neadle) >= 0) {
                $(element).parent().removeClass('d-none');
            }
        });
    } else {
        $('.charecter-row').removeClass('d-none');
    }
});


$('#filter_by_priority').on('click', function(e){
    const target = $(e.target);
    let order_settings = target.attr('data-order');
    const order = order_settings;
    const new_order = "asc" === arder ? "desc" : "asc";
    target.attr('data-order', new_order);
    console.log('do zrobienia sortowanie po priorytecie');
    // $.each($('.charecter-row'), function(k, element) {
    //     let locations = $(element).html();
    //     locations.toLowerCase();
    //     if (locations.indexOf(value) >= 0) {
    //         $(element).parent().removeClass('d-none');
    //     }
    // });
    // $.each($('.name'), function(k, element) {
    //     let locations = $(element).html();
    //     locations.toLowerCase();
    //     if (locations.indexOf(value) >= 0) {
    //         $(element).parent().removeClass('d-none');
    //     }
    // });
});
