import React from 'react';
import Carousel from './autocarousel';

const Instructoroverview: React.FC = () => {
  const images = [
    'karim-yasser-1',
    'karim-yasser-2',
    'karim-yasser-3',
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-1/2">
        <Carousel images={images} interval={3000} />
      </div>
    </div>
  );
};

export default Instructoroverview;