import './style.css'
import * as THREE from 'three';

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight);
camera.position.z = 1;
camera.position.x = Math.PI/2;

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render( scene, camera);

// Objects
const vertices = [];

for ( let i = 0; i < 10000; i ++ ) {
	const x = THREE.MathUtils.randFloatSpread( 2000 );
	const y = THREE.MathUtils.randFloatSpread( 2000 );
	const z = THREE.MathUtils.randFloatSpread( 2000 );
	vertices.push( x, y, z );
};

const geometry = new THREE.BufferGeometry();
geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
// geometry.setAttribute( 'velocity', new THREE.Float32BufferAttribute(0, 1))
// geometry.setAttribute( 'acceleration', new THREE.Float32BufferAttribute(0.02, 1))

// Material
const material = new THREE.PointsMaterial( { color: 0x888888 } );

const points = new THREE.Points( geometry, material );

scene.add(points)

// Animate
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();