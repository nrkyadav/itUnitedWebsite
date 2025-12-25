import Layout from "@/components/CommonComponents/Layout";
import ContactusComponent from "@/components/HomepageComponents/ContactusComponent/ContactusComponent";
import EveryoneCustomer from "@/components/ServicesPageComponents/ServicesInternalPageComponents/SoftwareDevelopmentComponent/EveryoneCustomer/EveryoneCustomer";
import ExploreSpectrumIndustries from "@/components/ServicesPageComponents/ServicesInternalPageComponents/AIAutomationPageComponents/ExploreSpectrumIndustries/ExploreSpectrumIndustries";
import FaqComponent from "@/components/ServicesPageComponents/ServicesInternalPageComponents/SoftwareDevelopmentComponent/FaqComponent/FaqComponent";
import LetsTalkAbout from "@/components/ServicesPageComponents/ServicesInternalPageComponents/AIAutomationPageComponents/LetsTalkAbout/LetsTalkAbout";
import OtherServicesComponent from "@/components/ServicesPageComponents/ServicesInternalPageComponents/AIAutomationPageComponents/OtherServicesComponent/OtherServicesComponent";
import OurBlogs from "@/components/ServicesPageComponents/ServicesInternalPageComponents/AIAutomationPageComponents/OurBlogs/OurBlogs";
import TestimonialsForAI from "@/components/ServicesPageComponents/ServicesInternalPageComponents/AIAutomationPageComponents/TestimonialsForAI/TestimonialsForAI";
import ToolsWrapper from "@/components/ServicesPageComponents/ServicesInternalPageComponents/AIAutomationPageComponents/ToolsWrapper/ToolsWrapper";
import SmoothAnimatedSection from "@/helpers/SmoothAnimatedSection/SmoothAnimatedSection";
import MVPDevelopmentBanner from "@/components/ServicesPageComponents/ServicesInternalPageComponents/SoftwareDevelopmentComponent/MVPDevelopmentServices/MVPDevelopmentServicesBanner";
import ReduceStartupRisk from "@/components/ServicesPageComponents/ServicesInternalPageComponents/SoftwareDevelopmentComponent/ReduceStartupRisk/ReduceStartupRisk";
import BookDiscoveryCall from "@/components/ServicesPageComponents/ServicesInternalPageComponents/SoftwareDevelopmentComponent/BookDiscoveryCall/BookDiscoveryCall";
import BenefitsAIAutomationSolution from "@/components/ServicesPageComponents/ServicesInternalPageComponents/SoftwareDevelopmentComponent/BenefitsAIAutomationSolution/BenefitsAIAutomationSolution";
import OurFrameworks from "@/components/ServicesPageComponents/ServicesInternalPageComponents/SoftwareDevelopmentComponent/OurFrameworks/OurFrameworks";
import YourMVPConsorts from "@/components/ServicesPageComponents/ServicesInternalPageComponents/SoftwareDevelopmentComponent/YourMVPConsorts/YourMVPConsorts";
import DevelopmentProcess from "@/components/ServicesPageComponents/ServicesInternalPageComponents/SoftwareDevelopmentComponent/DevelopmentProcess/DevelopmentProcess";


export default function Services({ seo }) {
  return (
    <Layout seo={seo}>
      <SmoothAnimatedSection>
        <MVPDevelopmentBanner />
        <BookDiscoveryCall />
        <ReduceStartupRisk />
        <BenefitsAIAutomationSolution />
        <OurFrameworks />
        <YourMVPConsorts />
        <DevelopmentProcess />
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
  const servicesContent = await import("@/constants/ServicesPageContent/MvpDevelopmentPage.json");

  return {
    props: {
      seo: servicesContent.seoData
    }
  };
}