
import { Calendar, Users, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TransitionDetails = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Strategic Business Restructuring
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            As part of our long-term vision, we are streamlining operations to create 
            focused business verticals that better serve our clients and stakeholders.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="border-2 border-gray-100 hover:border-blue-200 transition-colors">
            <CardHeader>
              <Calendar className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Established 2018</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Amzuka Digital Private Limited has been serving clients for over 5 years 
                across multiple business verticals.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 hover:border-blue-200 transition-colors">
            <CardHeader>
              <ArrowRight className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle>Strategic Transition</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Software development operations are being transferred to create 
                specialized focus areas for better service delivery.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 hover:border-blue-200 transition-colors">
            <CardHeader>
              <Users className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle>Client Focus</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Improved innovation and scalable growth opportunities through 
                dedicated technology services entity.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TransitionDetails;
