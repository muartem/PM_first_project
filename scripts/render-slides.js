let slides;
(()=>{
    const slider = document.querySelector('.slider-box')
    slides = BANNER.filter(s => s.img)
    slides.sort((a, b) => a.order < b.order ? -1 : 1)
    let render = ""
    for (s of slides) {
        render += `<li class="slider-dot"></li>`
    }
    slider.querySelector('.slider-dots').innerHTML = render
})()
