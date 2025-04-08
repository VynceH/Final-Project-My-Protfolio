import React from 'react';
import { styles } from '../styles';

function AboutMe() {
  return (
    <>
      <h2 className={styles.sectionTitle}>About Me</h2>
      <div className={`${styles.contentCard} w-full max-w-4xl mx-auto`}>
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="relative flex-shrink-0">
            <img
              src="image/profile.png"
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover ring-4 ring-blue-500/20"
            />
            <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
              Available
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Sean Harold Vyncent N. Dela Cruz</h3>
            <p className="text-gray-600">
            BS Information Technology - Network and Security
            </p>
            <p className={styles.bodyText}>
        I'm focusing on learning about computer networks and how to protect them from cyber threats.
        </p>
        <ul>
                  <li><i></i> <strong>Birthday:</strong> <span>26 June 2003</span></li>
                  <li><i></i> <strong>City:</strong> <span>Baguio City, Benguet</span></li>
                </ul>
                <ul>
                  <li><i></i> <strong>Age:</strong> <span>22</span></li>
                  <li><i></i> <strong>Email:</strong> <span>seandelacruz2003@gmail.com</span></li>
                </ul>
            <p>
              I chosen IT because it offers exciting opportunities to work with computers and technology, solve problems, and be part of a rapidly evolving field that shapes the way we live and work.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;


