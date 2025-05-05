
import { useState } from "react";
import { useResume, Education } from "@/components/ResumeContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PencilIcon, XIcon, PlusIcon } from "lucide-react";
import { toast } from "sonner";

const EducationForm = ({ onNext, onPrevious }: { onNext: () => void; onPrevious: () => void }) => {
  const { resumeData, addEducation, updateEducation, removeEducation } = useResume();
  
  const [isEditing, setIsEditing] = useState(false);
  const [currentEducation, setCurrentEducation] = useState<Education>({
    id: "",
    school: "",
    degree: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCurrentEducation((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isEditing) {
      updateEducation(currentEducation);
      toast.success("Education updated successfully!");
    } else {
      const newEducation = {
        ...currentEducation,
        id: Date.now().toString(),
      };
      addEducation(newEducation);
      toast.success("Education added successfully!");
    }
    
    setCurrentEducation({
      id: "",
      school: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      description: "",
    });
    setIsEditing(false);
  };

  const handleEdit = (education: Education) => {
    setCurrentEducation(education);
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    removeEducation(id);
    toast.success("Education removed successfully!");
  };

  const handleContinue = () => {
    onNext();
  };

  return (
    <div className="form-step animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 gradient-text">Education</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6 mb-8">
        <div>
          <label htmlFor="school" className="block text-sm font-medium mb-1">
            School / University
          </label>
          <Input
            id="school"
            name="school"
            value={currentEducation.school}
            onChange={handleChange}
            placeholder="Harvard University"
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="degree" className="block text-sm font-medium mb-1">
              Degree
            </label>
            <Input
              id="degree"
              name="degree"
              value={currentEducation.degree}
              onChange={handleChange}
              placeholder="Bachelor of Science"
              required
            />
          </div>
          
          <div>
            <label htmlFor="fieldOfStudy" className="block text-sm font-medium mb-1">
              Field of Study
            </label>
            <Input
              id="fieldOfStudy"
              name="fieldOfStudy"
              value={currentEducation.fieldOfStudy}
              onChange={handleChange}
              placeholder="Computer Science"
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium mb-1">
              Start Date
            </label>
            <Input
              id="startDate"
              name="startDate"
              type="month"
              value={currentEducation.startDate}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <label htmlFor="endDate" className="block text-sm font-medium mb-1">
              End Date (or Expected)
            </label>
            <Input
              id="endDate"
              name="endDate"
              type="month"
              value={currentEducation.endDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-1">
            Description (Optional)
          </label>
          <Textarea
            id="description"
            name="description"
            value={currentEducation.description}
            onChange={handleChange}
            placeholder="Relevant coursework, honors, awards, etc."
            rows={3}
          />
        </div>
        
        <div>
          <Button type="submit" className="flex items-center gap-2">
            <PlusIcon className="h-4 w-4" />
            {isEditing ? "Update Education" : "Add Education"}
          </Button>
        </div>
      </form>
      
      {/* Education List */}
      {resumeData.education.length > 0 && (
        <div className="space-y-4 mb-8">
          <h3 className="font-semibold text-lg">Education Entries</h3>
          
          {resumeData.education.map((edu) => (
            <Card key={edu.id} className="p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">{edu.school}</h4>
                  <p className="text-sm text-gray-600">
                    {edu.degree} in {edu.fieldOfStudy}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(edu.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                    {new Date(edu.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                  </p>
                  {edu.description && <p className="text-sm mt-1">{edu.description}</p>}
                </div>
                
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEdit(edu)}
                    className="h-8 w-8 text-gray-500 hover:text-resume-primary"
                  >
                    <PencilIcon className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(edu.id)}
                    className="h-8 w-8 text-gray-500 hover:text-red-500"
                  >
                    <XIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
      
      <div className="flex justify-between">
        <Button
          type="button"
          variant="outline"
          onClick={onPrevious}
        >
          Previous: Personal Info
        </Button>
        
        <Button
          type="button"
          className="primary-button"
          onClick={handleContinue}
        >
          Next: Experience
        </Button>
      </div>
    </div>
  );
};

export default EducationForm;
