
$('.rules-row').on('click', function(e){
    const target = $(e.target).parent();
    const show_details_status = "true" === target.attr('data-show-details');
    const new_show_details_status = show_details_status ? "false" : "true";
    target.attr('data-show-details', new_show_details_status);
    if (show_details_status) {
        target.find('.description').addClass('d-none');
    } else {
        target.find('.description').removeClass('d-none');
    }
});

$('#search_rules_by_name').on('keyup', function(e){
    const target = $(e.target);
    let value = target.val();
    let neadle = value.toLowerCase();
    if (3 <= value.length) {
        $('.rules-row').addClass('d-none');
        $.each($('.name'), function(k, element) {
            let name = $(element).html();
            let haystack = name.toLowerCase();
            if (haystack.indexOf(neadle) >= 0) {
                $(element).parent().removeClass('d-none');
            }
        });
    } else {
        $('.rules-row').removeClass('d-none');
    }
});
$('.convert-to').on('click', function(e) {
    $(e.target).val('');
});

$('.convert-to').on('keyup', function(e) {
    const target = $(e.target);
    let feet = 0;
    let meters = 0;
    let boxes = 0;
    switch (target.attr('name')) {
        case 'feet':
            feet = target.val();
            boxes = feet/5;
            meters = boxes*1.5;
            $('input[name="meters"]').val(meters);
            $('input[name="boxes"]').val(boxes);
            
            break;
        case 'meters':
            meters = target.val();
            boxes = meters/1.5;
            feet = boxes*5;
            $('input[name="feet"]').val(feet);
            $('input[name="boxes"]').val(boxes);

            break;
        case 'boxes':
            boxes = target.val();
            feet = boxes*5;
            meters = boxes*1.5;
            $('input[name="feet"]').val(feet);
            $('input[name="meters"]').val(meters);
            
            break;
    
        default:
            break;
    }
    // $('input[name="feet"]').val(feet);
    // $('input[name="meters"]').val(meters);
    // $('input[name="boxes"]').val(boxes);
});

$('.range-ewapon').on('click', function(e){
    const target = $(e.target);
    const range = target.data('range');
    $('input[name="meters"]').val(range).keyup();

});
