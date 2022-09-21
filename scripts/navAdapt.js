
let mn = document.querySelector("#mobile__nav"),
    clBtn = document.querySelector("#mobile__nav__close"),
    opBtn = document.querySelector("#mobile__nav__open")
    navEls = document.querySelectorAll(".nav-desc")

resHandler()
window.addEventListener("resize", resHandler)

function resHandler(){
    if(window.innerWidth <= 910){
        navEls.forEach(el => el.remove())
        mn.style.display = "flex"
        clBtn.style.display = "block"
        opBtn.style.display = "block"
    } else {
        mn.style.display = "none"
        clBtn.style.display = "none"
        opBtn.style.display = "none"
    }
}
    
    clBtn.addEventListener("click", ()=>{
        opBtn.style.opacity = "1"
        clBtn.style.zIndex = "2"
        mn.style.left="-100%"
        setTimeout(()=>{
            mn.style.opacity="0"
        },200)
    })

    opBtn.addEventListener("click", ()=>{
        clBtn.style.zIndex = "0"
        mn.style.left="0"
        mn.style.opacity="1"
        opBtn.style.opacity = "0"
    })
