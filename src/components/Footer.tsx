
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Amzuka Digital Pvt Ltd</h3>
            <p className="text-gray-300 mb-4">
              Continuing operations in B2B/B2C product supply, fashion, clothing, 
              and lifestyle verticals.
            </p>
            <p className="text-sm text-gray-400">Established 2018</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Alvion Global Solutions Pvt Ltd</h3>
            <p className="text-gray-300 mb-4">
              Dedicated technology services entity for software development, 
              IT consulting, and enterprise solutions.
            </p>
            <p className="text-sm text-gray-400">
              Email: svprsdm@alvionglobal.com | www.alvionglobal.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Business Transition Notice. All ongoing projects and client agreements 
            are being transferred to ensure continuity of service.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
