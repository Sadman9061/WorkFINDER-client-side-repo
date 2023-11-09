import { useState, useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [interacting, setInteracting] = useState(false); // Add interacting state

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    
    const whileHover = (e) => {
      const interactable = e.target.closest(".interactable");
      const isInteracting = interactable !== null;
      setInteracting(isInteracting); // Update interacting state
      onMouseMove(e);
    };

    document.addEventListener('mousemove', whileHover);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousemove', whileHover);
    };
  }, []);

  return (
    <div className="custom-cursor" style={{ left: `${position.x}px`, top: `${position.y}px`, transform: `scale(${interacting ? 4 : 1})`,
    border: `1px solid #FF554A`, // Add a 1px black border
    backgroundColor: `${interacting? '':'#FF554A'}`,   }}>
      {/* Your cursor content */}
    </div>
  );
};

export default CustomCursor;