import React, { useEffect, useRef } from 'react';

const GlobalDotGrid = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const heroElRef = useRef(null);
  const planetElRef = useRef(null);
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 1024;

  if (isMobile) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "linear-gradient(to bottom, #021526, #03346E)",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}
 
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    let isMobile = window.innerWidth < 768;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      isMobile = window.innerWidth < 768;
      if (isMobile) {
        draw(); // force a draw on resize when paused
      }
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e) => {
      // Strictly disable cursor tracking on mobile and tablet (typically < 1024px)
      if (window.innerWidth < 1024) return;
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    const handleMouseDown = (e) => {
      if (window.innerWidth < 1024) return;
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    const handleMessage = (e) => {
      if (e.data && e.data.type === 'iframeMouseMove') {
        const iframe = document.querySelector('iframe[src*="smartreach-journey.html"]');
        if (iframe) {
          const rect = iframe.getBoundingClientRect();
          mouse.current = { x: rect.left + e.data.clientX, y: rect.top + e.data.clientY };
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('message', handleMessage);


    const SPACING = isMobile ? 120 : 60; // Reduced particle count (was 30)
    const DOT_R   = 1.1;

    /* ─────────── Wave layer definitions ───
       Increased amplitude and tweaked frequencies to make the sine wave
       much more noticeable and organic. */
    const LAYERS = [
      { freqX: 0.015, freqY: 0.005, speed: 0.0030, amp: 8.0,  dirDrift: 0.00010 },
      { freqX: 0.005, freqY: 0.012, speed: 0.0020, amp: 6.5,  dirDrift: -0.00008 },
      { freqX: 0.020, freqY: 0.010, speed: 0.0040, amp: 4.0,  dirDrift: 0.00015 },
    ];
    // Each layer gets its own running direction angle
    const layerAngles = LAYERS.map(() => Math.random() * Math.PI * 2);

    // Keep the radius tight so it doesn't disturb the whole screen
    const GLOW_R = () => Math.max(canvas.width, canvas.height) * 0.35;

    const draw = () => {
    
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 1;

      if (isMobile && time > 1) {
        // Pause animation on mobile after the first frame
        return;
      }

      const mx = mouse.current.x;
      const my = mouse.current.y;
      const gr = GLOW_R();

      // Update direction angles for each layer
      for (let li = 0; li < LAYERS.length; li++) {
        layerAngles[li] += LAYERS[li].dirDrift;
      }

      // Fetch dynamic DOM positions. 
      // Optimization: Cache these elements or check existence only once if they won't disappear.
      if (!heroElRef.current) heroElRef.current = document.getElementById('hero-section');
      if (!planetElRef.current) planetElRef.current = document.getElementById('hero-planet-body');

      const heroEl = heroElRef.current;
      const planetEl = planetElRef.current;
      
      let heroRect = null;
      let hasPlanet = false;
      let pCx = 0, pCy = 0, pRx = 0, pRy = 0;

      if (heroEl) {
        heroRect = heroEl.getBoundingClientRect();
      }
      if (planetEl) {
        const planetRect = planetEl.getBoundingClientRect();
        pCx = planetRect.left + planetRect.width / 2;
        pCy = planetRect.top + planetRect.height / 2;
        pRx = planetRect.width / 2;
        pRy = planetRect.height / 2;
        hasPlanet = true;
      }

      const cols = Math.ceil(canvas.width  / SPACING) + 1;
      const rows = Math.ceil(canvas.height / SPACING) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          // Add a staggered offset to every odd row to break the "perfect grid" look
          const isOddRow = j % 2 !== 0;
          const staggeredX = i * SPACING + (isOddRow ? SPACING / 2 : 0);
          
          // Introduce a tiny, permanent organic offset based on grid position
          // This breaks the rigid vertical/horizontal lines just enough to look natural
          const organicOffsetX = Math.sin(i * 0.5 + j * 0.3) * 2;
          const organicOffsetY = Math.cos(j * 0.5 + i * 0.3) * 2;

          const bx = staggeredX + organicOffsetX;
          const by = j * SPACING + organicOffsetY;

          /* ── Combine all wave layers ──────────────────────────────
             For each layer we project the dot position onto the
             layer's current wave-front direction, then compute a sine.
             Summing layers produces an organic interference pattern. */
          let waveSum = 0;
          for (let li = 0; li < LAYERS.length; li++) {
            const l = LAYERS[li];
            const angle = layerAngles[li];
            // Project (bx, by) onto direction vector
            const proj = bx * Math.cos(angle) * l.freqX
                       + by * Math.sin(angle) * l.freqY;
            waveSum += Math.sin(proj + time * l.speed * Math.PI * 2) * l.amp;
          }

          /* waveSum is in range roughly [-totalAmp, +totalAmp]
             Normalize to [-1, 1] for glow calculations */
          const totalAmp = LAYERS.reduce((s, l) => s + l.amp, 0);
          const waveN = waveSum / totalAmp; // [-1, 1]

          /* Displacement — proportional to wave */
          // Increased displacement to make the wave "move" more noticeably
          const displaceY = waveSum * 0.8;
          const displaceX = waveSum * 0.3;

          const x = bx + displaceX;
          const y = by + displaceY;

          /* ── Flawless Horizon Masking Logic ──────────────────────────────
             We dynamically skip rendering dots inside the Hero Section's "Sky".
             If a dot is inside the Hero section visually, we only render it if
             it falls within the mathematical bounds of the Planet Body element. */
          if (heroRect && y >= heroRect.top && y <= heroRect.bottom) {
             let isInsidePlanet = false;
             if (hasPlanet) {
                const dx = x - pCx;
                const dy = y - pCy;
                // Use 1.0 to precisely match the curve outline, avoiding artifact bleeds.
                isInsidePlanet = ((dx * dx) / (pRx * pRx)) + ((dy * dy) / (pRy * pRy)) <= 1.0;
             }
             if (!isInsidePlanet) {
               continue; // Skips rendering this exact dot
             }
          }

          /* ── Distance Check for Total Masking ──────────────────────── */
          const ddx  = x - mx;
          const ddy  = y - my;
          const dist = Math.sqrt(ddx * ddx + ddy * ddy);

          // COMPLETELY DISABLE interaction on mobile/tablet (typically < 1024px)
          // This forces a perfectly clean background with NO interaction effect if the user clicks.
          if (dist >= gr || mx < -5000 || window.innerWidth < 1024) {
            continue;
          }

          const t = dist / gr; 
          // Smoother fade out towards the outer edges of the radius
          const fadeEdge = 1 - Math.pow(t, 2);

          /* ── Sine-driven base wave (Faded by cursor distance) ──────── */
          const waveGlowT = (waveN + 1) / 2; // map to [0, 1]
          // Multiply the base wave by fadeEdge so it seamlessly disappears at the border
          const waveAlpha = (0.01 + waveGlowT * 0.15) * fadeEdge;  
          const waveGlow  = (waveGlowT * 8) * fadeEdge; 
          const waveR     = DOT_R + waveGlowT * 0.4;

          /* ── Cursor proximity wavy circumference ripple ───────────── */
          const angleToCursor = Math.atan2(ddy, ddx);
            
          // 1. Create a "Ring" or "Circumference" effect.
          // Equation: Math.sin(t * Math.PI) creates a perfectly smooth inner circle.
          // To make the center even cleaner and more empty, we can sharpen the curve slightly:
          const ringShape = Math.max(0, Math.sin(t * Math.PI));

          // 2. Make the ring wavy around the circumference based on angle.
          // Multiply by `ringShape` instead of `(1-t)` so the wobble only happens ON the ring.
          // This keeps the dull center (t=0) perfectly smooth and circular without jagged "rays".
          const angularWobble = Math.sin(angleToCursor * 6 + time * 0.04) * 0.25 * ringShape;
          
          const rippledRing = Math.max(0, (ringShape + angularWobble));
          const ringIntesity = Math.pow(rippledRing, 1.5);

            const cursorAlpha = ringIntesity * 0.25 * fadeEdge;   
            const cursorGlow  = ringIntesity * 6 * fadeEdge;     
            const cursorR     = ringIntesity * 0.8 * fadeEdge;
            
            // Only apply radial stretch on the outer edge of the ring so 
            // the inner circle stays perfectly smooth instead of creating "star rays".
            // Increased the multiplier back up significantly for dramatic trails.
            const stretchFade = Math.max(0, (t - 0.4) * 2); 
            const radialStretch = ringIntesity * fadeEdge * 1.6 * stretchFade;

          /* ── Combine both glow sources ────────────────────────────── */
          let finalAlpha = Math.min(waveAlpha + cursorAlpha, 1.0);
          
          /* ── Perfect Circular Dullness (Inner Black Hole) ───────────
             Soft, gradual fade starting completely dark at the cursor (t=0)
             and easing smoothly up to full brightness near the ring. */
          const centerFade = Math.min(1, Math.pow(t * 2.5, 2)); 
          finalAlpha *= centerFade;

          // Save performance: don't draw invisible dots
          if (finalAlpha <= 0.005) continue;

          const finalGlow  = Math.max(waveGlow, cursorGlow) * centerFade;
          const finalR     = waveR + cursorR;

          ctx.globalAlpha = finalAlpha;

          /* ── Dynamic Color Shifting HSL ─────────────────────────────
             We generate colors in the "Cool" spectrum:
             - 170 (Teal/Emerald)
             - 215 (Core Blue)
             - 270 (Indigo/Purple)
             We calculate the hue based on the dot's X, Y, and Time so 
             it acts like a shifting aurora gradient rather than harsh random noise.
             Math: Time shifts the colors over seconds. X/Y spread the colors out.
          */
          const colorNoise = Math.sin(bx * 0.003 + time * 0.005) 
                           + Math.cos(by * 0.004 + time * 0.003);
          // colorNoise ranges roughly [-2, 2]; map this into our hue range.
          const normalizedNoise = (colorNoise + 2) / 4; // [0, 1]
          // const targetHue = Math.floor(160 + (normalizedNoise * 130)); // Range: ~160 to ~290 (kept for legacy mapping)
          
          // Orange/Gold remap (keeps the existing motion + masking logic intact)

          // Convert the computed hue-ish value into a warm spectrum near 25°–45°.
          const warmHue = Math.floor(25 + (normalizedNoise * 20)); // ~25..45
          const dotColor = `hsl(${warmHue}, 95%, 62%)`;


          if (finalGlow > 0.5) {
            ctx.shadowBlur  = finalGlow;
            ctx.shadowColor = dotColor;
          } else {
            ctx.shadowBlur  = 0;
          }

          ctx.fillStyle = dotColor;
          ctx.beginPath();
          
          /* Radially Directed Elongation!
             At rest, the dot is a small circle (stretchX = stretchY).
             When the ring intensity hits them, they elongate dramatically 
             and point directly toward/away from the cursor! */
          
          // Shrink the base radius slightly less so the trails feel substantial
          const shrunkR = finalR * 0.9; 
          
          // Enhanced stretch multiplier for dramatic, long fluid streaks
          const stretchX = shrunkR * (1 + radialStretch * 6.5); 
          const stretchY = shrunkR; 
          
          // Apply transformation to point toward cursor
          ctx.save();
          ctx.translate(x, y);
          
          // If the dot is being influenced by the cursor, rotate it toward the cursor!
          if (radialStretch > 0.05) {
             ctx.rotate(angleToCursor);
          } else {
             // Otherwise, just gently tilt it with the background wave flow
             ctx.rotate(Math.sin(time * 0.005) * 0.2); 
          }

          ctx.ellipse(0, 0, stretchX, stretchY, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      ctx.shadowBlur  = 0;
      ctx.globalAlpha = 1;
      if (!isMobile) {
        animationFrameId = requestAnimationFrame(draw);
      }
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('message', handleMessage);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        // mixBlendMode: 'screen',

      }}
    />
  );
};

export default GlobalDotGrid;

