(()=>{
    let items = ITEMS
    const newArea = document.querySelector(".new-items")
    const recArea  = document.querySelector(".recommended")
    const saleArea = document.querySelector(".sale")

    // ОБМЕН валют
    switch (CURRENCY){
        case "UAH":
            items.forEach(i => {
                switch (i.currency){
                    case "UAH":
                        break
                    case "RUB":
                        i.price *= CURRENCY_EXCHANGE.RUB
                        i.oldPrice *= CURRENCY_EXCHANGE.RUB
                        i.currency = "UAH"
                        break
                    case "USD":
                        i.price *= CURRENCY_EXCHANGE.USD
                        i.oldPrice *= CURRENCY_EXCHANGE.USD
                        i.currency = "UAH"
                        break
                }
            })
            break
        case "USD":
            items.forEach(i => {
                switch (i.currency){
                    case "UAH":
                        i.price /= CURRENCY_EXCHANGE.USD
                        i.oldPrice /= CURRENCY_EXCHANGE.USD
                        i.currency = "USD"
                        break
                    case "RUB":
                        i.price = i.price/CURRENCY_EXCHANGE.USD/CURRENCY_EXCHANGE.RUB
                        i.oldPrice = i.oldPrice/CURRENCY_EXCHANGE.USD/CURRENCY_EXCHANGE.RUB
                        i.currency = "USD"
                        break
                    case "USD":
                        break
                }
            })
            break
        case "RUB":
            items.forEach(i => {
                switch (i.currency){
                    case "UAH":
                        i.price /= CURRENCY_EXCHANGE.RUB
                        i.oldPrice /= CURRENCY_EXCHANGE.RUB
                        i.currency = "RUB"
                        break
                    case "RUB":
                        break
                    case "USD":
                        i.price = i.price * CURRENCY_EXCHANGE.USD / CURRENCY_EXCHANGE.RUB
                        i.oldPrice = i.oldPrice * CURRENCY_EXCHANGE.USD / CURRENCY_EXCHANGE.RUB
                        i.currency = "RUB"
                        break
                }
            })
            break
    }

    // выборка
    let newItems =  items.filter(i => i.type === "new")
    let recItems = items.filter(i => i.type === "recommended")
    let saleItems = items.filter(i => i.type === "sale")

    // сортировка
    newItems.sort((a, b) => a.date < b.date ? 1 : -1)
    recItems.sort((a, b) => +a.price > +b.price ? 1 : -1)
    saleItems.sort((a, b) => (+a.oldPrice - a.price) < (+b.oldPrice-  b.price) ? 1 : -1)

    // заполнение
    render(newArea, newItems)
    render(recArea, recItems)
    render(saleArea, saleItems)

    function render(to, from){
        let area = to.querySelector(".crd-view")
        let render = ""
        for(f of from){
            render +=
                `<div class="card">
                      <div class="crd-label ${f.type}-label"></div>
                      <div class="crd-img" style="background-image: url(${f.img})"></div>
                      <a href="${f.url}" class="crd-link">${f.description}</a>
                      <p class="crd-price">
                        Цена:
                        <strong>${f.price} ${CURRENCY}.</strong>
                        <del>${f.oldPrice} ${CURRENCY}.</del>
                      </p>
                      <div class="crd-buy">КУПИТЬ</div>
                      <a class="crd-more">Подробнее</a>
                    </div>`
        }
        area.innerHTML = render
    }
})()