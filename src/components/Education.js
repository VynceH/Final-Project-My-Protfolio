import React from 'react';

function Education() {
  const education = [
    {
      degree: "Senior High School",
      school: "St. Therese of the Child Jesus Kidz Academy",
      year: "June 2015 - April 2019",
      description: "20-A Sto.Rosario St. Karuhatan, Valenzuela City",
    }, 
    {
      degree: "Primary",
      school: "Caruhatan East Elementary School",
      year: "June 2009 - April 2015",
      description: "#77 Ilang-Ilang St. Karuhatan, Valenzuela City",
    },
    {
      degree: "Leadership and Membership",
      degree2: "Cadet Colonel (C/COL), Corps Commander, Citizenship Advancement Training",
      school: "St. Therese of the Child Jesus KIdz Academy, Valenzuela City",
      year: "June 2018 - March 2019",
      achievements: {
        title: "Leadership Roles",
        items: [
          "Leading and overseeing the entire corps of cadets, coordinating and organizing training activities, promoting citizenship and leadership development among cadets, and representing the corps in official events and ceremonies.",
          "Being a role model for other cadets, demonstrating strong leadership qualities and exemplifying the values of citizenship, integrity, and service.",
          "Work closely with other cadet leaders and instructors to plan and execute various activities and events, fostering a sense of camaraderie and teamwork among the cadets."
        ]
      }
    },
    {
      degree2: "Vice President, Supreme Student Government",
      school: "St. Therese of the Child Jesus KIdz Academy, Valenzuela City",
      year: "August 2019 - June 2021",
      achievements: {
        title: "Leadership Roles",
        items: [
          "Establish and maintain relationships with external organizations, such as local government agencies and community groups, to collaborate on initiatives that benefit the student community.",
          "Serve as a liaison between the student government and external stakeholders, attending meetings and events to voice the needs and opinions of the students.",
          "Responsible for organizing and coordinating external events and campaigns that promote student welfare and engagement."
        ]
      }
    }
  ];

  return (
    <section id="education" className="mb-16">
      <h2 className="text-3xl font-bold mb-4"></h2>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            {edu.degree2 && <h5 className="text-gray-900">{edu.degree2}</h5>}
            <p className="text-gray-600">{edu.school}</p>
            <p className="text-gray-500">{edu.year}</p>
            <p className="text-gray-700 mt-2">{edu.description}</p>
            
            {edu.achievements && (
              <div className="mt-4">
                <h4 className="font-medium text-gray-700">{edu.achievements.title}</h4>
                <ul className="list-disc list-inside ml-4 mt-2">
                  {edu.achievements.items.map((item, i) => (
                    <li key={i} className="text-gray-700">{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;