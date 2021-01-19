let count = 0
function buyItem(item){
    basket.push(item)
    count++
    let summ = 0
    for(i of basket) {
        summ += Math.floor(i.price)
    }
    updateCart(count,summ)
}