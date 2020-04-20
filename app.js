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

	camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

	camera.position.set(-50, 40, 350);
}
