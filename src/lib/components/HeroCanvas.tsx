"use client"

import { useEffect, useRef } from "react"

const VERT = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`

const FRAG = `
  precision highp float;

  uniform float u_time;
  uniform vec2  u_resolution;

  /* ── helpers ─────────────────────────────────────── */

  float smin(float a, float b, float k) {
    float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
    return mix(b, a, h) - k * h * (1.0 - h);
  }

  /* cheap 2-D hash */
  float hash21(vec2 p) {
    p = fract(p * vec2(127.1, 311.7));
    p += dot(p, p + 19.19);
    return fract(p.x * p.y);
  }

  /* value noise */
  float vnoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash21(i);
    float b = hash21(i + vec2(1.0, 0.0));
    float c = hash21(i + vec2(0.0, 1.0));
    float d = hash21(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  /* fbm — fractal brownian motion for surface turbulence */
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    vec2  shift = vec2(100.0);
    mat2  rot   = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
    for (int i = 0; i < 4; i++) {
      v += a * vnoise(p);
      p  = rot * p * 2.0 + shift;
      a *= 0.5;
    }
    return v;
  }

  /* ── blob SDF ─────────────────────────────────────── */

  float blobSDF(vec2 uv, vec2 center, float r, float t, float seed) {
    /* warp the uv with fbm for organic edges */
    float warp  = fbm(uv * 1.8 + seed + t * 0.12) * 0.18;
    float warp2 = fbm(uv * 2.6 - seed * 1.3 + t * 0.08) * 0.08;
    vec2  warpedUV = uv + vec2(warp, warp2);
    return length(warpedUV - center) - r;
  }

  /* ── main ─────────────────────────────────────────── */

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    /* keep aspect ratio — map so width=1 at any resolution */
    float aspect = u_resolution.x / u_resolution.y;
    vec2 p = uv;
    p.x *= aspect;

    float t = u_time * 0.22;        /* global slow speed */

    /* ── 6 blob centers that drift on overlapping sinusoids ── */
    float a = aspect;
    vec2 c0 = vec2(a * 0.50 + 0.28 * sin(t * 0.71),              0.52 + 0.20 * cos(t * 0.53));
    vec2 c1 = vec2(a * 0.30 + 0.22 * cos(t * 0.43 + 1.0),        0.40 + 0.26 * sin(t * 0.67));
    vec2 c2 = vec2(a * 0.70 + 0.20 * sin(t * 0.59 + 2.0),        0.65 + 0.18 * cos(t * 0.41));
    vec2 c3 = vec2(a * 0.55 + 0.30 * cos(t * 0.37 + 0.5),        0.30 + 0.22 * sin(t * 0.79));
    vec2 c4 = vec2(a * 0.20 + 0.18 * sin(t * 0.61 + 3.0),        0.70 + 0.16 * cos(t * 0.57));
    vec2 c5 = vec2(a * 0.80 + 0.14 * cos(t * 0.83 + 1.5),        0.48 + 0.24 * sin(t * 0.45));

    /* ── blob radii — slightly different sizes ── */
    float d0 = blobSDF(p, c0, 0.24, t, 0.0);
    float d1 = blobSDF(p, c1, 0.20, t, 5.1);
    float d2 = blobSDF(p, c2, 0.18, t, 9.3);
    float d3 = blobSDF(p, c3, 0.22, t, 3.7);
    float d4 = blobSDF(p, c4, 0.16, t, 7.2);
    float d5 = blobSDF(p, c5, 0.15, t, 1.8);

    /* ── smooth-union merge all blobs ── */
    float k  = 0.20;
    float d  = smin(d0, d1, k);
          d  = smin(d,  d2, k);
          d  = smin(d,  d3, k);
          d  = smin(d,  d4, k);
          d  = smin(d,  d5, k);

    /* ── palette ── */
    vec3 saffron = vec3(0.957, 0.631, 0.000);   /* #F4A100 */
    vec3 turmeric= vec3(0.831, 0.514, 0.039);   /* #D4830A */
    vec3 crimson = vec3(0.545, 0.102, 0.102);   /* #8B1A1A */
    vec3 ember   = vec3(0.90,  0.35,  0.05);    /* orange-red bridge */
    vec3 bg      = vec3(0.051, 0.027, 0.012);   /* near-black warm */

    /* ── colour field: weighted by inverse-square distance to each blob ── */
    float eps = 0.0001;
    float w0 = 1.0 / (d0 * d0 + eps);
    float w1 = 1.0 / (d1 * d1 + eps);
    float w2 = 1.0 / (d2 * d2 + eps);
    float w3 = 1.0 / (d3 * d3 + eps);
    float w4 = 1.0 / (d4 * d4 + eps);
    float w5 = 1.0 / (d5 * d5 + eps);
    float wt = w0 + w1 + w2 + w3 + w4 + w5;

    /* assign colours to blobs: saffron, turmeric, crimson, ember, turmeric, crimson */
    vec3 blobCol = (saffron  * w0
                  + turmeric * w1
                  + crimson  * w2
                  + ember    * w3
                  + turmeric * w4
                  + crimson  * w5) / wt;

    /* ── glow that bleeds outside the blob boundary ── */
    float glowFactor = exp(-max(d, 0.0) * 6.0) * 0.55;

    /* ── final composite ── */
    float inside = smoothstep(0.015, -0.015, d);
    vec3  col    = mix(bg, blobCol, inside);

    /* add glow into background */
    col += blobCol * glowFactor * (1.0 - inside);

    /* subtle inner brightness near centre of each blob */
    float inner = smoothstep(0.08, -0.08, d) * 0.25;
    col = mix(col, col * 1.6 + saffron * 0.12, inner);

    /* very subtle vignette */
    float vig = 1.0 - 0.45 * pow(length((uv - 0.5) * vec2(1.0, 1.3)), 1.8);
    col *= vig;

    /* tone-map so highlights don't blow out */
    col = col / (col + 0.5);
    col = pow(col, vec3(0.9));

    gl_FragColor = vec4(col, 1.0);
  }
