// 3D Portfolio Experience Script
// 3D Scene Setup
let scene, camera, renderer, cube, particles;

function init3D() {
  // Scene
  scene = new THREE.Scene();
  
  // Camera
  camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  camera.position.z = 5;
  
  // Renderer
  const canvas = document.getElementById('three-canvas');
  renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  renderer.setSize(600, 500);
  renderer.setClearColor(0x000000, 0);
  
  // Responsive sizing
  function updateSize() {
    const container = document.querySelector('.animation-container');
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }
  
  updateSize();
  window.addEventListener('resize', updateSize);
  
  // Create rotating cube with glow effect
  const geometry = new THREE.BoxGeometry(2, 2, 2);
  const material = new THREE.MeshPhongMaterial({ 
    color: 0x64ffda,
    transparent: true,
    opacity: 0.8,
    shininess: 100
  });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  
  // Add wireframe
  const wireframe = new THREE.WireframeGeometry(geometry);
  const line = new THREE.LineSegments(wireframe);
  line.material.color.setHex(0xffffff);
  line.material.transparent = true;
  line.material.opacity = 0.3;
  cube.add(line);
  
  // Particles
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 1000;
  const posArray = new Float32Array(particlesCount * 3);
  
  for(let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 20;
  }
  
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.02,
    color: 0x64ffda,
    transparent: true,
    opacity: 0.6
  });
  
  particles = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particles);
  
  // Lighting
  const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
  scene.add(ambientLight);
  
  const pointLight = new THREE.PointLight(0x64ffda, 1, 100);
  pointLight.position.set(10, 10, 10);
  scene.add(pointLight);
  
  // Animation loop
  animate();
}

function animate() {
  requestAnimationFrame(animate);
  
  // Rotate cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  
  // Rotate particles
  particles.rotation.y += 0.002;
  
  renderer.render(scene, camera);
}

// Start button interaction
function initStartButton() {
  document.getElementById('startExperience').addEventListener('click', function(e) {
    e.preventDefault();
    // Add your navigation logic here
    alert('3D Portfolio Experience Starting...');
  });
}

// Initialize when page loads
window.addEventListener('load', function() {
  init3D();
  initStartButton();
});