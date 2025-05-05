
import { useResume, ResumeTheme } from "@/components/ResumeContext";
import { Card } from "@/components/ui/card";
import { CheckIcon } from "lucide-react";

const themes: { id: ResumeTheme; name: string; description: string; color: string }[] = [
  {
    id: "modern",
    name: "Modern",
    description: "Clean and contemporary design with a focus on readability",
    color: "#9b87f5",
  },
  {
    id: "classic",
    name: "Classic",
    description: "Traditional and elegant layout that's perfect for formal industries",
    color: "#0EA5E9",
  },
  {
    id: "creative",
    name: "Creative",
    description: "Unique and eye-catching design for creative professionals",
    color: "#D946EF",
  },
];

const ThemeSelector = () => {
  const { resumeData, updateTheme } = useResume();
  
  return (
    <div className="space-y-6 animate-fade-in">
      <h3 className="text-xl font-semibold mb-4">Choose a Template</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {themes.map((theme) => (
          <Card
            key={theme.id}
            className={`
              overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg
              ${resumeData.theme === theme.id ? "ring-2 ring-resume-primary ring-offset-2" : ""}
            `}
            onClick={() => updateTheme(theme.id)}
          >
            <div
              className="h-32"
              style={{ backgroundColor: theme.color }}
            ></div>
            <div className="p-4">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold">{theme.name}</h4>
                {resumeData.theme === theme.id && (
                  <span className="h-5 w-5 rounded-full bg-resume-primary flex items-center justify-center">
                    <CheckIcon className="h-3 w-3 text-white" />
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600 mt-1">{theme.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
