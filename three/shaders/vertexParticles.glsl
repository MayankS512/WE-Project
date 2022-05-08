varying vec2 vUV;

void main() {
  vUV = uv;

  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_PointSize = 1000.0 * (1.0 / -viewPosition.z);
  gl_Position = projectedPosition;
}