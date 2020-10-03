const form = document.querySelector('form')

const emailRegex = /\S+@\S+\.\S+/

const validateEmail = (email) =>{
    return emailRegex.test(email)  
}

form.addEventListener('submit', e =>{
    e.preventDefault()
    const email = document.getElementById('email')
    const message = document.getElementById('message').value
    const confirmation = document.querySelector('.confirmation-message')

    if(validateEmail(email.value)){
        const text = {
            message: message,
            from: email.value
        }
        console.log(email.value)
    
        axios.post(`/email`, {
            email: email.value,
            text: JSON.stringify(text)
        })
        .then(() => {
            confirmation.classList.add('show-confirmation')
            form.reset()
            email.addEventListener('focus', ()=>{
                confirmation.classList.remove('show-confirmation')
            })
        })
        .catch(err => console.log(err))
    }
    else{
        email.classList.add('invalid')
        email.addEventListener('focus', ()=>{
            email.classList.remove('invalid')
            confirmation.classList.remove('show-confirmation')
        })
    }
})


// section observer to change active links
const sections = document.querySelectorAll('section')
const sectionOptions = {
    threshold: 0.2,
    rootMargin: '20px 20px -20px -20px'
}
const sectionObserver = new IntersectionObserver(function(entries, sectionObserver){
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return;
        }
        else{
            document.querySelectorAll('.nav-item').forEach(link => {
                link.classList.remove('active-link')
                const id = link.id.split('-')[0]
                if(id === entry.target.id){
                    link.classList.add('active-link')                
                }
            })
            
        }
    })
}, sectionOptions)
sections.forEach(section => sectionObserver.observe(section))

// ----fade section header
const faders = document.querySelectorAll('.fader')
const fadeOptions = {
    threshold: 0.75,
    rootMargin: '0px 0px -50px 0px'
}
const faderObserver = new IntersectionObserver(function(entries, faderObserver){
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return;
        }
        else{
            entry.target.classList.add("fade-in")
            faderObserver.unobserve(entry.target)
        }
    })
}, fadeOptions)

faders.forEach(fader =>{
    faderObserver.observe(fader)
})


// ----fade projects
const sliders = document.querySelectorAll('.slider')
const projectAppearOptions =  {
    threshold: 0.5,
    rootMargin: "0px 0px -50px 0px"
}
const projectsObserver = new IntersectionObserver(function(entries, projectsObserver){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }
        else{
            entry.target.classList.add("appear")
            projectsObserver.unobserve(entry.target)
            console.log('appear')
        }
    })
}, projectAppearOptions)

sliders.forEach(slider =>{
    projectsObserver.observe(slider)
})

// toggle navbar
const toggleButton = document.querySelector('.toggle-button')
const middleBar = document.querySelector('.middle-bar')
const firstBar = document.querySelector('.first-bar')
const lastBar = document.querySelector('.last-bar')
const navLinks = document.querySelector('.nav-links')

toggleButton.addEventListener('click', ()=>{
    toggleButton.classList.toggle('show')
    navLinks.classList.toggle('show')
    firstBar.classList.toggle('show')
    lastBar.classList.toggle('show')
    middleBar.classList.toggle('show')
})




