import React from 'react';
import { styles } from '../styles';

const Section = ({ id, backgroundImage, children }) => {
  const sectionStyles = `${styles.sectionContainer} ${styles.sectionBackground}`.replace('flex items-center', '');
  
  return (
    <section 
      id={id}
      className={sectionStyles}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.sectionContent}>
        {children}
      </div>
    </section>
  );
};

export default Section;
