(() => {  //лексическое окружение
    const sliderBox = document.querySelector('.slider-box')
    const slider_prev = document.querySelector('.prev')
    const slider_next = document.querySelector('.next')
    const slider_ids = document.querySelectorAll('.slider-dot')

    let currant = 0

    slider_next.addEventListener('click', () => {
        nextSlide()
        clearInterval(timerId)
    })  //Вперед

    slider_prev.addEventListener('click', () => {
        if (currant > 0) currant--
        else currant = slider_ids.length - 1
        clearInterval(timerId)
        changeSlide()
    })  //Назад

    function nextSlide() {
        if (currant < slider_ids.length - 1) currant++
        else currant = 0
        changeSlide()
    }   // вперед используется при нажатии и по времени

    for (let slide = 0; slide < slider_ids.length; slide++) {
        slider_ids[slide].addEventListener('click', () => {
            currant = slide
            clearInterval(timerId)
            changeSlide()
        })
    }



    let timerId = setInterval(nextSlide, 1500);

    let changeSlide = () => {
        let j = 0
        for (let slide = 0; slide < slider_ids.length; slide++) {
            slider_ids[slide].classList.remove('active')
            if (slide == currant) {
                slider_ids[slide].classList.add('active')
                sliderBox.style.backgroundImage = `url('${slides[j].img}')`
            }
        }
        j++
    }

})()