export const handleMouseDown = (s, e) => {
  return {
    ...s,
    event: {
      x: e.clientX,
      y: e.clientY,
      originalX: s.x,
      originalY: s.y,
      status: "mouse-down"
    }
  };
};

export const handleMouseUp = (s, e) => {
  return { ...s, event: { x: 0, y: 0, status: "mouse-up" } };
};
