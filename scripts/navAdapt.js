if(window.innerWidth <= 910){
    let navEls = document.querySelectorAll(".nav")
    navEls.forEach(el => el.remove())
}
window.onresize = (e) => {
    if(window.innerWidth <= 910){
        let navEls = document.querySelectorAll(".nav")
        navEls.forEach(el => el.remove())
    }
}