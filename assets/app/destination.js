const links = document.querySelectorAll('.body-nav-item')
const image = document.getElementById('image')
const moon = document.querySelector('.name')
const info = document.querySelector('#info')
const distance = document.querySelector('.distance')
const time = document.querySelector('.time')


links.forEach((link) => {
    link.addEventListener("click", () => {
      Animation();
    });
  });
  
  function Animation() {
    setTimeout(() => {
      distance.style.opacity = "0";
      distance.style.transform = 'translateY(2vw)'
      image.style.opacity = "0";
      image.style.transform = 'translateY(2vw)'
      moon.style.opacity = "0"
      moon.style.transform = 'translateY(2vw)'
       time.style.opacity = "0";
      time.style.transform = 'translateY(2vw)'
       info.style.opacity = "0";
      info.style.transform = 'translateY(2vw)'
    }, 0);
    setTimeout(() => {
      distance.style.opacity = "1";
      distance.style.transform = ''
      image.style.transform = ''
      image.style.opacity = '1'
      image.style.transform = ''
      moon.style.opacity ='1'
      moon.style.transform = ''
      time.style.opacity = '1'
      time.style.transform = ''
      info.style.opacity = '1'
      info.style.transform = ''
    }, 500);
  }
links.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        //prevent any default behavior
        e.preventDefault()
        //change active link
        updateClass(index, e)   
        //change text content of neccessary elments depending on which link is active
        //for when the first link is active
    if(links[0].firstElementChild.classList.contains('active')) {
        setTimeout(() => {
            image.src =  './assets/destination/image-moon.png';
            moon.textContent = 'moon'
            info.textContent = 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.'
            distance.textContent = '384,000 KM'
            time.textContent = '3 days'
        },250)
    }   //when the second link is active
    else if(links[1].firstElementChild.classList.contains('active')) {
        setTimeout(() => {
            image.src =  './assets/destination/image-mars.png';
            moon.textContent = 'mars'
            info.textContent = 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!'
            distance.textContent = '225 mil. km'
            time.textContent = '9 months'
        },250)
    } //when the third link is active
    else if(links[2].firstElementChild.classList.contains('active')) {
        setTimeout(() => {
            image.src =  './assets/destination/image-europa.png';
            moon.textContent = 'europa'
            info.textContent = 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.'
            distance.textContent = '628 mil. km'
            time.textContent = '3 years'
        },250)
    } //when the fourth link is active
    else if(links[3].firstElementChild.classList.contains('active')) {
        setTimeout(() => {
            image.src =  './assets/destination/image-titan.png';
            moon.textContent = 'titan'
            info.textContent = 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.'
            distance.textContent = '1.6 bil. km'
            time.textContent = '7 years'
        },250)
    } else {
        image.src =  './assets/destination/image-moon.png';
    }
})
})


function updateClass(index, e) {
    links.forEach((link, i) => {
        if( i < index + 1) {
            //remove active class from any element that might currently have it
            link.firstElementChild.classList.remove('active');
            //add active class to the clicked element
            e.target.firstElementChild.classList.add('active');
        }else {
            //remove active class from any element that might currently have it as a default function
            link.firstElementChild.classList.remove('active');
        }
    })
}