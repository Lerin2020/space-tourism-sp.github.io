document.querySelector('.burger')
.addEventListener('click', () => {
    document.querySelector('.burger').classList.toggle('active')
    document.querySelector('.nav-list').classList.toggle('active')
})