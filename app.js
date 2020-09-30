const activeLink = ()=>{
    const url = window.location.href
    const pathname = url.split('#')[1]
    document.querySelectorAll('.active-link').forEach(link => link.className = 'nav-item')
    if(pathname === 'particles-js' || pathname===''){
        document.getElementById('home-link').className = 'active-link'
    }
    else if(pathname === 'projects'){
        document.getElementById('projects-link').className = 'active-link'
    }
}

window.addEventListener('hashchange', activeLink)


const sections = document.querySelectorAll('section')
const sectionOptions = {
    threshold: 0.2,
}
const sectionObserver = new IntersectionObserver(function(entries, sectionObserver){
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return;
        }
        else{
            const url = window.location.href.split("#")[0]
            window.location.href = url + (`#${entry.target.id}`)
        }
    })
}, sectionOptions)
sections.forEach(section => sectionObserver.observe(section))

// ----fade project section header
const faders = document.querySelectorAll('.fader')
const fadeOptions = {
    threshold: 1,
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

sliders.forEach(fader =>{
    projectsObserver.observe(fader)
})




