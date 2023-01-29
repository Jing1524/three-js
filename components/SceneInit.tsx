import * as Three from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'three/examples/jsm/libs/stats.module'
import { createRef, useEffect, useRef } from 'react'

export default class SceneInit {
  canvasRef: any
  scene: any
  camera: any
  renderer: any
  fov: number
  nearPlane: number
  farPlane: number
  canvasId: any
  clock: any
  stats: any
  controls: any
  ambientLight: any
  directionalLight: any
  constructor(canvasId: any) {
    this.canvasRef = createRef()
    // NOTE: Core components to initialize Three.js app.
    this.scene = undefined
    this.camera = undefined
    this.renderer = undefined

    // NOTE: Camera params
    this.fov = 45
    this.nearPlane = 1
    this.farPlane = 1000
    this.canvasId = canvasId

    // NOTE: Additional components.
    this.clock = undefined
    this.stats = undefined
    this.controls = undefined

    // NOTE: Lighting is basically required.
    this.ambientLight = undefined
    this.directionalLight = undefined
  }

  initialize() {
    this.scene = new Three.Scene()
    this.camera = new Three.PerspectiveCamera(
      this.fov, //field of view
      window.innerWidth / window.innerHeight,
      1,
      1000
    )
    this.camera.position.z = 48

    const canvas = document.getElementById(this.canvasId)
    this.renderer = new Three.WebGLRenderer({ canvas, antialias: true })

    this.renderer.setSize(window.innerWidth, window.innerHeight)
    // this.renderer.shadowMap.enabled = true;
    document.body.appendChild(this.renderer.domElement)

    // ambient light which is for the whole scene
    this.ambientLight = new Three.AmbientLight(0xffffff, 0.5)
    this.ambientLight.castShadow = true
    this.scene.add(this.ambientLight)

    // directional light - parallel sun rays
    this.directionalLight = new Three.DirectionalLight(0xffffff, 1)
    // this.directionalLight.castShadow = true;
    this.directionalLight.position.set(0, 32, 64)
    this.scene.add(this.directionalLight)
  }

  animate() {
    // NOTE: Window is implied.
    // requestAnimationFrame(this.animate.bind(this));
    window.requestAnimationFrame(this.animate.bind(this))
    this.render()
    this.stats.update()
    this.controls.update()
  }

  render() {
    // NOTE: Update uniform data on each render.
    // this.uniforms.u_time.value += this.clock.getDelta();
    this.renderer.render(this.scene, this.camera)
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(window.innerWidth, window.innerHeight)
  }
}
