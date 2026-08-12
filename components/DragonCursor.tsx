'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Segment {
  x: number;
  y: number;
  angle: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  life: number;
  maxLife: number;
  color: string;
}

export default function DragonCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isEnabled, setIsEnabled] = useState<boolean>(true);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

  // Store animation refs & state
  const stateRef = useRef({
    mouse: { x: -100, y: -100, targetX: -100, targetY: -100 },
    segments: [] as Segment[],
    particles: [] as Particle[],
    wingAngle: 0,
    speed: 0,
    isMouseDown: false,
    initialized: false,
  });

  useEffect(() => {
    // Detect touch device
    if (typeof window !== 'undefined') {
      if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        setIsTouchDevice(true);
      }
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const numSegments = 16;
    const segmentDist = 14;

    // Initialize dragon segments
    const state = stateRef.current;
    if (!state.initialized) {
      state.segments = [];
      const startX = window.innerWidth / 2;
      const startY = window.innerHeight / 2;
      state.mouse.x = startX;
      state.mouse.y = startY;
      state.mouse.targetX = startX;
      state.mouse.targetY = startY;

      for (let i = 0; i < numSegments; i++) {
        state.segments.push({
          x: startX - i * segmentDist,
          y: startY,
          angle: 0,
        });
      }
      state.initialized = true;
    }

    // Resize handler
    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Mouse movement handler
    const handleMouseMove = (e: MouseEvent) => {
      state.mouse.targetX = e.clientX;
      state.mouse.targetY = e.clientY;
    };

    const handleMouseDown = () => {
      state.isMouseDown = true;
      // Emit dragon breath burst from dragon head
      if (state.segments.length > 0) {
        const head = state.segments[0];
        const breathAngle = head.angle;
        for (let i = 0; i < 24; i++) {
          const spread = (Math.random() - 0.5) * 0.8;
          const pAngle = breathAngle + spread;
          const pSpeed = Math.random() * 8 + 4;
          const colorChoice = Math.random() > 0.4 ? '#38bdf8' : '#d4af37';
          state.particles.push({
            x: head.x + Math.cos(breathAngle) * 20,
            y: head.y + Math.sin(breathAngle) * 20,
            vx: Math.cos(pAngle) * pSpeed,
            vy: Math.sin(pAngle) * pSpeed,
            size: Math.random() * 4 + 2,
            alpha: 1,
            life: 0,
            maxLife: Math.random() * 30 + 20,
            color: colorChoice,
          });
        }
      }
    };

    const handleMouseUp = () => {
      state.isMouseDown = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Render & Physics Loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (!isEnabled) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      // Smooth lerp head movement towards target mouse
      const dx = state.mouse.targetX - state.mouse.x;
      const dy = state.mouse.targetY - state.mouse.y;
      const dist = Math.hypot(dx, dy);

      state.speed = dist;
      const ease = 0.12;
      state.mouse.x += dx * ease;
      state.mouse.y += dy * ease;

      // Head segment follows mouse
      const head = state.segments[0];
      if (head) {
        const headDx = state.mouse.x - head.x;
        const headDy = state.mouse.y - head.y;
        if (Math.hypot(headDx, headDy) > 1) {
          head.angle = Math.atan2(headDy, headDx);
        }
        head.x = state.mouse.x;
        head.y = state.mouse.y;
      }

      // Chain reaction inverse kinematics for body segments
      for (let i = 1; i < state.segments.length; i++) {
        const prev = state.segments[i - 1];
        const curr = state.segments[i];

        const segDx = prev.x - curr.x;
        const segDy = prev.y - curr.y;
        curr.angle = Math.atan2(segDy, segDx);

        const targetX = prev.x - Math.cos(curr.angle) * segmentDist;
        const targetY = prev.y - Math.sin(curr.angle) * segmentDist;

        curr.x += (targetX - curr.x) * 0.65;
        curr.y += (targetY - curr.y) * 0.65;
      }

      // Update wing flapping animation based on speed
      const wingSpeed = Math.min(0.3, 0.05 + state.speed * 0.008);
      state.wingAngle += wingSpeed;

      // Spawn tail particles if moving
      const tail = state.segments[state.segments.length - 1];
      if (tail && (state.speed > 2 || Math.random() < 0.3)) {
        state.particles.push({
          x: tail.x + (Math.random() - 0.5) * 4,
          y: tail.y + (Math.random() - 0.5) * 4,
          vx: -Math.cos(tail.angle) * (Math.random() * 2 + 1) + (Math.random() - 0.5),
          vy: -Math.sin(tail.angle) * (Math.random() * 2 + 1) + (Math.random() - 0.5),
          size: Math.random() * 3.5 + 1.5,
          alpha: 0.9,
          life: 0,
          maxLife: Math.random() * 25 + 15,
          color: Math.random() > 0.5 ? '#ece3ce' : '#38bdf8',
        });
      }

      // Update & Draw Particles
      for (let i = state.particles.length - 1; i >= 0; i--) {
        const p = state.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        p.alpha = 1 - p.life / p.maxLife;

        if (p.life >= p.maxLife || p.alpha <= 0) {
          state.particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // DRAW DRAGON
      ctx.save();

      // 1. Draw Body Segments from Tail to Head
      for (let i = state.segments.length - 1; i >= 0; i--) {
        const seg = state.segments[i];
        const progress = i / state.segments.length; // 0 at head, 1 at tail
        const baseRadius = Math.max(3, 14 * (1 - progress * 0.7));

        ctx.save();
        ctx.translate(seg.x, seg.y);
        ctx.rotate(seg.angle);

        // Draw Spinal Dorsal Spikes
        if (i > 0 && i < state.segments.length - 1) {
          ctx.fillStyle = '#d4af37';
          ctx.beginPath();
          ctx.moveTo(0, -baseRadius - 2);
          ctx.lineTo(-baseRadius * 0.8, -baseRadius * 1.8);
          ctx.lineTo(baseRadius * 0.4, -baseRadius * 0.8);
          ctx.closePath();
          ctx.fill();
        }

        // Draw Segment Body Circle / Ellipse
        const gradient = ctx.createRadialGradient(
          0,
          0,
          0,
          0,
          0,
          baseRadius
        );
        gradient.addColorStop(0, '#1c1c24');
        gradient.addColorStop(0.7, '#0a0a0c');
        gradient.addColorStop(1, '#ece3ce');

        ctx.fillStyle = gradient;
        ctx.strokeStyle = '#ece3ce';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(0, 0, baseRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Draw Wings on Segment 2 & 3
        if (i === 2) {
          const wingSpan = 50 + Math.sin(state.wingAngle) * 15;

          // Left Wing
          ctx.save();
          ctx.fillStyle = 'rgba(56, 189, 248, 0.25)';
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 1.5;
          ctx.shadowColor = '#38bdf8';
          ctx.shadowBlur = 10;

          ctx.beginPath();
          ctx.moveTo(0, -baseRadius);
          ctx.quadraticCurveTo(-15, -wingSpan * 0.6, -25, -wingSpan);
          ctx.quadraticCurveTo(-5, -wingSpan * 0.5, 10, -baseRadius);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();

          // Right Wing
          ctx.beginPath();
          ctx.moveTo(0, baseRadius);
          ctx.quadraticCurveTo(-15, wingSpan * 0.6, -25, wingSpan);
          ctx.quadraticCurveTo(-5, wingSpan * 0.5, 10, baseRadius);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          ctx.restore();
        }

        ctx.restore();
      }

      // 2. Draw Dragon Head
      if (state.segments.length > 0) {
        const headSeg = state.segments[0];
        ctx.save();
        ctx.translate(headSeg.x, headSeg.y);
        ctx.rotate(headSeg.angle);

        // Horns
        ctx.fillStyle = '#d4af37';
        ctx.shadowColor = '#d4af37';
        ctx.shadowBlur = 8;

        // Upper Horn
        ctx.beginPath();
        ctx.moveTo(-5, -8);
        ctx.quadraticCurveTo(-20, -22, -30, -18);
        ctx.quadraticCurveTo(-15, -12, -2, -5);
        ctx.closePath();
        ctx.fill();

        // Lower Horn
        ctx.beginPath();
        ctx.moveTo(-5, 8);
        ctx.quadraticCurveTo(-20, 22, -30, 18);
        ctx.quadraticCurveTo(-15, 12, -2, 5);
        ctx.closePath();
        ctx.fill();

        // Main Dragon Skull Base
        ctx.shadowBlur = 12;
        ctx.shadowColor = '#ece3ce';
        ctx.fillStyle = '#121216';
        ctx.strokeStyle = '#ece3ce';
        ctx.lineWidth = 1.8;

        ctx.beginPath();
        ctx.moveTo(-10, -12);
        ctx.lineTo(12, -8);
        ctx.lineTo(24, 0); // Snout
        ctx.lineTo(12, 8);
        ctx.lineTo(-10, 12);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Glowing Cyber Cyan Eyes
        ctx.fillStyle = '#38bdf8';
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 12;

        ctx.beginPath();
        ctx.arc(6, -5, 3, 0, Math.PI * 2);
        ctx.arc(6, 5, 3, 0, Math.PI * 2);
        ctx.fill();

        // Nostril Embers / Glow
        ctx.fillStyle = '#d4af37';
        ctx.beginPath();
        ctx.arc(20, -2, 1.2, 0, Math.PI * 2);
        ctx.arc(20, 2, 1.2, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isEnabled]);

  if (isTouchDevice) return null;

  return (
    <>
      <canvas
        ref={canvasRef}
        className="dragon-cursor-canvas"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />

      {/* Dragon Cursor Toggle Switch */}
      <button
        onClick={() => setIsEnabled(!isEnabled)}
        className="dragon-toggle-btn"
        title={isEnabled ? 'Disable Dragon Cursor' : 'Enable Dragon Cursor'}
        aria-label="Toggle Dragon Cursor"
      >
        <i className={`fas ${isEnabled ? 'fa-dragon' : 'fa-dragon text-muted'}`} />
        <span>{isEnabled ? 'Dragon ON' : 'Dragon OFF'}</span>
      </button>
    </>
  );
}
