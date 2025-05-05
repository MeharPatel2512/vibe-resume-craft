
import { useState } from "react";
import { useResume, Experience } from "@/components/ResumeContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { PencilIcon, XIcon, PlusIcon } from "lucide-react";
import { toast } from "sonner";

const ExperienceForm = ({ onNext, onPrevious }: { onNext: () => void; onPrevious: () => void }) => {
  const { resumeData, addExperience, updateExperience, removeExperience } = useResume();
  
  const [isEditing, setIsEditing] = useState(false);
  const [currentExperience, setCurrentExperience] = useState<Experience>({
    id: "",
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    current: false,
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCurrentExperience((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setCurrentExperience((prev) => ({ ...prev, current: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isEditing) {
      updateExperience(currentExperience);
      toast.success("Experience updated successfully!");
    } else {
      const newExperience = {
        ...currentExperience,
        id: Date.now().toString(),
      };
      addExperience(newExperience);
      toast.success("Experience added successfully!");
    }
    
    setCurrentExperience({
      id: "",
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    });
    setIsEditing(false);
  };

  const handleEdit = (experience: Experience) => {
    setCurrentExperience(experience);
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    removeExperience(id);
    toast.success("Experience removed successfully!");
  };

  const handleContinue = () => {
    onNext();
  };

  return (
    <div className="form-step animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 gradient-text">Work Experience</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-1">
              Company
            </label>
            <Input
              id="company"
              name="company"
              value={currentExperience.company}
              onChange={handleChange}
              placeholder="Google Inc."
              required
            />
          </div>
          
          <div>
            <label htmlFor="position" className="block text-sm font-medium mb-1">
              Position
            </label>
            <Input
              id="position"
              name="position"
              value={currentExperience.position}
              onChange={handleChange}
              placeholder="Senior Software Engineer"
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
              value={currentExperience.startDate}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <div className="flex items-center mb-2">
              <label htmlFor="endDate" className="block text-sm font-medium">
                End Date
              </label>
              <div className="ml-auto flex items-center space-x-2">
                <Checkbox 
                  id="currentJob"
                  checked={currentExperience.current}
                  onCheckedChange={handleCheckboxChange}
                />
                <label 
                  htmlFor="currentJob" 
                  className="text-xs text-gray-600 cursor-pointer"
                >
                  Currently working here
                </label>
              </div>
            </div>
            <Input
              id="endDate"
              name="endDate"
              type="month"
              value={currentExperience.endDate}
              onChange={handleChange}
              disabled={currentExperience.current}
              required={!currentExperience.current}
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-1">
            Description
          </label>
          <Textarea
            id="description"
            name="description"
            value={currentExperience.description}
            onChange={handleChange}
            placeholder="Describe your responsibilities, achievements, and skills used in this role."
            rows={4}
            required
          />
          <p className="text-xs text-gray-500 mt-1">
            Use bullet points by starting lines with • or - for better readability.
          </p>
        </div>
        
        <div>
          <Button type="submit" className="flex items-center gap-2">
            <PlusIcon className="h-4 w-4" />
            {isEditing ? "Update Experience" : "Add Experience"}
          </Button>
        </div>
      </form>
      
      {/* Experience List */}
      {resumeData.experience.length > 0 && (
        <div className="space-y-4 mb-8">
          <h3 className="font-semibold text-lg">Experience Entries</h3>
          
          {resumeData.experience.map((exp) => (
            <Card key={exp.id} className="p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">{exp.position}</h4>
                  <p className="text-sm text-gray-600">{exp.company}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(exp.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                    {exp.current ? " Present" : 
                     new Date(exp.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                  </p>
                  <p className="text-sm mt-2 whitespace-pre-line">{exp.description}</p>
                </div>
                
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEdit(exp)}
                    className="h-8 w-8 text-gray-500 hover:text-resume-primary"
                  >
                    <PencilIcon className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(exp.id)}
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
          Previous: Education
        </Button>
        
        <Button
          type="button"
          className="primary-button"
          onClick={handleContinue}
        >
          Next: Skills
        </Button>
      </div>
    </div>
  );
};

export default ExperienceForm;
