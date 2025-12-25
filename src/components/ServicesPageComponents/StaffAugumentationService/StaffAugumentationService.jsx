import Layout from "@/components/CommonComponents/Layout";
import ContactusComponent from "@/components/HomepageComponents/ContactusComponent/ContactusComponent";
import ExploreSpectrumIndustries from "@/components/ServicesPageComponents/ServicesInternalPageComponents/AIAutomationPageComponents/ExploreSpectrumIndustries/ExploreSpectrumIndustries";
import LetsTalkAbout from "@/components/ServicesPageComponents/ServicesInternalPageComponents/AIAutomationPageComponents/LetsTalkAbout/LetsTalkAbout";
import OtherServicesComponent from "@/components/ServicesPageComponents/ServicesInternalPageComponents/AIAutomationPageComponents/OtherServicesComponent/OtherServicesComponent";
import OurBlogs from "@/components/ServicesPageComponents/ServicesInternalPageComponents/AIAutomationPageComponents/OurBlogs/OurBlogs";
import TestimonialsForAI from "@/components/ServicesPageComponents/ServicesInternalPageComponents/AIAutomationPageComponents/TestimonialsForAI/TestimonialsForAI";
import ToolsWrapper from "@/components/ServicesPageComponents/ServicesInternalPageComponents/AIAutomationPageComponents/ToolsWrapper/ToolsWrapper";
import SmoothAnimatedSection from "@/helpers/SmoothAnimatedSection/SmoothAnimatedSection";
import ReduceStartupRisk from "../ServicesInternalPageComponents/DedictaedTeamComponent/ReduceStartupRisk/ReduceStartupRisk";
import BenefitsAIAutomationSolution from "../ServicesInternalPageComponents/DedictaedTeamComponent/BenefitsAIAutomationSolution/BenefitsAIAutomationSolution";
import BookDiscoveryCall from "@/components/ServicesPageComponents/ServicesInternalPageComponents/DedictaedTeamComponent/BookDiscoveryCall/BookDiscoveryCall";
import OurFrameworks from "../ServicesInternalPageComponents/DedictaedTeamComponent/OurFrameworks/OurFrameworks";
import YourMVPConsorts from "../ServicesInternalPageComponents/DedictaedTeamComponent/YourMVPConsorts/YourMVPConsorts";
import DevelopmentProcess from "../ServicesInternalPageComponents/DedictaedTeamComponent/DevelopmentProcess/DevelopmentProcess";
import AIAutomationBanner from "../ServicesInternalPageComponents/DedictaedTeamComponent/AIAutomationBanner/AIAutomationBanner";
import LetsBuildTogether from "../ServicesInternalPageComponents/DedictaedTeamComponent/LetsBuildTogether/LetsBuildTogether";
import FaqComponent from "../ServicesInternalPageComponents/DedictaedTeamComponent/FaqComponent/FaqComponent";
export default function StaffAugumentationServices() {
  return (
    <SmoothAnimatedSection>
      <Layout>
        <AIAutomationBanner />
        <BookDiscoveryCall />
        <ReduceStartupRisk />
        <BenefitsAIAutomationSolution />
        <OurFrameworks />
        <YourMVPConsorts />
        <LetsBuildTogether />
        <DevelopmentProcess />
        <ExploreSpectrumIndustries />
        <ToolsWrapper />
        <TestimonialsForAI />
        <OtherServicesComponent />
        <OurBlogs />
        <FaqComponent />
        <LetsTalkAbout />
        <ContactusComponent />
      </Layout>
    </SmoothAnimatedSection>
  );
}
