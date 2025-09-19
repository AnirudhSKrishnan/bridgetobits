"use client";

import { useState, useEffect } from 'react';

interface Ripple {
  x: number;
  y: number;
  id: number;
}

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isClicked, setIsClicked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = (e: MouseEvent) => {
      setIsClicked(true);
      setRipples(prev => [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }]);
    };

    const onMouseUp = () => {
      setIsClicked(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target && (target.closest('a') || target.closest('button'))) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target && (target.closest('a') || target.closest('button'))) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    const rippleTimeout = setInterval(() => {
        setRipples(prev => prev.slice(1));
    }, 1000);


    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      clearInterval(rippleTimeout);
    };
  }, []);

  const cursorSize = isHovering ? 40 : 20;
  const scale = isClicked ? 0.8 : 1;

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: `${cursorSize}px`,
          height: `${cursorSize}px`,
          transform: `translate(-50%, -50%) scale(${scale})`,
          backgroundColor: isHovering ? '#fac203' : 'white',
          mixBlendMode: isHovering ? 'normal' : 'difference',
        }}
      />
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="ripple"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
