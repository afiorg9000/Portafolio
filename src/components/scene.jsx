import './styles/scene.css';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import FemaleModel from '../assets/brunette_girl_with_underwear.gltf';

/*This is the female model avatar creation and her specific scene creation*/

function FemaleScene() {
	const canvasRef = useRef();

	useEffect(() => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(30, 500 / 700, 1, 1000);
		camera.position.set(0, 0.9, 4);

		const renderer = new THREE.WebGLRenderer({
			canvas: canvasRef.current,
			alpha: true,
			antialias: true,
		});
		renderer.setSize(450, 600);

		const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
		hemiLight.position.set(0, 100, 0);
		scene.add(hemiLight);

		const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
		dirLight.position.set(0, 100, 100);
		scene.add(dirLight);

		let Mesh,
			loader = new GLTFLoader();

		const dracoLoader = new DRACOLoader();
		dracoLoader.setDecoderPath(
			'../node_modules/three/examples/js/libs/draco/gltf/'
		);
		dracoLoader.preload();
		loader.setDRACOLoader(dracoLoader);

		loader.load(FemaleModel, gltf => {
			console.log(gltf);
			Mesh = gltf.scene;
			Mesh.scale.set(1, 1, 1);
			scene.add(Mesh);
		});

		const animate = () => {
			requestAnimationFrame(animate);
			if (Mesh && Mesh.rotation) {
				Mesh.rotation.y -= 0.0025;
			}
			renderer.setPixelRatio(2);
			renderer.outputEncoding = THREE.sRGBEncoding;
			renderer.render(scene, camera);
		};
		animate();
	}, []);
	return <canvas ref={canvasRef} id='gradientWindow' />;
}

/*This is the male model avatar creation and his specific scene creation*/

function MaleScene() {
	const canvasRef = useRef();

	useEffect(() => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(30, 500 / 700, 1, 1000);
		camera.position.set(0, 0.9, 4);

		const renderer = new THREE.WebGLRenderer({
			canvas: canvasRef.current,
			alpha: true,
			antialias: true,
		});
		renderer.setSize(450, 600);

		const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
		hemiLight.position.set(0, 100, 0);
		scene.add(hemiLight);

		const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
		dirLight.position.set(0, 100, 100);
		scene.add(dirLight);

		let Mesh,
			loader = new GLTFLoader();

		const dracoLoader = new DRACOLoader();
		dracoLoader.setDecoderPath(
			'../node_modules/three/examples/js/libs/draco/gltf/'
		);
		dracoLoader.preload();
		loader.setDRACOLoader(dracoLoader);

		loader.load(FemaleModel, gltf => {
			console.log(gltf);
			Mesh = gltf.scene;
			Mesh.scale.set(1, 1, 1);
			scene.add(Mesh);
		});

		const animate = () => {
			requestAnimationFrame(animate);
			if (Mesh && Mesh.rotation) {
				Mesh.rotation.y -= 0.0025;
			}
			renderer.setPixelRatio(2);
			renderer.outputEncoding = THREE.sRGBEncoding;
			renderer.render(scene, camera);
		};
		animate();
	}, []);
	return <canvas ref={canvasRef} id='gradientWindow' />;
}

/*This is the Sofia model avatar creation and her specific scene creation*/

function SofiaScene() {
	const canvasRef = useRef();

	useEffect(() => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(30, 500 / 700, 1, 1000);
		camera.position.set(0, 0.9, 4);

		const renderer = new THREE.WebGLRenderer({
			canvas: canvasRef.current,
			alpha: true,
			antialias: true,
		});
		renderer.setSize(450, 600);

		const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
		hemiLight.position.set(0, 100, 0);
		scene.add(hemiLight);

		const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
		dirLight.position.set(0, 100, 100);
		scene.add(dirLight);

		let Mesh,
			loader = new GLTFLoader();

		const dracoLoader = new DRACOLoader();
		dracoLoader.setDecoderPath(
			'../node_modules/three/examples/js/libs/draco/gltf/'
		);
		dracoLoader.preload();
		loader.setDRACOLoader(dracoLoader);

		loader.load(FemaleModel, gltf => {
			console.log(gltf);
			Mesh = gltf.scene;
			Mesh.scale.set(1, 1, 1);
			scene.add(Mesh);
		});

		const animate = () => {
			requestAnimationFrame(animate);
			if (Mesh && Mesh.rotation) {
				Mesh.rotation.y -= 0.0025;
			}
			renderer.setPixelRatio(2);
			renderer.outputEncoding = THREE.sRGBEncoding;
			renderer.render(scene, camera);
		};
		animate();
	}, []);
	return <canvas ref={canvasRef} id='gradientWindow' />;
}

/*This is the Andrew model avatar creation and his specific scene creation*/

function AndrewScene() {
	const canvasRef = useRef();

	useEffect(() => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(30, 500 / 700, 1, 1000);
		camera.position.set(0, 0.9, 4);

		const renderer = new THREE.WebGLRenderer({
			canvas: canvasRef.current,
			alpha: true,
			antialias: true,
		});
		renderer.setSize(450, 600);

		const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
		hemiLight.position.set(0, 100, 0);
		scene.add(hemiLight);

		const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
		dirLight.position.set(0, 100, 100);
		scene.add(dirLight);

		let Mesh,
			loader = new GLTFLoader();

		const dracoLoader = new DRACOLoader();
		dracoLoader.setDecoderPath(
			'../node_modules/three/examples/js/libs/draco/gltf/'
		);
		dracoLoader.preload();
		loader.setDRACOLoader(dracoLoader);

		loader.load(FemaleModel, gltf => {
			console.log(gltf);
			Mesh = gltf.scene;
			Mesh.scale.set(1, 1, 1);
			scene.add(Mesh);
		});

		const animate = () => {
			requestAnimationFrame(animate);
			if (Mesh && Mesh.rotation) {
				Mesh.rotation.y -= 0.0025;
			}
			renderer.setPixelRatio(2);
			renderer.outputEncoding = THREE.sRGBEncoding;
			renderer.render(scene, camera);
		};
		animate();
	}, []);
	return <canvas ref={canvasRef} id='gradientWindow' />;
}

export { FemaleScene, MaleScene, SofiaScene, AndrewScene };
