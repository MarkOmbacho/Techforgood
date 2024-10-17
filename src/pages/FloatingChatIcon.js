import React, { useState } from 'react';

const FloatingChatIcon = ({ onClick }) => {
  const [position, setPosition] = useState({ top: '80%', left: '85%' });

  // Function to drag the icon
  const handleDrag = (e) => {
    const newTop = e.clientY - 25; // Offset to center the drag
    const newLeft = e.clientX - 25;
    setPosition({ top: `${newTop}px`, left: `${newLeft}px` });
  };

  return (
    <div
      className="floating-icon"
      style={{ top: position.top, left: position.left }}
      draggable
      onDrag={(e) => handleDrag(e)}
      onClick={onClick}
    >
      💬
    </div>
  );
};

export default FloatingChatIcon;
