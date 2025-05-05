import { useResume, SectionType } from "@/components/ResumeContext";

const CreativeTemplate = () => {
  const { resumeData } = useResume();
  const { personalInfo, education, experience, skills, sectionOrder } = resumeData;

  const renderSection = (sectionType: SectionType) => {
    switch (sectionType) {
      case 'personal':
        return personalInfo.summary && (
          <section className="mb-8">
            <h3 className="text-lg font-bold text-[#D946EF] mb-3 uppercase relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-1 before:bg-[#D946EF]">
              About Me
            </h3>
            <p className="text-gray-700">{personalInfo.summary}</p>
          </section>
        );
      case 'experience':
        return experience.length > 0 && (
          <section className="mb-8">
            <h3 className="text-lg font-bold text-[#D946EF] mb-4 uppercase relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-1 before:bg-[#D946EF]">
              Experience
            </h3>
            
            <div className="space-y-6">
              {experience.map((exp) => (
                <div key={exp.id} className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-[#D946EF]">
                  <h4 className="font-bold text-base">
                    {exp.position} <span className="font-normal">at</span> {exp.company}
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    {new Date(exp.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                    {exp.current ? " Present" : 
                     new Date(exp.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                  </p>
                  <p className="text-gray-700 whitespace-pre-line">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        );
      case 'education':
        return education.length > 0 && (
          <section>
            <h3 className="text-lg font-bold text-[#D946EF] mb-4 uppercase relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-1 before:bg-[#D946EF]">
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id} className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-[#D946EF]">
                  <h4 className="font-bold text-base">{edu.school}</h4>
                  <p className="text-[#D946EF] font-medium">
                    {edu.degree} in {edu.fieldOfStudy}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    {new Date(edu.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                    {new Date(edu.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                  </p>
                  {edu.description && <p className="text-gray-700">{edu.description}</p>}
                </div>
              ))}
            </div>
          </section>
        );
      case 'skills':
        return null; // Skills are displayed in the sidebar in this template
      default:
        return null;
    }
  };

  return (
    <div className="min-h-[297mm] bg-white font-inter text-gray-800 flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="bg-[#D946EF]/10 p-8 w-full md:w-1/3">
        <div className="mb-10">
          <div className="h-32 w-32 rounded-full bg-[#D946EF] mx-auto flex items-center justify-center text-white text-3xl font-bold">
            {personalInfo.firstName?.[0]}{personalInfo.lastName?.[0]}
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-lg font-bold text-[#D946EF] mb-4 uppercase">Contact</h3>
          <div className="space-y-3 text-sm">
            {personalInfo.email && (
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#D946EF] mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="break-all">{personalInfo.email}</span>
              </div>
            )}
            
            {personalInfo.phone && (
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#D946EF] mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>{personalInfo.phone}</span>
              </div>
            )}
            
            {(personalInfo.city || personalInfo.state || personalInfo.country) && (
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#D946EF] mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
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
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#D946EF] mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                </svg>
                <span className="break-all">{personalInfo.website}</span>
              </div>
            )}
            
            {personalInfo.linkedin && (
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#D946EF] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="break-all">{personalInfo.linkedin}</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Skills - Always in sidebar */}
        {skills.length > 0 && (
          <div>
            <h3 className="text-lg font-bold text-[#D946EF] mb-4 uppercase">Skills</h3>
            <div className="space-y-3">
              {skills.map((skill) => (
                <div key={skill.id}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-semibold">{skill.name}</span>
                  </div>
                  <div className="w-full bg-white/50 rounded-full h-1.5 mb-1">
                    <div 
                      className="bg-[#D946EF] h-1.5 rounded-full" 
                      style={{ width: `${(skill.level / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="p-8 w-full md:w-2/3">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-1">
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>
          <h2 className="text-xl text-[#D946EF] font-medium">
            {personalInfo.title}
          </h2>
        </header>
        
        {/* Render sections in the order specified in sectionOrder */}
        {sectionOrder.filter(section => section !== 'skills').map(section => renderSection(section))}
      </div>
    </div>
  );
};

export default CreativeTemplate;
