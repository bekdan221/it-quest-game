// 1. Сцена и Рендерер
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111); // Темно-серый фон

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 2. Свет (чтобы не было черноты)
const ambientLight = new THREE.AmbientLight(0xffffff, 1.5); 
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(5, 10, 5);
scene.add(directionalLight);

// 3. Корпус машины
const geometry = new THREE.BoxGeometry(2, 0.5, 1);
const material = new THREE.MeshStandardMaterial({ 
    color: 0x3333ff, // Синий цвет
    metalness: 0.7, 
    roughness: 0.3 
});
const carBody = new THREE.Mesh(geometry, material);
scene.add(carBody);

// 4. Красный маркер (чтобы видеть объем)
const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.3),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
sphere.position.set(0, 0.8, 0); // Ставим над корпусом
carBody.add(sphere); // Привязываем к корпусу

camera.position.z = 5;

// 5. Анимация
function animate() {
    requestAnimationFrame(animate);
    carBody.rotation.y += 0.01;
    carBody.rotation.x = 0.2; // Немного наклоним для вида
    renderer.render(scene, camera);
}
animate();
