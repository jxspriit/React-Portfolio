import React , { useEffect, useRef } from 'react';
import * as THREE from 'three';

const threeBackground = () => {
    const mountRef = useRef(null);

    useEffect(()=>{
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth,window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);
        camera.position.z = 5;

        //create dense white stars for the background
        const starGeometry = new THREE.BufferGeometry();
        const starCount = 1500;
        const starPositions = new Float32Array(starCount * 3);
        for(let i = 0;i< starCount*3;i++){
            starPositions[i] = (Math.random()-0.5) * 100; //spread star over a larger area
        }
        starGeometry.setAttribute('position',new THREE.BufferAttribute(starPositions,3));
        const startMaterial = new THREE.PointsMaterial({color:0xffffff,size:0.1});
        const starField = new THREE.Points(starGeometry,startMaterial);
        scene.add(starField);

        //make star move or intract with the mouse (parralex effect)

        const handleMouseMove = (event) =>{
            const mouseX = (event.clientX / window.innerWidth) * 2 -1;
            const mouseY = -(event.clientY / window.innerHeight) * 2 +1;
            starField.rotation.x += mouseY * 0.01;
            starField.rotation.y += mouseX * 0.01;
        };
        window.addEventListener('mouseover',handleMouseMove);

        // handle window resize for responsivness

        const handleResize = () =>{
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width,height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };
        window.addEventListener('resize',handleResize);
        
        //render loop

        const animate = () => {
            requestAnimationFrame(animate);
            starField.rotation.x += 0.001; //slow rotation for movement
            starField.rotation.y += 0.001;
            renderer.render(scene,camera);    
        };
        animate();

    }, []);
  return (
    <div ref={mountRef}
    className="fixed inset-0 -z-1 w-full h-full"/>
      
    
  )
}

export default threeBackground
