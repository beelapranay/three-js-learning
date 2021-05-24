// Scene, is like a container where we can put in objects, models, lights, etc. and at some point we ask Three.js to render out 
// that scene for us.

// Creating a scene
const scene = new THREE.Scene();

// Creating a Red cube and adding it to the scene created above
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 'red' });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes - Viewport width and height
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Creating and adding a camera to the scene to make it visible
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height);
camera.position.z = 3;
scene.add(camera);

// Creating the renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height); // If we change the values in the renderer, the canvas will readjust accordingly
renderer.render(scene, camera);