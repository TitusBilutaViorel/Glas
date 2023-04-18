const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    reset: true
})

sr.reveal(`.home__info, .brand__container, .footer__container, .footer__info`)
sr.reveal(`.home__img`, {delay: 500, origin: 'bottom'})
sr.reveal(`.home__price`, {delay: 800, origin: 'bottom'})
sr.reveal(`.new__card`, {inverval: 200})
sr.reveal(`.swiper1`, {inverval: 100})
sr.reveal(`.swiper2`, {delay: 300, origin: 'left'})
sr.reveal(`.swiper3`, {delay: 500, origin: 'right'})
