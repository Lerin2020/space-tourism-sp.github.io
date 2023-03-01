const buttons = document.querySelectorAll('.button')
const buttonsList = [...buttons]
const image = document.querySelector('.tech-image')
const header = document.querySelector('p.header')
const info = document.querySelector('p.info')
const media = window.matchMedia('(max-width: 768px)')
buttons.forEach((link) => {
    link.addEventListener("click", () => {
      Animation();
    });
  });
  
  function Animation() {
    setTimeout(() => {
      header.style.opacity = "0";
      header.style.transform = 'translateY(2vw)'
       info.style.opacity = "0";
      info.style.transform = 'translateY(2vw)'
    }, 0);
    setTimeout(() => {
      header.style.opacity = "1";
      header.style.transform = ''
      info.style.opacity = '1'
      info.style.transform = ''
    }, 500);
  }
function handleScreen(e) {
    if(e.matches) {
        if(buttonsList[0].classList.contains('chosen')){
        image.src = "./assets/technology/image-launch-vehicle-landscape.jpg"
        } else if (buttonsList[1].classList.contains('chosen')){
        image.src = "./assets/technology/image-spaceport-landscape.jpg"
        }else if (buttonsList[2].classList.contains('chosen')){
        image.src = "./assets/technology/image-space-capsule-landscape.jpg"
        }else {
        image.src = "./assets/technology/image-launch-vehicle-landscape.jpg"
        }
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                updateClasses(e)
        
                if(buttonsList[0].classList.contains('chosen')) {
                    image.src = "./assets/technology/image-launch-vehicle-landscape.jpg"
                    setTimeout(() => {
                        header.textContent = "Launch vehicle"
                        info.textContent =  "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
                    },250)
                    
                }else if(buttonsList[1].classList.contains('chosen')) {
                    image.src = "./assets/technology/image-spaceport-landscape.jpg"
                    setTimeout(() => {
                        header.textContent = "Spaceport"
                        info.textContent = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
                    },250)
                    
                }else if(buttonsList[2].classList.contains('chosen')) {
                    image.src = "./assets/technology/image-space-capsule-landscape.jpg"
                    setTimeout(() => {
                        header.textContent = "Space capsule"
                        info.textContent = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
                    },250)
                    
                }else {
                    image.src = "./assets/technology/image-launch-vehicle-landscape.jpg"
                    header.textContent = ''
                    info.textContent = ''
                }
            })
        }) 
        }else{
            if(buttonsList[0].classList.contains('chosen')){
                image.src = "./assets/technology/image-launch-vehicle-portrait.jpg"
                } else if (buttonsList[1].classList.contains('chosen')){
                image.src = "./assets/technology/image-spaceport-portrait.jpg"
                }else if (buttonsList[2].classList.contains('chosen')){
                image.src = "./assets/technology/image-space-capsule-portrait.jpg"
                }else {
                image.src = "./assets/technology/image-launch-vehicle-portrait.jpg"
                }
            buttons.forEach(button => {
                button.addEventListener('click', (e) => {
                    updateClasses(e)
            
                    if(buttonsList[0].classList.contains('chosen')) {
                        image.src = "./assets/technology/image-launch-vehicle-portrait.jpg"
                        setTimeout(() => {
                            header.textContent = "Launch vehicle"
                            info.textContent =  "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
                        },250)
                        
                    }else if(buttonsList[1].classList.contains('chosen')) {
                        image.src = "./assets/technology/image-spaceport-portrait.jpg"
                        setTimeout(() => {
                            header.textContent = "Spaceport"
                            info.textContent = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
                        },250)
                        
                    }else if(buttonsList[2].classList.contains('chosen')) {
                        image.src = "./assets/technology/image-space-capsule-portrait.jpg"
                        setTimeout(() => {
                            header.textContent = "Space capsule"
                            info.textContent = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
                        },250)
                        
                    }else {
                        image.src = "./assets/technology/image-launch-vehicle-portrait.jpg"
                        header.textContent = ''
                        info.textContent = ''
                    }
                })
            })
        }
    }


const updateClasses = (e) => {
    buttons.forEach(button => {
        if(button.classList.contains('chosen')) {
            button.classList.remove('chosen')
            e.target.classList.add('chosen')
        }else {
            button.classList.remove('chosen')
        }
    })
}

media.addListener(handleScreen)
handleScreen(media)