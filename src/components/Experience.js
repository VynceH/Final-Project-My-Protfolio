import React, { useCallback, useState } from 'react';
import { styles } from '../styles';
import { sectionBackgrounds } from '../config/backgrounds';
import Modal from './Modal';

const ImageCard = React.memo(({ experience, onClick }) => (
  <div 
    className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
    onClick={() => onClick(experience)}
  >
    <div className="aspect-video relative">
      <img
        src={experience.image}
        alt={experience.alt}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        loading="lazy"
        onError={(e) => {
          e.target.src = 'https://placehold.co/600x400/cccccc/969696?text=Project+Image';
          e.target.onerror = null;
        }}
      />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{experience.title}</h3>
      <p className="text-gray-600 line-clamp-2">{experience.description}</p>
    </div>
  </div>
));

ImageCard.displayName = 'ImageCard';

function Experience() {
  const [selectedImage, setSelectedImage] = useState(null);

  const experiences = [
    {
      image: "image/portfolio-1.jpg",
      alt: "HTML Webpage with CSS",
      title: "HTML Webpage with CSS"
    },
    {
      image: "image/portfolio-2.jpg",
      alt: "2048 Game using C++",
      title: "2048 Game using C++"
    },
    {
      image: "image/portfolio-3.jpg",
      alt: "Car Rental Website using Php and MySQL",
      title: "Car Rental Website using Php and MySQL"
    },
    {
      image: "image/portfolio-4.jpg",
      alt: "CCNA Router Configuration",
      title: "CCNA Router Configuration"
    },
    {
      image: "image/portfolio-5.jpg",
      alt: "Fetch-Decode-Execute cycle using python",
      title: "Fetch-Decode-Execute cycle using python"
    },
    {
      image: "image/portfolio-6.jpg",
      alt: "CCNA Network Representation",
      title: "CCNA Network Representation"
    },
    {
      image: "image/portfolio-7.jpg",
      alt: "Basic Input/Output using Assembly Language",
      title: "Basic Input/Output using Assembly Language"
    },
    {
      image: "image/portfolio-8.jpg",
      alt: "Dataflow, Structural, and Behavioral Modelling of OR Gate using VHDL",
      title: "Dataflow, Structural, and Behavioral Modelling of OR Gate using VHDL"
    },
    {
      image: "image/portfolio-9.jpg",
      alt: "Heron's Formula&Area using java",
      title: "Heron's Formula&Area using java"
    }
  ];

  const handleOpenModal = useCallback((image) => {
    setSelectedImage(image);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return (
    <section 
      id="experience" 
      className={`${styles.sectionContainer} ${styles.sectionBackground}`}
      style={{ 
        backgroundImage: `url(${sectionBackgrounds.experience})`,
        backgroundAttachment: 'fixed'
      }}
    >
      <div className={`${styles.sectionContent} container mx-auto px-4`}>
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Projects & Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <ImageCard
              key={`experience-${index}`}
              experience={exp}
              onClick={handleOpenModal}
            />
          ))}
        </div>
        {selectedImage && (
          <Modal
            image={selectedImage}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </section>
  );
}

export default React.memo(Experience);



