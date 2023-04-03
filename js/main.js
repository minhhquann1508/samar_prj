const backBtn = document.querySelector('.backToTopBtn') 
function showBackToTopBtn () {
    if(document.documentElement.scrollTop > 50) {
        backBtn.style.display = "block"
    }else {
        backBtn.style.display = "none"
    }
}
backBtn.onclick = () => {
    window.scrollTo(0,0)
}
window.addEventListener('scroll',showBackToTopBtn)