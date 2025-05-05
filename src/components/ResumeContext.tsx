import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ResumeTheme = 'modern' | 'classic' | 'creative';
export type SectionType = 'personal' | 'experience' | 'education' | 'skills';

export interface Education {
  id: string;
  school: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number;
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  title: string;
  summary: string;
  website: string;
  linkedin: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  theme: ResumeTheme;
  sectionOrder: SectionType[];
}

const defaultResumeData: ResumeData = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    title: '',
    summary: '',
    website: '',
    linkedin: '',
  },
  education: [],
  experience: [],
  skills: [],
  theme: 'modern',
  sectionOrder: ['personal', 'experience', 'education', 'skills'],
};

interface ResumeContextType {
  resumeData: ResumeData;
  updatePersonalInfo: (info: Partial<PersonalInfo>) => void;
  addEducation: (education: Education) => void;
  updateEducation: (education: Education) => void;
  removeEducation: (id: string) => void;
  addExperience: (experience: Experience) => void;
  updateExperience: (experience: Experience) => void;
  removeExperience: (id: string) => void;
  addSkill: (skill: Skill) => void;
  updateSkill: (skill: Skill) => void;
  removeSkill: (id: string) => void;
  updateTheme: (theme: ResumeTheme) => void;
  updateSectionOrder: (newOrder: SectionType[]) => void;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
};

interface ResumeProviderProps {
  children: ReactNode;
}

export const ResumeProvider = ({ children }: ResumeProviderProps) => {
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);

  const updatePersonalInfo = (info: Partial<PersonalInfo>) => {
    setResumeData((prevData) => ({
      ...prevData,
      personalInfo: { ...prevData.personalInfo, ...info },
    }));
  };

  const addEducation = (education: Education) => {
    setResumeData((prevData) => ({
      ...prevData,
      education: [...prevData.education, education],
    }));
  };

  const updateEducation = (updatedEducation: Education) => {
    setResumeData((prevData) => ({
      ...prevData,
      education: prevData.education.map((edu) =>
        edu.id === updatedEducation.id ? updatedEducation : edu
      ),
    }));
  };

  const removeEducation = (id: string) => {
    setResumeData((prevData) => ({
      ...prevData,
      education: prevData.education.filter((edu) => edu.id !== id),
    }));
  };

  const addExperience = (experience: Experience) => {
    setResumeData((prevData) => ({
      ...prevData,
      experience: [...prevData.experience, experience],
    }));
  };

  const updateExperience = (updatedExperience: Experience) => {
    setResumeData((prevData) => ({
      ...prevData,
      experience: prevData.experience.map((exp) =>
        exp.id === updatedExperience.id ? updatedExperience : exp
      ),
    }));
  };

  const removeExperience = (id: string) => {
    setResumeData((prevData) => ({
      ...prevData,
      experience: prevData.experience.filter((exp) => exp.id !== id),
    }));
  };

  const addSkill = (skill: Skill) => {
    setResumeData((prevData) => ({
      ...prevData,
      skills: [...prevData.skills, skill],
    }));
  };

  const updateSkill = (updatedSkill: Skill) => {
    setResumeData((prevData) => ({
      ...prevData,
      skills: prevData.skills.map((skill) =>
        skill.id === updatedSkill.id ? updatedSkill : skill
      ),
    }));
  };

  const removeSkill = (id: string) => {
    setResumeData((prevData) => ({
      ...prevData,
      skills: prevData.skills.filter((skill) => skill.id !== id),
    }));
  };

  const updateTheme = (theme: ResumeTheme) => {
    setResumeData((prevData) => ({
      ...prevData,
      theme,
    }));
  };

  const updateSectionOrder = (newOrder: SectionType[]) => {
    setResumeData((prevData) => ({
      ...prevData,
      sectionOrder: newOrder,
    }));
  };

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        updatePersonalInfo,
        addEducation,
        updateEducation,
        removeEducation,
        addExperience,
        updateExperience,
        removeExperience,
        addSkill,
        updateSkill,
        removeSkill,
        updateTheme,
        updateSectionOrder,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};
