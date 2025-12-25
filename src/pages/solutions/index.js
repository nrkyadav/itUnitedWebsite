import Layout from "@/components/CommonComponents/Layout";
import ContactusComponent from "@/components/HomepageComponents/ContactusComponent/ContactusComponent";
import IndustriesFlexibleEngagementModels from "@/components/IndustriesPageComponents/IndustriesFlexibleEngagementModels/IndustriesFlexibleEngagementModels";
import IndustriesOurInsights from "@/components/IndustriesPageComponents/IndustriesOurInsights/IndustriesOurInsights";
import OurSixStepProvendevelopmentMethodology from "@/components/IndustriesPageComponents/OurSixStepProvendevelopmentMethodology/OurSixStepProvendevelopmentMethodology";
import OurSoftwareDevelopmentServicesLandscape from "@/components/IndustriesPageComponents/OurSoftwareDevelopmentServicesLandscape/OurSoftwareDevelopmentServicesLandscape";
import SomeHappyClients from "@/components/IndustriesPageComponents/SomeHappyClients/SomeHappyClients";
import SolutionsBanner from "@/components/SolutionsPageComponents/SolutionsBanner/SolutionsBanner";
import SmoothAnimatedSection from "@/helpers/SmoothAnimatedSection/SmoothAnimatedSection";

export default function Solutions({components, seo}) {
  return (
    <Layout seo={seo}>
      <SmoothAnimatedSection>
        <SolutionsBanner data={components?.bannerData}/>
        <OurSoftwareDevelopmentServicesLandscape
          industriesCardData={components?.solutionsSoftwareDevelopmentServicesLandscape}
        />
        <OurSixStepProvendevelopmentMethodology data={components?.provenDevelopmentMethodologyData}/>
        <IndustriesFlexibleEngagementModels data={components?.engagementModelsData}/>
        <IndustriesOurInsights data={components?.ourInsightsData}/>
        <SomeHappyClients data={components?.someHappyClients}/>
        <ContactusComponent />
      </SmoothAnimatedSection>
    </Layout>
  );
}



export async function getStaticProps() {
  const solutionsContent = await import("@/constants/SolutionPageContent/SolutionsPage.json");
  
  return {
    props: {
      components: solutionsContent.components,
      seo: solutionsContent.seoData
    }
  };
}