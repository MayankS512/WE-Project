import vertexShader from "./shaders/vertex.glsl"
import particleShader from "./shaders/vertexParticles.glsl"
import fragmentShader from "./shaders/fragment.glsl"
import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";


const CustomMaterial = shaderMaterial(
  {
    uTime: 0,
  },
  vertexShader,
  fragmentShader
)

extend({ CustomMaterial })

const Box = () => {
  return ( 
    <mesh>
      <planeBufferGeometry />
      <customMaterial />
    </mesh>
   );
}
 
export default Box;
