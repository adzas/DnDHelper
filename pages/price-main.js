
$('.convert-to').on('click', function(e) {
    $(e.target).val('');
});

$('.convert-to').on('keyup', function(e) {
    // 1sp=10sz
    // 1sz=10ss
    // 1se=5ss
    // 1ss=10sm
    const target = $(e.target);
    let sz = 0;
    let ss = 0;
    let sm = 0;
    switch (target.attr('name')) {
        case 'gold':
            sz = target.val();
            ss = sz*10;
            sm = ss*10;
            $('input[name="silver"]').val(ss);
            $('input[name="copper"]').val(sm);
            
            break;
        case 'silver':
            ss = target.val();
            sz = ss/10;
            sm = ss*10;
            $('input[name="copper"]').val(sm);
            $('input[name="gold"]').val(sz);

            break;
        case 'copper':
            sm = target.val();
            ss = sm/10;
            sz = ss/10;
            $('input[name="silver"]').val(ss);
            $('input[name="gold"]').val(sz);
            
            break;
    
        default:
            break;
    }
});