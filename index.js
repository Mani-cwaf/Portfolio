//observes whether an element with the hidden class is visible on screen, and gives it the show class if it is.
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));

//creates typing text using the typing.js library
new Typed('.typing', {
    strings: ['Web Dev', 'Designer', 'Game Dev', 'Student'], typeSpeed: 85, backSpeed: 60, loop: true
});

const dmt = document.querySelector('.dark-mode-toggle i');
//gives the dark mode toggle element the active class to set the page to dark mode, and gives it a filled in bulb instead of a hollow one.
const Dark = () => {
    dmt.classList.add('active')
    dmt.classList.add('bxs-bulb')
    dmt.classList.remove('bx-bulb')
}
//vice versa for light mode
const Light = () => {
    dmt.classList.remove('active');
    dmt.classList.add('bx-bulb');
    dmt.classList.remove('bxs-bulb');
}
//function to detect the current browser theme to decide the default mode, and runs it on site load
const ThemeChecker = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        Dark();
    } else {
        Light();
    }
}
ThemeChecker();
//detects a change in the current browser theme to decide the default mode
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    ThemeChecker();
});
//changes site theme when toggle is clicked on
const dmtOnClick = () => {
    if (dmt.classList.contains('active')) {
        Light();
    } else {
        Dark();
    }
};
//makes mobile version's navbar menu toggle active on click
const nt = document.querySelector('.nav-toggle');
nt.addEventListener('click', () => {
    if (nt.classList.contains('active')) {
        nt.classList.remove('active');
    } else {
        nt.classList.add('active');
    }
});

//adds the active class to the tabs in the navbar that have been clicked on
const nls = document.querySelectorAll('.nav-link');
nls.forEach((e) => {
    e.addEventListener('click', () => {
        nls.forEach((j) => {
            j.classList.remove('active');
        })
        e.classList.add('active');
    });
})

//checks if the body of the page is clicked while the mobile navbar dropdown is active, to close the dropdown when the main body is focused on
const lm = document.querySelector('.l-main');
lm.addEventListener('click', () => {
    if (nt.classList.contains('active')) {
        nt.classList.remove('active');
    }
});

//adds the sticky class to the navbar and footer when the user starts to scroll
window.addEventListener('scroll', () => {
    if (this.scrollY > 0) {
        document.querySelector('.l-header').classList.add('sticky');
        document.querySelector('.footer').classList.add('sticky');
    } else {
        document.querySelector('.l-header').classList.remove('sticky');
        document.querySelector('.footer').classList.remove('sticky');
    }
});