`

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef    = useRef<number>(0)
  const glRef     = useRef<WebGLRenderingContext | null>(null)
  const progRef   = useRef<WebGLProgram | null>(null)
  const startRef  = useRef<number>(performance.now())

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    /* ── init WebGL ── */
    const gl = canvas.getContext("webgl", { antialias: false, alpha: false }) as WebGLRenderingContext | null
    if (!gl) return
    glRef.current = gl

    function compile(type: number, src: string) {
      const sh = gl!.createShader(type)!
      gl!.shaderSource(sh, src)
      gl!.compileShader(sh)
      return sh
    }

    const prog = gl.createProgram()!
    gl.attachShader(prog, compile(gl.VERTEX_SHADER,   VERT))
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG))
    gl.linkProgram(prog)
    gl.useProgram(prog)
    progRef.current = prog

    /* fullscreen quad */
    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1,  1, -1,  -1, 1,
      -1,  1,  1, -1,   1, 1,
    ]), gl.STATIC_DRAW)

    const posLoc = gl.getAttribLocation(prog, "a_position")
    gl.enableVertexAttribArray(posLoc)
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0)

    /* uniform locations */
    const uTime = gl.getUniformLocation(prog, "u_time")
    const uRes  = gl.getUniformLocation(prog, "u_resolution")

    /* ── resize ── */
    function resize() {
      if (!canvas || !gl) return
      const dpr = Math.min(window.devicePixelRatio, 1.5)
      canvas.width  = canvas.offsetWidth  * dpr
      canvas.height = canvas.offsetHeight * dpr
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    /* ── render loop ── */
    function render() {
      if (!gl || !prog) return
      const t = (performance.now() - startRef.current) * 0.001
      gl.uniform1f(uTime, t)
      gl.uniform2f(uRes, canvas!.width, canvas!.height)
      gl.drawArrays(gl.TRIANGLES, 0, 6)
      rafRef.current = requestAnimationFrame(render)
    }
    render()

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      gl.deleteProgram(prog)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
    />
  )
}
