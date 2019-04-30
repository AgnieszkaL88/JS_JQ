$('.interface').on('click', function () {
    if ($(this).hasClass('orange')) {
        console.log('prawda');

        $('body').css({
            'background-color': 'orange'
        })

    }
    if ($(this).hasClass('green')) {
        console.log('prawda jest zielony');

        $('body').css({
            'background-color': 'green'
        })
    }

    if ($(this).hasClass('increase')) {
        console.log('prawda dla plus');

        $('.text').animate({
            'font-size': '+=2'
        }, 500)
    }

    if ($(this).hasClass('move')) {
        console.log('prawda dla strzałkę');

        $('.text').animate({
            'left': '+=5px',
            'letter-spacing': '+=2px'
        })
    }


})