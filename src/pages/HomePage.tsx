
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckIcon } from "lucide-react";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:py-40 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-white to-purple-50 opacity-70 -z-10"></div>
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent -z-10"></div>
        
        {/* Animated shapes */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-resume-primary/5 rounded-full animate-float -z-10"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-resume-secondary/5 rounded-full animate-float -z-10" style={{ animationDelay: '1s' }}></div>

        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Create Stunning <span className="gradient-text">Resumes</span> That Get You Hired
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Build professional resumes in minutes with our easy-to-use builder. 
                Stand out from the competition and land your dream job faster.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/builder">
                  <Button className="primary-button text-lg">
                    Create Your Resume
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" className="secondary-button text-lg">
                    Learn More
                  </Button>
                </Link>
              </div>
              
              <div className="mt-8 flex items-center space-x-2 text-sm text-gray-500">
                <span className="inline-flex items-center justify-center bg-green-100 text-green-600 p-1 rounded-full">
                  <CheckIcon className="h-3 w-3" />
                </span>
                <span>No credit card required</span>
                
                <span className="inline-flex items-center justify-center bg-green-100 text-green-600 p-1 rounded-full ml-4">
                  <CheckIcon className="h-3 w-3" />
                </span>
                <span>ATS-friendly templates</span>
                
                <span className="inline-flex items-center justify-center bg-green-100 text-green-600 p-1 rounded-full ml-4">
                  <CheckIcon className="h-3 w-3" />
                </span>
                <span>Unlimited downloads</span>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="Resume Example" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <CheckIcon className="h-5 w-5" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-semibold">ATS-Optimized</p>
                    <p className="text-xs text-gray-500">Pass through application tracking systems</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-sm font-semibold">3 Professional Themes</p>
                <div className="flex mt-2 space-x-1">
                  <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
                  <span className="w-4 h-4 bg-resume-primary rounded-full"></span>
                  <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Create Professional Resumes in <span className="gradient-text">Minutes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our intuitive builder makes it easy to create a resume that helps you stand out and gets you noticed by employers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow border-resume-primary/10 animate-fade-in">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full gradient-bg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy Step-by-Step Process</h3>
                <p className="text-gray-600">
                  Our guided form takes you through each section of your resume, making it simple to add your information.
                </p>
              </CardContent>
            </Card>
            
            {/* Feature 2 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow border-resume-primary/10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full gradient-bg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Professional Templates</h3>
                <p className="text-gray-600">
                  Choose from multiple professionally designed themes that are proven to catch recruiters' attention.
                </p>
              </CardContent>
            </Card>
            
            {/* Feature 3 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow border-resume-primary/10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full gradient-bg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Instant PDF Download</h3>
                <p className="text-gray-600">
                  Export your polished resume as a professional PDF file ready to be sent to employers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Templates Preview */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional <span className="gradient-text">Resume Templates</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our collection of professionally designed templates that are optimized for applicant tracking systems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Template 1 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1586282391129-76a6b6a21188?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Modern Resume Template" 
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold">Modern</h3>
                <p className="text-white/80 mb-4">Clean and contemporary design</p>
                <Link to="/builder" className="text-white font-medium hover:text-resume-primary transition-colors">
                  Try This Template →
                </Link>
              </div>
            </div>
            
            {/* Template 2 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1471970394675-613138e45da3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Classic Resume Template" 
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold">Classic</h3>
                <p className="text-white/80 mb-4">Traditional and elegant layout</p>
                <Link to="/builder" className="text-white font-medium hover:text-resume-primary transition-colors">
                  Try This Template →
                </Link>
              </div>
            </div>
            
            {/* Template 3 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <img 
                src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Creative Resume Template" 
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold">Creative</h3>
                <p className="text-white/80 mb-4">Unique design that stands out</p>
                <Link to="/builder" className="text-white font-medium hover:text-resume-primary transition-colors">
                  Try This Template →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/builder">
              <Button className="primary-button text-lg">
                Create Your Resume Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Users <span className="gradient-text">Are Saying</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of job seekers who have successfully landed interviews using our resume builder.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow border-resume-primary/10 animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-resume-primary/20 flex items-center justify-center text-resume-primary mr-4">
                    "
                  </div>
                  <div>
                    <h3 className="font-semibold">Sarah J.</h3>
                    <p className="text-sm text-gray-500">Marketing Manager</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "I applied to 3 jobs with my new resume and got invited to interview for all of them! The templates are beautiful and so easy to customize."
                </p>
              </CardContent>
            </Card>
            
            {/* Testimonial 2 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow border-resume-primary/10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-resume-primary/20 flex items-center justify-center text-resume-primary mr-4">
                    "
                  </div>
                  <div>
                    <h3 className="font-semibold">Michael T.</h3>
                    <p className="text-sm text-gray-500">Software Engineer</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The step-by-step process made it so easy to create a professional resume. I landed my dream job within 2 weeks of using VibeResume!"
                </p>
              </CardContent>
            </Card>
            
            {/* Testimonial 3 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow border-resume-primary/10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-resume-primary/20 flex items-center justify-center text-resume-primary mr-4">
                    "
                  </div>
                  <div>
                    <h3 className="font-semibold">Alex R.</h3>
                    <p className="text-sm text-gray-500">Recent Graduate</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "As a recent graduate with limited experience, I was worried about my resume. VibeResume helped me highlight my skills and I got a job offer within a month!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-resume-primary to-resume-tertiary -z-10"></div>
        
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Create a Winning Resume?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of job seekers who have successfully landed their dream jobs with our professional resume builder.
            </p>
            
            <Link to="/builder">
              <Button className="bg-white text-resume-primary hover:bg-gray-100 font-semibold py-3 px-8 text-lg rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
                Get Started for Free
              </Button>
            </Link>
            
            <p className="mt-6 text-sm text-white/70">
              No credit card required. Create and download your professional resume in minutes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
