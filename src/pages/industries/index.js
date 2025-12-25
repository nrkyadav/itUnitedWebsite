import Layout from "@/components/CommonComponents/Layout";
import ContactusComponent from "@/components/HomepageComponents/ContactusComponent/ContactusComponent";
import IndustriesBanner from "@/components/IndustriesPageComponents/IndustriesBanner/IndustriesBanner";
import IndustriesFlexibleEngagementModels from "@/components/IndustriesPageComponents/IndustriesFlexibleEngagementModels/IndustriesFlexibleEngagementModels";
import IndustriesOurInsights from "@/components/IndustriesPageComponents/IndustriesOurInsights/IndustriesOurInsights";
import OurSixStepProvendevelopmentMethodology from "@/components/IndustriesPageComponents/OurSixStepProvendevelopmentMethodology/OurSixStepProvendevelopmentMethodology";
import OurSoftwareDevelopmentServicesLandscape from "@/components/IndustriesPageComponents/OurSoftwareDevelopmentServicesLandscape/OurSoftwareDevelopmentServicesLandscape";
import SomeHappyClients from "@/components/IndustriesPageComponents/SomeHappyClients/SomeHappyClients";
import SmoothAnimatedSection from "@/helpers/SmoothAnimatedSection/SmoothAnimatedSection";

export default function Industries({ components, seo }) {
  return (
    <Layout seo={seo}>
      <SmoothAnimatedSection>
        <IndustriesBanner data={components?.bannerData}/>
        <OurSoftwareDevelopmentServicesLandscape
          industriesCardData={components?.industriesSoftwareDevelopmentServicesLandscape}
        />
        <OurSixStepProvendevelopmentMethodology data={components?.provenDevelopmentMethodologyData} />
        <IndustriesFlexibleEngagementModels data={components?.engagementModelsData}/>
        <IndustriesOurInsights data={components?.ourInsightsData} />
        <SomeHappyClients data={components?.someHappyClients}/>
        <ContactusComponent />
      </SmoothAnimatedSection>
    </Layout>
  );
}


export async function getStaticProps() {
  const industriesContent = await import("@/constants/IndustriesPageContent/IndustriesPage.json");
  
  return {
    props: {
      components: industriesContent.components,
      seo: industriesContent.seoData
    }
  };
}