
import { useResume } from "@/components/ResumeContext";
import { Button } from "@/components/ui/button";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { Loader2Icon } from "lucide-react";
import ModernTemplate from "./templates/ModernTemplate";
import ClassicTemplate from "./templates/ClassicTemplate";
import CreativeTemplate from "./templates/CreativeTemplate";

const ResumePreview = ({ onPrevious }: { onPrevious: () => void }) => {
  const { resumeData } = useResume();
  const resumeRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

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

  const generatePDF = async () => {
    if (!resumeRef.current) return;

    setIsGenerating(true);
    
    try {
      const resumeElement = resumeRef.current;
      
      const canvas = await html2canvas(resumeElement, {
        scale: 2,
        logging: false,
        useCORS: true,
      });
      
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      
      // A4 dimensions: 210mm x 297mm
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });
      
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);
      pdf.save(`${resumeData.personalInfo.firstName}-${resumeData.personalInfo.lastName}-Resume.pdf`);
      
      toast.success("Resume downloaded successfully!");
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast.error("Error generating PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h2 className="text-2xl font-bold gradient-text mb-4">Preview & Download</h2>
        <p className="text-gray-600">
          Here's a preview of your resume. You can download it as a PDF or go back to make changes.
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
                onClick={generatePDF}
                className="w-full primary-button"
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <Loader2Icon className="mr-2 h-4 w-4 animate-spin" /> Generating...
                  </>
                ) : (
                  "Download PDF"
                )}
              </Button>
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
