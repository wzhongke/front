var THREE = require('three');

var scene = new THREE.Scene();

var geometry = new THREE.BoxGeometry(100, 100, 100);
var material = new THREE.MeshLambertMaterial({color: 0xff000});
var mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

var light = new THREE.PointLight(0xfffff);
light.position.set(300, 400, 200);
scene.add(light);
var camera = new THREE.PerspectiveCamera(40, 800/600, 1, 1000);
camera.position.set(200, 200, 200);
camera.lookAt(scene.position);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(800, 600);

document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);
