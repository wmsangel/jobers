$(function (){
    $('body').on('click', '.js-select-jobs', function (e) {
        if ($(this).is(':checked')) {
            $('.js-select-job-item').prop('checked',true);
            let counter = $('.js-select-job-item').length;
            if (counter > 0) {
                $('.js-jobs-counter').text(counter);
                $('.js-remove').show();
                $('.js-counter-wrap').toggleClass('is-selected');
            }
        } else {
            $('.js-select-job-item').prop('checked',false);
            $('.js-jobs-counter').text('0');
            $('.js-remove').hide();
            $('.js-counter-wrap').toggleClass('is-selected');
        }
    })


    //select 2
    if ($('.js-select-2').length) {
        $('.js-select-2').select2({
            minimumResultsForSearch: Infinity
        });
    }


    // popup
    const body = $('body');
    const popupLink = '.js-popup-link';
    const popupClose = '.js-popup-close';
    const popupWrap = '.js-popup-wrap';
    const popupBlock = '.js-popup';
    body.on('click', popupLink, function (e) {
        e.preventDefault();
        let popupID = $(this).data('popup');
        body.addClass('is-popup-opened');
        $(popupWrap).addClass('is-opened');
        $(popupBlock).removeClass('is-opened');
        $(popupBlock+'[data-popup='+popupID+']').addClass('is-opened')
    })
    body.on('click', popupClose, function (e) {
        e.preventDefault();
        body.removeClass('is-popup-opened');
        $(popupWrap).removeClass('is-opened');
    });
    $(document).keydown(function(e) {
        if (e.keyCode == 27) {
            body.removeClass('is-popup-opened');
            $(popupWrap).removeClass('is-opened');
        }
    });



    //phones
    body.on('click', '.js-more-phone', function (e) {
        e.preventDefault();
        $(this).parent('.js-phone-wrap').clone().insertAfter($(this).parent('.js-phone-wrap'));
        $(this).remove()
    })


    //accordion
    body.on('click', '.js-accordion-block-btn', function (e) {
        e.preventDefault();
        $(this).next('.js-accordion-block').slideToggle();
        $(this).toggleClass('is-opened')
    })


    // plans
    body.on('click', '.js-plan-item-choice', function (e) {
        e.preventDefault();
        $('.js-plan-item-choice').removeClass('plan-item--selected')
        $(this).addClass('plan-item--selected')
    })


    // $(function (){
    if ($('.js-phone').length > 0) {
        var trigger = false;
        var options = {
            'translation': {
                C: {
                    pattern: /[7]/
                },
                M: {
                    pattern: /[9,7,5,3,2]/
                },
                L: {
                    pattern: /[9,7,5]/
                }
            },
            onKeyPress: function onKeyPress(cep, e, field, options) {
                var masks = ['+7 (000) 000-00-00'];
                if (cep.length === 8) {
                    trigger = true;
                }
                if (cep.length < 8) {
                    trigger = false;
                }
                var mask = cep.length > 7 && trigger ? masks[0] : masks[0];
            }
        };
        $('.js-phone').mask('+7 (000) 000-00-00', options);
    }

})