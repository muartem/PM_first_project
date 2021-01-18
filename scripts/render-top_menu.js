(()=>{
    const top_nav = document.querySelector('.linear')
    let i = 1;
    let render = ""
    for (tm of Object.keys(TOP_MENU)) {
        if (i > 8) break
        console.log(TOP_MENU[tm].title);
        render += `<li><a href="${TOP_MENU[tm].url || "#"}">${TOP_MENU[tm].title}</a>`
        if (TOP_MENU[tm].submenu) {
            render += `<span class="tri">&#9660;</span><ul class="drop-down">`
            for (sub of TOP_MENU[tm].submenu) render += `<li><a href=""${sub.url || "#"}"">${sub.title}</a></li>`
            render += `</ul>`
        }
        render += `</li>`
        i++
    }
    top_nav.innerHTML = render
})()
