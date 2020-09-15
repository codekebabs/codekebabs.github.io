const fadeIn = () => {
    let fadeInComponent = document.querySelectorAll('.fadeIn');
    fadeInComponent.forEach(c => {
        c.classList.remove('uk-animation-fade', 'fadeIn', 'hidden');
        c.classList.add('uk-animation-fade');
    });
}

setTimeout(fadeIn, 1);