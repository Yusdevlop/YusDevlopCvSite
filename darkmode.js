const darkmodebtn = document.getElementById("darkbtn");
const body = document.querySelector("body");
const section1 = document.querySelector(".section1contanier");
const titlecolorsection1 = document.getElementById("Username");
const section5 = document.getElementById("section5contanier");
const section5title = document.querySelector(".section5titletext")

darkmodebtn.addEventListener("click",()=>{
    darkmodebtn.classList.toggle("dark");
    console.log(titlecolorsection1)
    if(darkmodebtn.classList.contains("dark")){
        section1.style =`background-color: #ffff ; `;
        titlecolorsection1.style=`color:#080808`;
        section5.style= `background-color:rgb(212, 212, 212) ;`;
        section5title.style=`color:#080808`
        
    }else{
        section1.style =`background-color:#080808  ; `;
        titlecolorsection1.style=`#ffff`;

    }
})