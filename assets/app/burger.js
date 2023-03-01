document.querySelector('.burger')
.addEventListener('click', () => {
    document.querySelector('.burger').classList.toggle('active')
    document.querySelector('.nav-list').classList.toggle('active')
})
window.addEventListener('scroll', () => {
    if(window.pageYOffset > 1 && !(document.querySelector('.burger').classList.contains('active'))){
        document.querySelector('.navigation').style.opacity = '0'
        console.log('not contains')
    }else if(window.pageYOffset > 1 && (document.querySelector('.burger').classList.contains('active'))) {
        document.querySelector('.navigation').style.opacity = '1'
        console.log('contains')
    }else {
      document.querySelector('.navigation').style.opacity = '1'
    }
})
window.addEventListener('scroll', () => {
    if ((window.pageYOffset > 1) && document.querySelector('.burger').classList.contains('active')) {
        document.querySelector('#logo').style.visibility = 'hidden'
      } else if ((window.pageYOffset < 1) && !(document.querySelector('.burger').classList.contains('active'))) {
        document.querySelector('#logo').style.visibility = 'visible'
      }else {
        document.querySelector('#logo').style.visibility = 'visible'
      }
})