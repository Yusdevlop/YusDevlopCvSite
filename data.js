const data=[
    {
        image:"https://anea.az/assets/img/logo/logo-en.png",
        text:"Anea.az",
        link:"Anea.az"
    },
    {
        image:"https://weather-web-site-gamma.vercel.app/src/img/weather02-512.webp",
        text:"Weather Website",
        link:"weather-web-site-gamma.vercel.app"
    },
    {
        image:"https://weather-web-site-gamma.vercel.app/src/img/weather02-512.webp",
        text:"Weather Website",
        link:"weather-web-site-gamma.vercel.app"
    }




  
]


const section6 = document.querySelector(".section6rightleft");
section6.innerHTML = data.map(
    (item) => `
    <div class="section6right">
        <img src="${item.image}" alt="" class="section6rightimg">
        <p class="section6righttitletext">${item.text}</p>
        <a href="https://${item.link}" target="_blank">
            <button class="section6rightbtn">Know more ></button>
        </a>
    </div>`
).join("");





// section6right