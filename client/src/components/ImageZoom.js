import React, { useState } from "react";

const ImageZoom = ({ src, alt }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div>
      <img
        src={src}
        alt={alt}
        onClick={toggleZoom}
        style={{
          width: isZoomed ? "600px" : "300px",
          transition: "width 0.3s ease",
        }}
      />
    </div>
  );
};

export default ImageZoom;
