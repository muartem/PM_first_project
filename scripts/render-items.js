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
    let newItems =  items.filter(({type}) => type === "new")
    let recItems = items.filter(({type}) => type === "recommended")
    let saleItems = items.filter(({type}) => type === "sale")

    // сортировка
    newItems.sort((a, b) => a.date < b.date ? 1 : -1)
    recItems.sort((a, b) => +a.price > +b.price ? 1 : -1)
    saleItems.sort((a, b) => (+a.oldPrice - a.price) < (+b.oldPrice-  b.price) ? 1 : -1)

    // заполнение
    render(newArea, newItems)
    render(recArea, recItems)
    render(saleArea, saleItems)
    function render(to, itemsArray){
        let area = to.querySelector(".crd-view")
        let render = ""
        for(item of itemsArray){
            render +=
                `<div class="card">
                      <div class="crd-label ${item.type}-label"></div>
                      <div class="crd-img" style="background-image: url(${item.img||defaultIMG})"></div>
                      <a href="${item.url}" class="crd-link">${item.description}</a>
                      <p class="crd-price">
                        Цена:
                        <strong>${Math.floor(item.price)}  ${CURRENCY}</strong>
                        <del>${Math.floor(item.oldPrice)} ${CURRENCY}</del>
                      </p>
                      <div class="crd-buy" onclick='buyItem(${JSON.stringify(item)})'>КУПИТЬ</div> 
                      <a class="crd-more">Подробнее</a>
                    </div>`

        }
        area.innerHTML = render
    }
})()