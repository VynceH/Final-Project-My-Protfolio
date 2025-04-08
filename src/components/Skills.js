import React from 'react';

function Skills() {
  const skills = {
    "Frontend": [
      { name: "PHP", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Tailwind CSS", level: 85 }
    ],
    "Backend": [
      { name: "Java", level: 80 },
      { name: "C++", level: 75 },
      { name: "Python", level: 70 },
      { name: "C#", level: 65 },
      { name: "Assembly Language", level: 85 }
    ],
  };

  return (
    <section id="skills" className="mb-16">
      <h2 className="text-3xl font-bold mb-6"></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="space-y-4">
              {skillList.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-500 rounded-full transition-all duration-500 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        backgroundColor: getColorForPercentage(skill.level)
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function getColorForPercentage(percentage) {
  if (percentage >= 90) return '#22c55e';
  if (percentage >= 75) return '#3b82f6';
  if (percentage >= 60) return '#eab308';
  return '#ef4444';
}

export default Skills;