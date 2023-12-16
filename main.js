import './style.css'

import * as THREE from 'three'

const scrollbar = document.querySelector(".scrollbar");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector(".bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth - ((64 + 5) * 2), window.innerHeight - ((64 + 5) * 2));

camera.position.setZ(30);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({ color: 0xFF6347 });
const torus = new THREE.Mesh(geometry, material);

const gridHelper = new THREE.GridHelper(200, 50);


function addStar() {
    const geometry = new THREE.SphereGeometry(THREE.MathUtils.randFloat(0.15, 0.25), 24, 24);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x,y,z);
    scene.add(star);
};

Array(300).fill().forEach(addStar);

function animate() {
    requestAnimationFrame(animate);

    var factor = scrollbar.scrollTop / 893.1839599609375;
    scene.rotation.x = 10 * factor;
    scene.rotation.y = 25 * factor;
    scene.rotation.z = 5 * factor;

    renderer.render(scene, camera);
};
animate();