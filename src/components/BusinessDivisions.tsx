
import { ShoppingBag, Code, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BusinessDivisions = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Business Division Structure
          </h2>
          <p className="text-lg text-gray-600">
            Clear separation of business verticals for enhanced focus and service delivery
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Amzuka Digital */}
          <Card className="border-2 border-blue-200 bg-blue-50">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto bg-blue-600 p-3 rounded-full w-fit mb-4">
                <ShoppingBag className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-blue-800">
                Amzuka Digital Pvt Ltd
              </CardTitle>
              <p className="text-blue-600 font-medium">Trading & Supply Division</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Continuing Operations:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-blue-500 mr-2" />
                    B2B and B2C Product Supply
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-blue-500 mr-2" />
                    Fashion & Clothing Verticals
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-blue-500 mr-2" />
                    Lifestyle Products Trading
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-blue-500 mr-2" />
                    Domestic & International Operations
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Alvion Global */}
          <Card className="border-2 border-green-200 bg-green-50">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto bg-green-600 p-3 rounded-full w-fit mb-4">
                <Code className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-green-800">
                Alvion Global Solutions Pvt Ltd
              </CardTitle>
              <p className="text-green-600 font-medium">Technology Services Division</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">New Dedicated Services:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-green-500 mr-2" />
                    Software Development
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-green-500 mr-2" />
                    IT Consulting Services
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-green-500 mr-2" />
                    AI/ML Solutions
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-green-500 mr-2" />
                    Mobile & Web App Development
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-green-500 mr-2" />
                    Enterprise Tech Services
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-lg font-medium text-yellow-800">
                Important Note for Existing Clients
              </h3>
              <div className="mt-2 text-yellow-700">
                <p>
                  All ongoing software projects, intellectual properties, and client service agreements 
                  will be executed under the <strong>Alvion Global Solutions Pvt Ltd</strong> banner. 
                  Our team will contact you to assist with a smooth transition and provide updated 
                  legal and operational documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessDivisions;
