(()=>{
    let items = ITEMS
    const promArea = document.querySelector(".promotion").querySelector(".crd-view")

    console.log(promArea)
    let render = ""
    for(p of PROMOTIONS){
        render +=
            `<div class="card card-prom">
              <a href="${p.url}" class="crd-link">${p.title}</a>
              <div class="crd-img-prom" style="background-image: url(${p.img})" ></div>
              <p class="crd-price">${p.description}</p>`
        let nt = []
        if(p.time_action){
            let time = p.time_action.split(" ")
            for(let i = 0; i<time.length;i++){
                d = parseInt(time[i])
                nt.push(Math.floor(d/10))
                nt.push(Math.floor(d%10))
            }
        }
        render += (p.time_action)?
                `<div class="crd-term">
                <div class="term-p">Срок действия:</div>
                <div class="time d1">${nt[0]}</div>
                <div class="time d2">${nt[1]}</div>
                <div class="h3">:</div>
                <div class="time h1">${nt[2]}</div>
                <div class="time h2">${nt[3]}</div>
                <div class="m3">:</div>
                <div class="time m1">${nt[4]}</div>
                <div class="time m2">${nt[5]}</div>
                <div class="t-p d-p">дней</div>
                <div class="t-p h-p">часов</div>
                <div class="t-p m-p">минут</div>
              </div>`:
            `<div class="crd-term none">
                <div class="term-p">Срок действия:</div>
                <div class="term-none">бессрочно</div>
              </div>`

        render +=
              `<a class="crd-more" href="${p.url}">Подробнее</a>
            </div>`
    }
    promArea.innerHTML = render

})()