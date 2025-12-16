import { useRef, useEffect } from "preact/hooks";
import * as THREE from "three";
import gsap from "gsap";

type BackgroundProps = {
  isMonochrome: boolean;
};

export default function Background({ isMonochrome }: BackgroundProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    let canvas: HTMLCanvasElement | null = null;

    if (mountRef.current) {
      canvas = renderer.domElement;
      mountRef.current.appendChild(canvas);
    }

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        u_time: { value: 0.0 },
        u_resolution: {
          value: new THREE.Vector2(window.innerWidth, window.innerHeight),
        },
        u_mode: { value: 0.0 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float;

        uniform float u_time;
        uniform vec2 u_resolution;
        uniform float u_mode; // 0 = color, 1 = mono
        varying vec2 vUv;

        float rand(vec2 co) {
          return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
        }

        float noise(vec2 st) {
          vec2 i = floor(st);
          vec2 f = fract(st);
          float a = rand(i);
          float b = rand(i + vec2(1.0, 0.0));
          float c = rand(i + vec2(0.0, 1.0));
          float d = rand(i + vec2(1.0, 1.0));
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
        }

        vec3 hueShift(vec3 color, float angle) {
          const mat3 toYIQ = mat3(
            0.299, 0.587, 0.114,
            0.596, -0.274, -0.322,
            0.211, -0.523, 0.312
          );
          const mat3 toRGB = mat3(
            1.0, 0.956, 0.621,
            1.0, -0.272, -0.647,
            1.0, -1.106, 1.703
          );

          vec3 yiq = toYIQ * color;
          float hue = atan(yiq.z, yiq.y);
          float chroma = sqrt(yiq.y * yiq.y + yiq.z * yiq.z);
          hue += angle;
          yiq.y = chroma * cos(hue);
          yiq.z = chroma * sin(hue);
          return toRGB * yiq;
        }

        void main() {
          float wave1 = sin(vUv.x * 10.0 + u_time * 1.0) * 0.25;
          float wave2 = sin(vUv.x * 20.0 - u_time * 1.5) * 0.25;
          float offset = wave1 + wave2;

          vec3 color1 = mix(vec3(0.4, 0.0, 1.0), vec3(1.5), u_mode);
          vec3 color2 = mix(vec3(0.1, 0.1, 0.2), vec3(1.0), u_mode);
          float blend = clamp(vUv.y + offset, 0.0, 1.0);
          vec3 baseColor = mix(color1, color2, blend);

          float noiseR = rand(vUv * u_resolution + u_time);
          float noiseG = rand(vUv * u_resolution + u_time * 2.0);
          float noiseB = rand(vUv * u_resolution + u_time * 3.0);
          vec3 grain = vec3(noiseR, noiseG, noiseB) - 0.5;
          vec3 grainColor = grain * 0.025;

          vec3 finalColor = baseColor + grainColor;

          if (fract(gl_FragCoord.y * 0.5) < 0.5) {
            finalColor *= 0.95;
          }

          float brightness = 0.85 + 0.15 * sin(u_time * 0.5);
          finalColor *= mix(1.0, brightness, u_mode);

          vec3 shifted = hueShift(finalColor, (u_time - 7.0) * 0.2);
          finalColor = mix(shifted, finalColor, u_mode); // only apply hue in color mode

          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,
    });

    materialRef.current = material;

    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    const animate = () => {
      material.uniforms.u_time.value = performance.now() * 0.001;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      material.uniforms.u_resolution.value.set(width, height);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      if (canvas && mountRef.current) {
        mountRef.current.removeChild(canvas);
      }
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  useEffect(() => {
    if (materialRef.current) {
      gsap.to(materialRef.current.uniforms.u_mode, {
        value: isMonochrome ? 1 : 0,
        duration: 1,
        ease: "power2.out",
      });
    }
  }, [isMonochrome]);

  return <div ref={mountRef} class="absolute inset-0" />;
}
