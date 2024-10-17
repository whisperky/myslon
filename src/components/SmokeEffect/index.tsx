import React, { useEffect, useRef } from "react";
import * as THREE from "three";
// import Stats from "three/addons/libs/stats.module";

const SmokeEffect: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let camera: THREE.PerspectiveCamera,
      scene: THREE.Scene,
      renderer: THREE.WebGLRenderer;

    const smokeParticles: THREE.Mesh[] = [];

    const clock = new THREE.Clock();

    const init = () => {
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(
        containerRef.current!.clientWidth,
        containerRef.current!.clientHeight
      );
      containerRef.current!.appendChild(renderer.domElement);

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        75,
        containerRef.current!.clientWidth / containerRef.current!.clientHeight,
        1,
        10000
      );
      camera.position.z = 1000;
      scene.add(camera);

      const light = new THREE.DirectionalLight(0xffffff, 0.7);
      light.position.set(-1, 0, 1);
      scene.add(light);

      const smokeTexture = new THREE.TextureLoader().load(
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png"
      );
      const smokeMaterial = new THREE.MeshLambertMaterial({
        color: 0xaf4724,
        map: smokeTexture,
        transparent: true,
      });
      const smokeGeo = new THREE.PlaneGeometry(300, 300);

      for (let p = 0; p < 300; p++) {
        const particle = new THREE.Mesh(smokeGeo, smokeMaterial);
        particle.position.set(
          Math.random() * 600 - 250,
          Math.random() * 500 - 250,
          Math.random() * 1000 - 100
        );
        particle.rotation.z = Math.random() * 360;
        scene.add(particle);
        smokeParticles.push(particle);
      }

      window.addEventListener("resize", onWindowResize, false);
    };

    const animate = () => {
      const delta = clock.getDelta();
      requestAnimationFrame(animate);
      evolveSmoke(delta);
      renderer.render(scene, camera);
    };

    const evolveSmoke = (delta: number) => {
      for (let i = 0; i < smokeParticles.length; i++) {
        smokeParticles[i].rotation.z += delta * 0.2;
      }
    };

    const onWindowResize = () => {
      if (!containerRef.current) return;
      camera.aspect =
        containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
    };

    init();
    animate();

    return () => {
      // Cleanup
      scene.remove(...scene.children);
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%", position: "absolute" }}
    />
  );
};

export default SmokeEffect;
