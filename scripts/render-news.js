(()=>{
    const news = document.querySelector('.news')
    let render = `<h2>Новости Компании</h2>`

    let getRandom = max => Math.floor(Math.random() * max);
    let randArray = [];
    let j = (NEWS.length > 3)? 3 : NEWS.length
    for (let i = 0; i<j;i++){
        let rand = getRandom(NEWS.length)
        if(randArray.includes(rand)) i--
        else randArray.push(rand)
    }
    let getDay = (d) => {
        const date = d.split('/')
        return date[2]
    }
    let getMonth = (d) => {
        const date = d.split('/')
        const monthMap = new Map([
            [1, "января"],
            [2, "февраля"],
            [3, "марта"],
            [4, "апреля"],
            [5, "мая"],
            [6, "июня"],
            [7, "июля"],
            [8, "августа"],
            [9, "сентября"],
            [10, "октября"],
            [11, "ноября"],
            [12, "декабря"]
        ]);
        return monthMap.get(+date[1])
    }
    console.log(randArray);
    for (r of randArray) {
        console.log(r);
        render += `<hr /> <article>
            <div class="news-img">
              <div class="img" style="background-image: url(${NEWS[r].img});"></div>
              <div class="news-day">${getDay(NEWS[r].date)}</div>
              <p class="news-mounts">${getMonth(NEWS[r].date)}</p>
            </div>
            <div class="news-txt">
              <a href="${NEWS[r].url}">${NEWS[r].title}</a><br />
              ${NEWS[r].description}
            </div>
            </article>`
        }
    news.innerHTML = render
})()