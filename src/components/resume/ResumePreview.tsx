
import { useResume, SectionType } from "@/components/ResumeContext";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { toast } from "sonner";
import ModernTemplate from "./templates/ModernTemplate";
import ClassicTemplate from "./templates/ClassicTemplate";
import CreativeTemplate from "./templates/CreativeTemplate";
import { GripVertical } from "lucide-react";

const ResumePreview = ({ onPrevious }: { onPrevious: () => void }) => {
  const { resumeData, updateSectionOrder } = useResume();
  const resumeRef = useRef<HTMLDivElement>(null);

  const getTemplate = () => {
    switch (resumeData.theme) {
      case "modern":
        return <ModernTemplate />;
      case "classic":
        return <ClassicTemplate />;
      case "creative":
        return <CreativeTemplate />;
      default:
        return <ModernTemplate />;
    }
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    
    const items = Array.from(resumeData.sectionOrder);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    updateSectionOrder(items);
    toast.success("Section order updated successfully!");
  };

  const getSectionName = (sectionType: SectionType): string => {
    switch (sectionType) {
      case 'personal': return 'Personal Information';
      case 'experience': return 'Work Experience';
      case 'education': return 'Education';
      case 'skills': return 'Skills';
      default: return sectionType;
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h2 className="text-2xl font-bold gradient-text mb-4">Preview</h2>
        <p className="text-gray-600">
          Here's a preview of your resume. You can go back to make changes.
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 lg:max-w-[210mm] mx-auto">
          <div className="border rounded-lg shadow-lg overflow-hidden bg-white" ref={resumeRef}>
            {getTemplate()}
          </div>
        </div>
        
        <div className="lg:w-64 space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-4">Actions</h3>
            <div className="space-y-4">
              <Button
                variant="outline"
                onClick={onPrevious}
                className="w-full"
              >
                Back to Edit
              </Button>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-4">Section Order</h3>
            <p className="text-sm text-gray-600 mb-4">Drag and drop to reorganize sections</p>
            
            <DragDropContext onDragEnd={handleDragEnd}>
              <Droppable droppableId="resume-sections">
                {(provided) => (
                  <div
                    className="space-y-2"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {resumeData.sectionOrder.map((section, index) => (
                      <Draggable key={section} draggableId={section} index={index}>
                        {(provided, snapshot) => (
                          <div
                            className={`flex items-center p-2 rounded border ${
                              snapshot.isDragging ? "bg-blue-50 border-resume-primary" : "bg-white border-gray-200"
                            }`}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <GripVertical size={16} className="mr-2 flex-shrink-0 text-gray-400" />
                            <span className="text-sm">{getSectionName(section)}</span>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-4">Tips</h3>
            <ul className="list-disc list-inside text-sm space-y-2 text-gray-600">
              <li>Keep your resume to one page for best results</li>
              <li>Use bullet points for better readability</li>
              <li>Quantify achievements with numbers when possible</li>
              <li>Proofread for any spelling or grammar errors</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
