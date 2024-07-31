import * as THREE from 'three';
import { OrbitControls } from '/node_modules/three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100);
const canvas = document.querySelector("#myCanvas");
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
// renderer.setSize(canvas.width, canvas.height);
camera.position.z = 28;

// renderer.setSize(window.innerWidth/2, window.innerHeight/1.7);
renderer.setClearColor(0x000000, 0);
const controls = new OrbitControls(camera, renderer.domElement);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0; 
const texture = new THREE.TextureLoader().load('images/PhinKurniawan.jpg');
texture.minFilter = THREE.LinearFilter;
texture.magFilter = THREE.LinearFilter;
texture.anisotropy = renderer.capabilities.getMaxAnisotropy();   

texture.generateMipmaps = false; 
const materials = [
    new THREE.MeshStandardMaterial({ map: texture, roughness: 0.5 }), // Example values
    new THREE.MeshStandardMaterial({ map: texture, roughness: 0.5, emissive: 0x111155, emissiveIntensity: 0.1 }),
    new THREE.MeshStandardMaterial({ map: texture, roughness: 0.5, emissive: 0x111155, emissiveIntensity: 0.1 }),
    new THREE.MeshStandardMaterial({ map: texture, roughness: 0.5, emissive: 0x111155, emissiveIntensity: 0.1 }),
    new THREE.MeshStandardMaterial({ map: texture, roughness: 0.5, emissive: 0x111155, emissiveIntensity: 0.1 }),
    new THREE.MeshStandardMaterial({ map: texture, roughness: 0.5, emissive: 0x111155, emissiveIntensity: 0.1 })
];

const geometry = new THREE.BoxGeometry(12,14, 12);
const cube = new THREE.Mesh(geometry, materials);
scene.add(cube);
const directionalLight = new THREE.DirectionalLight(0xffffff, 2);  // Increase intensity
const ambientLight = new THREE.AmbientLight(0xffffff, 2);     // Adjust to preference

scene.add(directionalLight);
scene.add(ambientLight);

const draw = () => {
    const canvasWidth = canvas.clientWidth;  // Get width from CSS
    const canvasHeight = canvas.clientHeight; // Get height from CSS
    if (canvas.width !== canvasWidth || canvas.height !== canvasHeight) {
        // Update canvas attributes if dimensions have changed
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        renderer.setSize(canvasWidth, canvasHeight, false); // Update renderer size
        camera.aspect = canvasWidth / canvasHeight;
        camera.updateProjectionMatrix();
    }
    // cube.rotation.x += 0.01;
    cube.rotation.y += Math.sin(Date.now() * 0.001) * 0.01;
    // cube.rotation.z += 0.01;
    controls.update();
    requestAnimationFrame(draw);
    renderer.render(scene, camera);
}

// window.addEventListener('resize', () => {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// });

draw();
