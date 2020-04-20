//Variables for setup

let container;
let camera;
let renderer;
let scene;
let house;

function init() {
	container = document.querySelector('.scene');

	//Create Scene
	scene = new THREE.Scene();

	const fov = 35;
	const aspect = container.clientWidth / container.clientHeight;
	const near = 0.1;
	const far = 500;

	//Camera Setup
	camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
	camera.position.set(-50, 40, 350);

	//Renderer
	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(container.clientWidth, container.clientHeight);
	renderer.setPixelRatio(window.devicePixelRatio);

	container.appendChild(renderer.domElement);
	//Load Model
	let loader = new THREE.GLTFLoader();
	loader.load('./3D/scene.gltf', function(gltf) {
		scene.add(gltf.scene);
	});
}
