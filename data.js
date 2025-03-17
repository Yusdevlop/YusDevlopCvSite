const data=[
    {
        image:"https://i.pinimg.com/originals/d8/10/55/d81055d32cf810a6d527b5eb9ae20f08.png",
        text:"Search Program",
        link:"search-program.vercel.app"
    },
    
    {
        image:"https://weather-web-site-gamma.vercel.app/src/img/weather02-512.webp",
        text:"Weather Website",
        link:"weather-web-site-gamma.vercel.app"
    },
    {
        image:"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Salam%20Aleykum",
        text:"Qr Generator",
        link:"qr-generator-lovat-two.vercel.app/"
    },




  
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