import React, { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { X } from "lucide-react"; // Close icon

const images = [
  "lightbox1.png",
  "lightbox2.png",
  "lightbox3.png",
];

const LightboxGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const elementSize = 400;
  return (
    <PhotoView
    width={elementSize}
    height={elementSize}
    render={({ scale, attrs }) => {
      const width = parseFloat((attrs?.style?.width ?? 0) as string);
      const offset = (width - elementSize) / elementSize;
      const childScale = scale === 1 ? scale + offset : 1 + offset;

      return (
        <div {...attrs}>
          <div style={{ transform: `scale(${childScale})`, width: elementSize, transformOrigin: '0 0' }}>
            <div>Hello world</div>
            <button>button</button>
            <input onMouseDown={(e) => e.stopPropagation()} />
          </div>
        </div>
      );
    }}
  >
    <button> Helllllasodaskjdoaskdalsdmk Click</button>
  </PhotoView>
  );
};

export default LightboxGallery;
