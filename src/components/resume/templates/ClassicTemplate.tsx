
import { useResume } from "@/components/ResumeContext";

const ClassicTemplate = () => {
  const { resumeData } = useResume();
  const { personalInfo, education, experience, skills } = resumeData;

  return (
    <div className="p-8 min-h-[297mm] bg-white font-inter text-gray-900">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold uppercase tracking-wider mb-1">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <h2 className="text-lg text-gray-700 mb-3">
          {personalInfo.title}
        </h2>
        
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          {personalInfo.email && (
            <div className="flex items-center">
              <span className="font-semibold mr-1">Email:</span>
              <span>{personalInfo.email}</span>
            </div>
          )}
          
          {personalInfo.phone && (
            <div className="flex items-center">
              <span className="font-semibold mr-1">Phone:</span>
              <span>{personalInfo.phone}</span>
            </div>
          )}
          
          {(personalInfo.city || personalInfo.state || personalInfo.country) && (
            <div className="flex items-center">
              <span className="font-semibold mr-1">Location:</span>
              <span>
                {[
                  personalInfo.city,
                  personalInfo.state,
                  personalInfo.country,
                ]
                  .filter(Boolean)
                  .join(", ")}
              </span>
            </div>
          )}
          
          {personalInfo.website && (
            <div className="flex items-center">
              <span className="font-semibold mr-1">Website:</span>
              <span>{personalInfo.website}</span>
            </div>
          )}
          
          {personalInfo.linkedin && (
            <div className="flex items-center">
              <span className="font-semibold mr-1">LinkedIn:</span>
              <span>{personalInfo.linkedin}</span>
            </div>
          )}
        </div>
      </header>
      
      {/* Horizontal Line */}
      <div className="border-b-2 border-black mb-6"></div>
      
      {/* Summary */}
      {personalInfo.summary && (
        <section className="mb-6">
          <h3 className="text-lg font-bold uppercase tracking-wider mb-3">
            Professional Summary
          </h3>
          <p>{personalInfo.summary}</p>
        </section>
      )}
      
      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-6">
          <h3 className="text-lg font-bold uppercase tracking-wider mb-3">
            Work Experience
          </h3>
          
          <div className="space-y-5">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between mb-1">
                  <h4 className="font-bold">{exp.position}</h4>
                  <span className="text-sm">
                    {new Date(exp.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                    {exp.current ? " Present" : 
                     new Date(exp.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                  </span>
                </div>
                <p className="font-semibold italic mb-2">{exp.company}</p>
                <p className="whitespace-pre-line">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Education */}
      {education.length > 0 && (
        <section className="mb-6">
          <h3 className="text-lg font-bold uppercase tracking-wider mb-3">
            Education
          </h3>
          
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between mb-1">
                  <h4 className="font-bold">{edu.school}</h4>
                  <span className="text-sm">
                    {new Date(edu.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                    {new Date(edu.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                  </span>
                </div>
                <p className="font-semibold italic mb-1">
                  {edu.degree} in {edu.fieldOfStudy}
                </p>
                {edu.description && <p>{edu.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Skills */}
      {skills.length > 0 && (
        <section>
          <h3 className="text-lg font-bold uppercase tracking-wider mb-3">
            Skills
          </h3>
          
          <div className="flex flex-wrap gap-x-10 gap-y-2">
            {skills.map((skill) => (
              <div key={skill.id} className="flex items-center">
                <div className="w-2 h-2 bg-black mr-2"></div>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Horizontal Line */}
      <div className="border-b-2 border-black mt-6"></div>
    </div>
  );
};

export default ClassicTemplate;
