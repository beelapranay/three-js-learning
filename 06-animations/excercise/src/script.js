import './style.css';
import * as THREE from 'three';
import gsap from 'gsap';

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 'red' });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const sizes = {
    width: 800,
    height: 600
}

const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height);
camera.position.set(0, 0, 3);
scene.add(camera);

const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);

const clock = new THREE.Clock();
var time = Date.now();

// Using a library to animate the mesh's position
gsap.to(mesh.position, { duration: 1, delay: 1, y: 2 });

// Animation
const tick = () => {

    // Solution-1 to maintain same speed of frames
    const currentTime = Date.now();
    console.log(currentTime);
    const deltaTime = currentTime - time;
    time = currentTime;

    // Update Objects - Solution 1
    mesh.rotation.y += 0.001 * deltaTime;

    // Solution-2 to maintain same speed of frames
    const elapsedTime = clock.getElapsedTime();

    // Update Objects - Solution 2
    mesh.rotation.y = elapsedTime * 2 * Math.PI;

    // Moving in Circle
    mesh.position.x = Math.cos(elapsedTime);
    mesh.position.y = Math.sin(elapsedTime);

    // Render
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
}

tick();