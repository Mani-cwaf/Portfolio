import './style.css'

import * as THREE from 'three'


const showobserver = new IntersectionObserver((e => {
    e.forEach((e => {
        e.isIntersecting ? e.target.classList.add("show") : e.target.classList.remove("show")
    }))
}));
document.querySelectorAll(".hidden").forEach((e => showobserver.observe(e)));


const activeobserver = new IntersectionObserver((e => {
    e.forEach((e => {
        e.isIntersecting ? e.target.classList.add("active") : e.target.classList.remove("active")
    }))
}));
const sections = document.querySelectorAll(".section")
sections.forEach((e => activeobserver.observe(e)));

const content = document.querySelector('.content');

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector(".bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
const margin = window.innerWidth > 900 ? 64 : 42
renderer.setSize(window.innerWidth - ((margin + 5) * 2), window.innerHeight - ((margin + 5) * 2));

camera.position.setZ(30);

const stargeometry = new THREE.SphereGeometry(0.25, 24, 24);
const starmaterial = new THREE.MeshBasicMaterial({ color: 0x00bcf0 });
function addStars() {
    for (let i = 0; i < 200; i++) {
        const star = new THREE.Mesh(stargeometry, starmaterial);
    
        star.position.set(...Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(85)));
        star.material.shading = THREE.SmoothShading;
        star.material.transparent = true;
        star.material.opacity = 0.5;
        star.geometry.computeVertexNormals(true);
        scene.add(star);
    }
};

addStars();

renderer.render(scene, camera); 

window.smoothScroll = function(target) {    
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop - 75;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 200) return;
        c.scrollTop = a + (b - a) / 200 * i;
    console.log((a + (b - a)))

        setTimeout(function(){ scroll(c, a, b, i); }, 0.002 * (a + (b - a)));
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

const scrollstars = () => {
    var factor = content.scrollTop / (content.scrollHeight - content.clientHeight);
    scene.rotation.x = 5 * factor;
    scene.rotation.y = 13 * factor;
    scene.rotation.z = 2 * factor;
    renderer.render(scene, camera); 
}

content.addEventListener("scroll", () => {scrollstars()})