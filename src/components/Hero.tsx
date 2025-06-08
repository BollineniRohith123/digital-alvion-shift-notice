
import { ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleLearnMore = () => {
    window.open('https://www.alvionglobal.com', '_blank');
  };

  const handleContactUs = () => {
    window.open('https://www.alvionglobal.com', '_blank');
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-600 p-3 rounded-full">
            <Building2 className="h-8 w-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Important Business Transition Notice
        </h1>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          Amzuka Digital Private Limited announces strategic restructuring of operations
          with the transition of software development services to Alvion Global Solutions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={handleLearnMore}>
            Learn More <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" onClick={handleContactUs}>
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
