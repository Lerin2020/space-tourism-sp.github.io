document.querySelector('.burger')
.addEventListener('click', () => {
    document.querySelector('.burger').classList.toggle('active')
    document.querySelector('.nav-list').classList.toggle('active')
})
console.log('scroll')
window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 && !(document.querySelector('.burger').classList.contains('active'))){
        document.querySelector('.navigation').style.opacity = '0'
    }else {
        document.querySelector('.navigation').style.opacity = ''
    }
})
window.addEventListener('scroll', () => {
    if ((document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) && document.querySelector('.burger').classList.contains('active')) {
        document.querySelector('#logo').style.visibility = 'hidden'
      } else if ((document.body.scrollTop < 50 || document.documentElement.scrollTop < 50) && !(document.querySelector('.burger').classList.contains('active'))) {
        document.querySelector('#logo').style.visibility = 'visible'
      }else {
        document.querySelector('#logo').style.visibility = 'visible'
      }
})