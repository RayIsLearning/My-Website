function addShaderScript(id, type, source) {
  const script = document.createElement("script");
  script.id = id;
  script.type = type;
  script.textContent = source;
  document.body.appendChild(script);
}

// Vertex Shader
addShaderScript("vs", "notjs", `
uniform mat4 u_viewProjection;
uniform vec3 u_lightWorldPos;
uniform mat4 u_viewInverse;

attribute vec4 instanceColor;
attribute mat4 instanceWorld;
attribute vec4 position;
attribute vec3 normal;

varying vec4 v_position;
varying vec2 v_texCoord;
varying vec3 v_normal;
varying vec3 v_surfaceToLight;
varying vec3 v_surfaceToView;
varying vec4 v_color;

void main() {
  v_color = instanceColor;
  vec4 worldPosition = instanceWorld * position;
  v_position = u_viewProjection * worldPosition;
  v_normal = (instanceWorld * vec4(normal, 0)).xyz;
  v_surfaceToLight = u_lightWorldPos - worldPosition.xyz;
  v_surfaceToView = u_viewInverse[3].xyz - worldPosition.xyz;
  gl_Position = v_position;
}
`);

// Fragment Shader
addShaderScript("fs", "notjs", `
precision mediump float;

varying vec4 v_position;
varying vec3 v_normal;
varying vec3 v_surfaceToLight;
varying vec3 v_surfaceToView;
varying vec4 v_color;

uniform vec4 u_lightColor;
uniform vec4 u_ambient;
uniform vec4 u_specular;
uniform float u_shininess;
uniform float u_specularFactor;

vec4 lit(float l ,float h, float m) {
  return vec4(1.0,
              max(l, 0.0),
              (l > 0.0) ? pow(max(0.0, h), m) : 0.0,
              1.0);
}

void main() {
  vec4 diffuseColor = v_color;
  vec3 a_normal = normalize(v_normal);
  vec3 surfaceToLight = normalize(v_surfaceToLight);
  vec3 surfaceToView = normalize(v_surfaceToView);
  vec3 halfVector = normalize(surfaceToLight + surfaceToView);
  vec4 litR = lit(dot(a_normal, surfaceToLight),
                    dot(a_normal, halfVector), u_shininess);
  vec4 outColor = vec4((
  u_lightColor * (diffuseColor * litR.y + diffuseColor * u_ambient +
                u_specular * litR.z * u_specularFactor)).rgb,
      diffuseColor.a);
  gl_FragColor = outColor;
}
`);
