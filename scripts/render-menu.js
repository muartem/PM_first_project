(()=>{
    const menu = document.querySelector('.nav-items')
    let render = ""
    for (mn of MENU) {
        render += `<div>
            <a href="${mn.url || "#"}">${mn.title}</a>
            </div>`
    }
   menu.innerHTML = render
})()