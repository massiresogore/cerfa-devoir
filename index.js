console.log('i 💙 EISINE')
const scroll_indicator = document.querySelector('.scroll-indicator');
window.onscroll = function(){
    let offsetY =  document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (offsetY / height) * 100;
    p = scrolled;
    scroll_indicator.style.width = scrolled+"%";

    console.log(Math.ceil(scrolled));
    // scroll_indicator.textContent = Math.ceil(scrolled) + ""
}
