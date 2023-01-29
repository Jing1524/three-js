import * as Three from 'three'

export const SetLights = () => {
  const scene = new Three.Scene()

  const ambientLight = new Three.AmbientLight(0xffffff, 0.5)
  ambientLight.castShadow = true
  scene.add(ambientLight)

  const spotLight = new Three.SpotLight(0xffffff, 1)
  ambientLight.castShadow = true
  spotLight.position.set(0, 64, 32)
  scene.add(spotLight)
}
