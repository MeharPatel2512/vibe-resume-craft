
import { useState } from "react";
import { useResume, Skill } from "@/components/ResumeContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { PencilIcon, XIcon, PlusIcon } from "lucide-react";
import { toast } from "sonner";

const SkillsForm = ({ onNext, onPrevious }: { onNext: () => void; onPrevious: () => void }) => {
  const { resumeData, addSkill, updateSkill, removeSkill } = useResume();
  
  const [isEditing, setIsEditing] = useState(false);
  const [currentSkill, setCurrentSkill] = useState<Skill>({
    id: "",
    name: "",
    level: 3,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCurrentSkill((prev) => ({ ...prev, [name]: value }));
  };

  const handleSliderChange = (value: number[]) => {
    setCurrentSkill((prev) => ({ ...prev, level: value[0] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isEditing) {
      updateSkill(currentSkill);
      toast.success("Skill updated successfully!");
    } else {
      // Check if skill already exists
      const skillExists = resumeData.skills.some(
        (skill) => skill.name.toLowerCase() === currentSkill.name.toLowerCase()
      );
      
      if (skillExists) {
        toast.error("This skill already exists!");
        return;
      }
      
      const newSkill = {
        ...currentSkill,
        id: Date.now().toString(),
      };
      addSkill(newSkill);
      toast.success("Skill added successfully!");
    }
    
    setCurrentSkill({
      id: "",
      name: "",
      level: 3,
    });
    setIsEditing(false);
  };

  const handleEdit = (skill: Skill) => {
    setCurrentSkill(skill);
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    removeSkill(id);
    toast.success("Skill removed successfully!");
  };

  const handleContinue = () => {
    if (resumeData.skills.length === 0) {
      toast.error("Please add at least one skill!");
      return;
    }
    onNext();
  };

  const getLevelLabel = (level: number) => {
    switch (level) {
      case 1:
        return "Beginner";
      case 2:
        return "Intermediate";
      case 3:
        return "Proficient";
      case 4:
        return "Advanced";
      case 5:
        return "Expert";
      default:
        return "Proficient";
    }
  };

  return (
    <div className="form-step animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 gradient-text">Skills</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6 mb-8">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Skill Name
          </label>
          <Input
            id="name"
            name="name"
            value={currentSkill.name}
            onChange={handleChange}
            placeholder="JavaScript"
            required
          />
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="level" className="block text-sm font-medium">
              Proficiency Level
            </label>
            <span className="text-sm text-resume-primary font-medium">
              {getLevelLabel(currentSkill.level)}
            </span>
          </div>
          
          <Slider 
            defaultValue={[currentSkill.level]} 
            max={5} 
            min={1} 
            step={1} 
            value={[currentSkill.level]}
            onValueChange={handleSliderChange}
            className="py-4"
          />
          
          <div className="flex justify-between text-xs text-gray-500 px-1">
            <span>Beginner</span>
            <span>Expert</span>
          </div>
        </div>
        
        <div>
          <Button type="submit" className="flex items-center gap-2">
            <PlusIcon className="h-4 w-4" />
            {isEditing ? "Update Skill" : "Add Skill"}
          </Button>
        </div>
      </form>
      
      {/* Skills List */}
      {resumeData.skills.length > 0 && (
        <div className="mb-8">
          <h3 className="font-semibold text-lg mb-4">Your Skills</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {resumeData.skills.map((skill) => (
              <Card key={skill.id} className="p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">{skill.name}</h4>
                    <div className="mt-1 flex items-center">
                      <div className="flex-1 bg-gray-200 h-1.5 rounded-full overflow-hidden">
                        <div 
                          className="bg-resume-primary h-full rounded-full" 
                          style={{ width: `${(skill.level / 5) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-600 ml-2">
                        {getLevelLabel(skill.level)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(skill)}
                      className="h-7 w-7 text-gray-500 hover:text-resume-primary"
                    >
                      <PencilIcon className="h-3.5 w-3.5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(skill.id)}
                      className="h-7 w-7 text-gray-500 hover:text-red-500"
                    >
                      <XIcon className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
      
      <div className="flex justify-between">
        <Button
          type="button"
          variant="outline"
          onClick={onPrevious}
        >
          Previous: Experience
        </Button>
        
        <Button
          type="button"
          className="primary-button"
          onClick={handleContinue}
        >
          Next: Preview
        </Button>
      </div>
    </div>
  );
};

export default SkillsForm;
