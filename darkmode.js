const header = document.getElementById("header");
const darkmodebtn = document.getElementById("darkbtn");
const body = document.querySelector("body");
const section1 = document.querySelector(".section1contanier");
const titlecolorsection1 = document.getElementById("Username");
const section5 = document.getElementById("section5contanier");
const section5title = document.querySelector(".section5titletext")
const section5titletextalt = document.querySelector(".section5titletextalt");
const section5box1text = document.querySelector(".section5box1text");
const section5box2text = document.querySelector(".section5box2text");
const section5box3text = document.querySelector(".section5box3text");
const section5box4text = document.querySelector(".section5box4text");
const lighticonlink = document.querySelector(".lighticonlink");
const darkiconlink = document.querySelector(".darkiconlink");
const iconclass =document.querySelector(".material-symbols-outlined")

darkmodebtn.addEventListener("click",()=>{
    darkmodebtn.classList.toggle("dark");
    if(darkmodebtn.classList.contains("dark")){
        header.style=`background-color:#ffff`
        section1.style =`background-color: #ffff ; `;
        titlecolorsection1.style=`color:#080808`;
        section5.style= `background-color:rgb(255, 255, 255) ; color :#080808`;
        section5title.style=`color:#080808`
        section5titletextalt.style=`color:#080808`
        section5box1text.style=`color:#080808`
        section5box2text.style=`color:#080808`
        section5box3text.style=`color:#080808`
        section5box4text.style=`color:#080808`
        iconclass.innerHTML("dark_mode");
        
    }else{
        section1.style =`background-color:#080808  ; `;
        titlecolorsection1.style=`#ffff`;
        section5.style= `background-color:#080808 ; color:#ffff`;
        section5title.style=`color:#ffff`;
        header.style=`background-color:#080808`;
        section5titletextalt.style=`color:#080808`;
        section5box1text.style=`color:#ffff`;
        section5box2text.style=`color:#ffff`;
        section5box3text.style=`color:#ffffff`;
        section5box4text.style=`color:#fffff`;

        
        
    }
})