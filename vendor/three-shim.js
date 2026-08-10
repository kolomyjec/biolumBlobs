// Local ES-module shim for the bare "three" specifier.
//
// The addon files under vendor/three/examples/jsm/ (OrbitControls,
// EffectComposer, RenderPass, UnrealBloomPass, etc.) are plain copies of the
// official three.js r128 source and do `import { X, Y } from 'three'` just
// like they would from the npm package. Since this project loads the actual
// engine as a classic (non-module) script - three.min.js, which attaches
// everything to the global `window.THREE` - this shim re-exports exactly the
// named symbols this project and its vendored addons need, sourced from that
// global. The importmap in index.html points the bare specifier "three" at
// this file, so every `import ... from 'three'` in the addons (and in the
// app's own module script) resolves here instead of hitting a CDN.
//
// If you add code that references a new THREE.Something class, add a
// matching named export below.

const THREE = window.THREE;

if (!THREE) {
	throw new Error(
		'three-shim.js: window.THREE is not defined. Make sure three.min.js is ' +
		'loaded with a classic <script src="three.min.js"> tag BEFORE any ' +
		'<script type="module"> that imports from "three".'
	);
}

export const ACESFilmicToneMapping = THREE.ACESFilmicToneMapping;
export const AdditiveBlending = THREE.AdditiveBlending;
export const AmbientLight = THREE.AmbientLight;
export const BufferAttribute = THREE.BufferAttribute;
export const BufferGeometry = THREE.BufferGeometry;
export const Clock = THREE.Clock;
export const Color = THREE.Color;
export const DirectionalLight = THREE.DirectionalLight;
export const DoubleSide = THREE.DoubleSide;
export const EventDispatcher = THREE.EventDispatcher;
export const Float32BufferAttribute = THREE.Float32BufferAttribute;
export const FogExp2 = THREE.FogExp2;
export const LinearFilter = THREE.LinearFilter;
export const LineSegments = THREE.LineSegments;
export const Mesh = THREE.Mesh;
export const MeshBasicMaterial = THREE.MeshBasicMaterial;
export const MeshPhysicalMaterial = THREE.MeshPhysicalMaterial;
export const MOUSE = THREE.MOUSE;
export const OrthographicCamera = THREE.OrthographicCamera;
export const PerspectiveCamera = THREE.PerspectiveCamera;
export const Points = THREE.Points;
export const Quaternion = THREE.Quaternion;
export const RGBAFormat = THREE.RGBAFormat;
export const Scene = THREE.Scene;
export const ShaderMaterial = THREE.ShaderMaterial;
export const Spherical = THREE.Spherical;
export const SphereGeometry = THREE.SphereGeometry;
export const sRGBEncoding = THREE.sRGBEncoding;
export const TOUCH = THREE.TOUCH;
export const UniformsUtils = THREE.UniformsUtils;
export const Vector2 = THREE.Vector2;
export const Vector3 = THREE.Vector3;
export const WebGLRenderer = THREE.WebGLRenderer;
export const WebGLRenderTarget = THREE.WebGLRenderTarget;

export default THREE;
