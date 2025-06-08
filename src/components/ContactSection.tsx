
import { Mail, Globe, Phone, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Contact Information
          </h2>
          <p className="text-lg text-gray-600">
            For software-related queries and business transitions, please reach out to our new entity
          </p>
        </div>

        <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-green-100">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-green-800 mb-2">
              Alvion Global Solutions Pvt Ltd
            </CardTitle>
            <p className="text-green-600 font-medium">Your Technology Partner</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4 bg-white p-4 rounded-lg">
                <div className="bg-green-600 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Email</p>
                  <p className="text-green-600 font-mono">svprsdm@alvionglobal.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-white p-4 rounded-lg">
                <div className="bg-green-600 p-2 rounded-full">
                  <Globe className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Website</p>
                  <p className="text-green-600">www.alviongs.com</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700"
                onClick={() => window.open('mailto:svprsdm@alvionglobal.com', '_blank')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Alvion Global
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-gray-600 leading-relaxed">
            We appreciate your understanding during this transition period and look forward to 
            continuing our partnership under our new, focused business structure. This change 
            allows us to provide even better specialized services in both technology and trading sectors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
