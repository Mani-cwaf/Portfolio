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
document.querySelectorAll(".section").forEach((e => activeobserver.observe(e)));


const scrollbar = document.querySelector(".scrollbar");

const content = document.querySelector('.content');

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector(".bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth - ((64 + 5) * 2), window.innerHeight - ((64 + 5) * 2));

camera.position.setZ(30);

const stargeometry = new THREE.SphereGeometry(0.25, 24, 24);
const starmaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
function addStars() {
    for (let i = 0; i < 200; i++) {
        const star = new THREE.Mesh(stargeometry, starmaterial);
    
        star.position.set(...Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(85)));
        scene.add(star);
    }
};

window.onload = () => {
    setTimeout(() => {
        addStars();
    }, 500);
}

function animate() { };
if (window.innerWidth > 900) {
    animate = () => {
        requestAnimationFrame(animate);

        var factor = scrollbar.scrollTop / (scrollbar.scrollHeight - scrollbar.clientHeight);
        scene.rotation.x = 5 * factor;
        scene.rotation.y = 13 * factor;
        scene.rotation.z = 2 * factor;

        content.scroll(0, (content.scrollHeight - content.clientHeight) * factor, "smooth");

        renderer.render(scene, camera);
    };
} else {
    animate = () => {
        requestAnimationFrame(animate);

        var factor = content.scrollTop / (content.scrollHeight - content.clientHeight);
        scene.rotation.x = 5 * factor;
        scene.rotation.y = 13 * factor;
        scene.rotation.z = 2 * factor;

        renderer.render(scene, camera);
    };
}
animate();