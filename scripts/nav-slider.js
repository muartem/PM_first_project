(() => {  //лексическое окружение
    const nav_block3 = document.querySelector('.nav-items')
    const nav_prev = document.querySelector('.nav-left')
    const nav_next = document.querySelector('.nav-right')

        /* Слайдер сделан при помощи overflow: scroll;
        сам скролл скрыт, но мы можем теперь его двигать :) */
    let scroll = 0
    if (scroll >= (nav_block3.scrollWidth - nav_block3.clientWidth)) nav_next.classList.add('dis-nav')
    nav_next.addEventListener('click', () => {
        if (scroll >= (nav_block3.scrollWidth - nav_block3.clientWidth)) {
            scroll = nav_block3.scrollWidth - nav_block3.clientWidth
            nav_next.classList.add('dis-nav')
            return  //Проверка на правую мертвую точку
        }
        scroll += 50
        if (scroll > 0) nav_prev.classList.remove('dis-nav')
        nav_block3.scroll(scroll, 0)
    })
    nav_prev.addEventListener('click', () => {
        if (scroll <= 0) {
            nav_prev.classList.add('dis-nav')
            scroll = 0
            return //Проверка на левую мертвую точку
        }
        scroll -= 50
        nav_next.classList.remove('dis-nav')
        nav_block3.scroll(scroll, 0)
    })
})()