import React, { useEffect, useRef } from 'react';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { IoSchool } from 'react-icons/io5';
import gsap from 'gsap';
import { Renderer, Camera, Transform, Program, Mesh, Plane, Vec2 } from 'ogl';
import max from '../image/press.jpg';

export default function AboutMassive() {
  const rootRef = useRef(null)
  const canvasWrapRef = useRef(null)
  const imageRef = useRef(null)
  const textRef = useRef(null)
  const buttonsRef = useRef([])

  // Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(rootRef.current, { opacity: 0, y: 24, duration: 0.8, ease: 'power3.out' })
      gsap.from(imageRef.current, { opacity: 0, scale: 0.9, x: -24, duration: 0.9, ease: 'power3.out', delay: 0.1 })
      gsap.from(textRef.current, { opacity: 0, x: 24, duration: 0.9, ease: 'power3.out', delay: 0.15 })
      gsap.from(buttonsRef.current, { opacity: 0, y: 14, duration: 0.6, stagger: 0.08, ease: 'back.out(1.6)', delay: 0.35 })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  // OGL Background
  useEffect(() => {
    let renderer, gl, camera, scene, mesh, prog, rafId
    let time = 0
    const dpr = Math.min(2, (typeof window !== 'undefined' && window.devicePixelRatio) || 1)
    const el = canvasWrapRef.current
    if (!el) return

    try {
      renderer = new Renderer({ dpr, alpha: true, antialias: true })
      gl = renderer.gl
      gl.clearColor(0, 0, 0, 1)
      el.appendChild(gl.canvas)

      camera = new Camera(gl, { fov: 24 })
      camera.position.set(0, 0, 6)
      scene = new Transform()

      const setSize = () => {
        const { clientWidth: w, clientHeight: h } = el
        renderer.setSize(w, h)
        camera.perspective({ aspect: w / Math.max(1, h) })
      }
      setSize()
      window.addEventListener('resize', setSize)

      const vertex = /* glsl */ `
        precision highp float;
        attribute vec2 uv;
        attribute vec3 position;
        uniform mat4 projectionMatrix;
        uniform mat4 viewMatrix;
        uniform mat4 modelMatrix;
        uniform float uTime;
        uniform vec2 uMouse;
        varying vec2 vUv;
        varying float vNoise;
        float hash(vec2 p){
          p = 50.0 * fract(p * 0.3183099 + vec2(0.1, 0.7));
          return -1.0 + 2.0 * fract(p.x * p.y * (p.x + p.y));
        }
        float noise(in vec2 p){
          vec2 i = floor(p);
          vec2 f = fract(p);
          vec2 u = f*f*(3.0-2.0*f);
          return mix(mix(hash(i + vec2(0.0,0.0)), hash(i + vec2(1.0,0.0)), u.x),
                     mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0,1.0)), u.x), u.y);
        }
        void main(){
          vUv = uv;
          vec3 pos = position;
          float n = noise(uv * 3.0 + uTime * 0.05) * 0.5 + 0.5;
          vNoise = n;
          pos.z += n * 0.8;
          pos.x += (uMouse.x - 0.5) * 0.3 * (uv.y - 0.5);
          pos.y += (uMouse.y - 0.5) * 0.3 * (uv.x - 0.5);
          gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(pos, 1.0);
        }
      `

      const fragment = /* glsl */ `
        precision highp float;
        varying vec2 vUv;
        varying float vNoise;
        uniform float uTime;
        vec3 ramp(float t){
          vec3 a = vec3(0.0,0.0,0.0);
          vec3 b = vec3(0.1,0.1,0.1);
          return mix(a,b,smoothstep(0.0,1.0,t));
        }
        void main(){
          float t = vNoise;
          float band = smoothstep(0.46,0.5,abs(sin(uTime*0.3)-(vUv.y-0.5)));
          vec3 col = ramp(t) + band*0.05;
          float d = distance(vUv, vec2(0.5));
          float vig = smoothstep(0.9,0.3,d);
          col *= vig;
          gl_FragColor = vec4(col,0.95);
        }
      `

      prog = new Program(gl, {
        vertex,
        fragment,
        uniforms: {
          uTime: { value: 0 },
          uMouse: { value: new Vec2(0.5, 0.5) },
        },
        transparent: true,
      })

      const geometry = new Plane(gl, { width: 12, height: 8, widthSegments: 200, heightSegments: 120 })
      mesh = new Mesh(gl, { geometry, program: prog })
      mesh.setParent(scene)

      const onPointer = (e) => {
        const r = gl.canvas.getBoundingClientRect()
        const x = ((e.clientX - r.left) / r.width)
        const y = ((e.clientY - r.top) / r.height)
        prog.uniforms.uMouse.value.set(x, 1.0 - y)
      }
      window.addEventListener('pointermove', onPointer)

      const update = () => {
        time += 0.016
        prog.uniforms.uTime.value = time
        renderer.render({ scene, camera })
        rafId = requestAnimationFrame(update)
      }
      update()

      return () => {
        cancelAnimationFrame(rafId)
        window.removeEventListener('pointermove', onPointer)
        window.removeEventListener('resize', setSize)
        if (gl && gl.canvas && gl.canvas.parentNode) gl.canvas.parentNode.removeChild(gl.canvas)
      }
    } catch (err) {
      console.warn('OGL init failed:', err)
    }
  }, [])

  const buttons = [
    { icon: <IoSchool size={28} />, text: 'EdTech Developer', variant: 'primary' },
    { icon: <AiOutlineUser size={28} />, text: 'System Architect', variant: 'outline' },
    { icon: <FaChalkboardTeacher size={28} />, text: 'School Solutions', variant: 'primary' },
  ]

  return (
    <section id="About" ref={rootRef} className="relative w-full overflow-hidden bg-black text-white">
      {/* Background */}
      <div ref={canvasWrapRef} className="absolute inset-0 -z-10 pointer-events-none" aria-hidden />
      <div className="absolute inset-0 -z-20 bg-black" />

      {/* Content */}
      <div className="mx-auto flex max-w-7xl flex-col md:flex-row items-center justify-between gap-12 px-6 py-20">
        
        {/* Image Panel */}
        <div
          ref={imageRef}
          className="relative w-full md:w-[460px] rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 p-1 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
          }}
        >
          <img
            src={max}
            alt="About me"
            className="w-full h-[80vh] object-cover rounded-[2rem]"
          />
        </div>

        {/* Text Panel */}
        <div ref={textRef} className="flex flex-col gap-6 max-w-2xl">
          <h2 className="font-mono text-4xl md:text-5xl text-[#CF1F1F]">About Me</h2>
          <p className="font-mono text-base text-white/80 leading-relaxed">
            I&apos;m <span className="font-bold text-[#CF1F1F]">Abdulkadir Mubarak</span>, a professional software developer specializing in <span className="font-bold">EdTech solutions</span> and <span className="font-bold">School Management Systems</span>. I create robust platforms that empower schools, teachers, and students through technology.
          </p>
          <p className="font-mono text-base text-white/80 leading-relaxed">
            My expertise includes designing end-to-end digital solutions for school administration, e-learning integration, attendance tracking, grading systems, parent-teacher communication, and seamless online enrollment. Every project I undertake is aimed at modernizing education and improving efficiency in school operations.
          </p>
          <p className="font-mono text-base text-white/80 leading-relaxed">
            With strong technical skills and a deep understanding of the educational sector, I ensure the platforms I develop are secure, scalable, and user-friendly. Beyond development, I collaborate closely with educators and stakeholders to translate their needs into actionable, innovative solutions.
          </p>

          {/* Buttons */}
          <div className="mt-4 flex flex-wrap items-center justify-center md:justify-start gap-4">
            {buttons.map((btn, i) => (
              <button
                key={i}
                ref={(el) => (buttonsRef.current[i] = el)}
                className={[
                  'group inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-mono text-[16px] transition-transform duration-200',
                  btn.variant === 'primary'
                    ? 'bg-[#CF1F1F] text-white hover:scale-[1.02] hover:bg-black'
                    : 'border border-white/30 bg-transparent text-white hover:scale-[1.02] hover:bg-white/10',
                ].join(' ')}
              >
                <span className="transition-transform duration-200 group-hover:-translate-y-0.5">{btn.icon}</span>
                {btn.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
