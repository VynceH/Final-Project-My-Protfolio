import React from 'react';

const Modal = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full overflow-hidden relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal content */}
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={image.image}
              alt={image.alt}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://placehold.co/600x400/cccccc/969696?text=Project+Image';
                e.target.onerror = null;
              }}
            />
          </div>

          {/* Project details */}
          <div className="p-6 md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {image.title}
            </h3>
            <p className="text-gray-600 mb-6">
              {image.description}
            </p>
            
            {/* Demo buttons - You can customize these based on your needs */}
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Live Demo
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                Source Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;