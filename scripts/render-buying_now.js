(()=>{
    const nowArea = document.querySelector(".now").querySelector(".now__content")

    let render = ""
    for(b of BUYING_RIGHT_NOW){
        render +=
            `<div class="now__content-item">
            <a href="${b.url}" class="flex">
              <img src="${b.img||defaultIMG}" alt="" />
              <p>${b.title}</p>
            </a>
          </div>`

    }
    nowArea.innerHTML = render

})()