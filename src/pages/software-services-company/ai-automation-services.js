import Layout from "@/components/CommonComponents/Layout";
import ContactusComponent from "@/components/HomepageComponents/ContactusComponent/ContactusComponent";
import AIAutomationBanner from "@/components/ServicesPageComponents/ServicesInternalPageComponents/AIAutomationPageComponents/AIAutomationBanner/AIAutomationBanner";
import BenefitsAIAutomationSolution from "@/components/ServicesPageComponents/ServicesInternalPageComponents/AIAutomationPageComponents/BenefitsAIAutomationSolution/BenefitsAIAutomationSolution";
import BookDiscoveryCall from "@/components/ServicesPageComponents/ServicesInternalPageComponents/AIAutomationPageComponents/BookDiscoveryCall/BookDiscoveryCall";
import EveryoneCustomer from "@/components/ServicesPageComponents/ServicesInternalPageComponents/AIAutomationPageComponents/EveryoneCustomer/EveryoneCustomer";
import ExploreSpectrumIndustries from "@/components/ServicesPageComponents/ServicesInternalPageComponents/AIAutomationPageComponents/ExploreSpectrumIndustries/ExploreSpectrumIndustries";
import FaqComponent from "@/components/ServicesPageComponents/ServicesInternalPageComponents/AIAutomationPageComponents/FaqComponent/FaqComponent";
import LetsTalkAbout from "@/components/ServicesPageComponents/ServicesInternalPageComponents/AIAutomationPageComponents/LetsTalkAbout/LetsTalkAbout";
import OtherServicesComponent from "@/components/ServicesPageComponents/ServicesInternalPageComponents/AIAutomationPageComponents/OtherServicesComponent/OtherServicesComponent";
import OurAICapabilities from "@/components/ServicesPageComponents/ServicesInternalPageComponents/AIAutomationPageComponents/OurAICapabilities/OurAICapabilities";
import OurBlogs from "@/components/ServicesPageComponents/ServicesInternalPageComponents/AIAutomationPageComponents/OurBlogs/OurBlogs";
import StarttoSuccess from "@/components/ServicesPageComponents/ServicesInternalPageComponents/AIAutomationPageComponents/StarttoSuccess/StarttoSuccess";
import TestimonialsForAI from "@/components/ServicesPageComponents/ServicesInternalPageComponents/AIAutomationPageComponents/TestimonialsForAI/TestimonialsForAI";
import ToolsWrapper from "@/components/ServicesPageComponents/ServicesInternalPageComponents/AIAutomationPageComponents/ToolsWrapper/ToolsWrapper";
import YourTrustedPartner from "@/components/ServicesPageComponents/ServicesInternalPageComponents/AIAutomationPageComponents/YourTrustedPartner/YourTrustedPartner";
import SmoothAnimatedSection from "@/helpers/SmoothAnimatedSection/SmoothAnimatedSection";

export default function Services({ seo }) {
  return (
    <Layout seo={seo}>
      <SmoothAnimatedSection>
        <AIAutomationBanner />
        <BookDiscoveryCall />
        <BenefitsAIAutomationSolution />
        <OurAICapabilities />
        <YourTrustedPartner />
        <StarttoSuccess />
        <ExploreSpectrumIndustries />
        <EveryoneCustomer />
        <TestimonialsForAI />
        <ToolsWrapper />
        <OtherServicesComponent />
        <OurBlogs />
        <FaqComponent />
        <LetsTalkAbout />
        <ContactusComponent />
      </SmoothAnimatedSection>
    </Layout>
  );
}


export async function getStaticProps() {
  const servicesContent = await import("@/constants/ServicesPageContent/AIAutomationPage.json");

  return {
    props: {
      seo: servicesContent.seoData
    }
  };
}