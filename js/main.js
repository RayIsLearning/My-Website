import { vertexShader, fragmentShader } from './shaders.js';

// Get WebGL context
const canvas = document.querySelector("canvas");
const gl = canvas.getContext("webgl");

if (!gl) {
  console.error("WebGL not supported!");
}

// Function to create a shader
function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error("Shader compilation error:", gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

// Compile shaders
const vs = createShader(gl, gl.VERTEX_SHADER, vertexShader);
const fs = createShader(gl, gl.FRAGMENT_SHADER, fragmentShader);

// Create program
function createProgram(gl, vs, fs) {
  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error("Program link error:", gl.getProgramInfoLog(program));
    return null;
  }
  return program;
}

const shaderProgram = createProgram(gl, vs, fs);
gl.useProgram(shaderProgram);
