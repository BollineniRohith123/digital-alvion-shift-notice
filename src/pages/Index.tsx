
import Hero from "@/components/Hero";
import TransitionDetails from "@/components/TransitionDetails";
import BusinessDivisions from "@/components/BusinessDivisions";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TransitionDetails />
      <BusinessDivisions />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
