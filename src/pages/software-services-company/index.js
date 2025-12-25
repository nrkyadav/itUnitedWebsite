import Layout from "@/components/CommonComponents/Layout";
import ContactusComponent from "@/components/HomepageComponents/ContactusComponent/ContactusComponent";
import IndustriesFlexibleEngagementModels from "@/components/IndustriesPageComponents/IndustriesFlexibleEngagementModels/IndustriesFlexibleEngagementModels";
import IndustriesOurInsights from "@/components/IndustriesPageComponents/IndustriesOurInsights/IndustriesOurInsights";
import OurSixStepProvendevelopmentMethodology from "@/components/IndustriesPageComponents/OurSixStepProvendevelopmentMethodology/OurSixStepProvendevelopmentMethodology";
import OurSoftwareDevelopmentServicesLandscape from "@/components/IndustriesPageComponents/OurSoftwareDevelopmentServicesLandscape/OurSoftwareDevelopmentServicesLandscape";
import SomeHappyClients from "@/components/IndustriesPageComponents/SomeHappyClients/SomeHappyClients";
import ServicesPageBanner from "@/components/ServicesPageComponents/ServicesPageBanner/ServicesPageBanner";
import SmoothAnimatedSection from "@/helpers/SmoothAnimatedSection/SmoothAnimatedSection";

export default function Services({ components, seo }) {
  return (
    <Layout seo={seo}>
      <SmoothAnimatedSection>
        <ServicesPageBanner data={components?.bannerData}/>
        <OurSoftwareDevelopmentServicesLandscape
          industriesCardData={components?.servicesPageSoftwareDevelopmentServicesLandscape}
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
  const servicesContent = await import("@/constants/ServicesPageContent/ServicesPage.json");
  
  return {
    props: {
      components: servicesContent.components,
      seo: servicesContent.seoData
    }
  };
}