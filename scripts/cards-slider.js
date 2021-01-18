(()=>{  //лексическое окружение
    const cards_for_slider = document.querySelectorAll('.cards-slider-for-js') // Ищет все блоки нуждающиеся в слайдере

    // Узнает сколько карточек одновременно отображать
    let viev_cards = (document.body.clientWidth < 522) ? 1 : (document.body.clientWidth < 782) ? 2 : (document.body.clientWidth < 1128) ? 3 : 4
    // и если поменять размер окна после загрузки)))
    window.addEventListener(`resize`, event => {
        viev_cards = (document.body.clientWidth < 522) ? 1 : (document.body.clientWidth < 782) ? 2 : (document.body.clientWidth < 1128) ? 3 : 4
    }, false);

    //вешаем слайдер на все блоки
    for(card of cards_for_slider){
        slider(card)
    }

    function slider(card_slider) {
        const slider_prev = card_slider.querySelector('.crd-prev')
        const slider_next = card_slider.querySelector('.crd-next')
        const slider_prev_min = card_slider.querySelector('.min-prev')
        const slider_next_min = card_slider.querySelector('.min-next')
        const cards = card_slider.querySelectorAll('.card')
        slider_prev.style.color = '#aaa'
        slider_prev_min.classList.add('dmb')

        let step = 0

        // если и так все видно слайдер не активный)
        if (cards.length <= viev_cards){
            slider_next.style.color = '#aaa'
            slider_next_min.classList.add('dmb')
        }
        slider_next.addEventListener('click', next)  //Вперед
        slider_prev.addEventListener('click', prev)  //Назад
        slider_next_min.addEventListener('click', next)  //Вперед
        slider_prev_min.addEventListener('click', prev)  //Назад

        //вперед
        function next() {
            if (step >= cards.length - viev_cards) return
            slider_prev.style.color = '#ff5816'
            slider_prev_min.classList.remove('dmb')
            step++
            change()
            if (step >= cards.length - viev_cards) {
                slider_next.style.color = '#aaa'
                slider_next_min.classList.add('dmb')
            }

        }

        //назад
        function prev() {
            if (step <= 0) return
            slider_next.style.color = '#ff5816'
            slider_next_min.classList.remove('dmb')
            step--
            change()
            if (step <= 0) {
                slider_prev_min.classList.add('dmb')
                slider_prev.style.color = '#aaa'
            }
        }
        //отрисовка
        function change() {
            for (let card = 0; card < cards.length - viev_cards; card++) {
                if (card < step) cards[card].style.display = 'none'
                else cards[card].style.display = 'grid'
            }
        }
    }
})()