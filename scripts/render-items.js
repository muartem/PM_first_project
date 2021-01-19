(()=>{
    let items = ITEMS
    const newArea = document.querySelector(".new-items")
    const recArea  = document.querySelector(".recommend")
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
    console.log(newItems)
    console.log(recItems)
    console.log(saleItems)

    render(newArea, newItems)
    render(recArea, recItems)
    render(saleArea, saleItems)

    function render(to, from){
        let area = to.querySelector(".crd-view")
        let render = ""
        for(f of from){
            render +=
                ``
        }
      //  area.innerHTML = render

        console.log(area)
    }
})()