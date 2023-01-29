import * as Three from 'three'

import { TeapotGeometry } from 'three/examples/jsm/geometries/TeapotGeometry'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry'

export const GetGeometries = () => {
  const scene = new Three.Scene()
  const boxGeometry = new Three.BoxGeometry(5, 5, 5, 16, 16)
  const boxMaterial = new Three.MeshNormalMaterial({ wireframe: true })
  const boxMesh = new Three.Mesh(boxGeometry, boxMaterial)
  boxMesh.position.x = -10
  scene.add(boxMesh)

  //get familiarize with different geometries
  const cylinderGeometry = new Three.CylinderGeometry(5, 5, 10, 32, 16)
  const cylinderMaterial = new Three.MeshNormalMaterial({ wireframe: true })
  const cylinderMesh = new Three.Mesh(cylinderGeometry, cylinderMaterial)
  cylinderMesh.position.x = 8
  scene.add(cylinderMesh)

  const teapotGeometry = new TeapotGeometry(6, 16)
  const teapotMaterial = new Three.MeshNormalMaterial({ wireframe: true })
  const teapotMesh = new Three.Mesh(teapotGeometry, teapotMaterial)
  teapotMesh.position.x = -10
  teapotMesh.position.y = -10
  scene.add(teapotMesh)

  const roundedBoxGeometry = new RoundedBoxGeometry(5, 5, 5, 9, 0.5)
  const roundedBoxMaterial = new Three.MeshNormalMaterial({ wireframe: true })
  const roundedBoxMesh = new Three.Mesh(roundedBoxGeometry, roundedBoxMaterial)
  roundedBoxMesh.position.x = 8
  roundedBoxMesh.position.y = -8
  scene.add(roundedBoxMesh)
}
