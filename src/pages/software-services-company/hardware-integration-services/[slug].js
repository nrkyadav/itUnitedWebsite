import Layout from "@/components/CommonComponents/Layout";
import ContactusComponent from "@/components/HomepageComponents/ContactusComponent/ContactusComponent";
import IndustriesFlexibleEngagementModels from "@/components/IndustriesPageComponents/IndustriesFlexibleEngagementModels/IndustriesFlexibleEngagementModels";
import IndustriesOurInsights from "@/components/IndustriesPageComponents/IndustriesOurInsights/IndustriesOurInsights";
import IndustriesStartupApproach from "@/components/IndustriesPageComponents/IndustriesStartupsComponents/IndsutriesStartupApproach/IndustriesStartupApproach";
import IndustriesFaqs from "@/components/IndustriesPageComponents/IndustriesStartupsComponents/IndustriesFaqs/IndustriesFaqs";
import IndustriesLetsBuildTogether from "@/components/IndustriesPageComponents/IndustriesStartupsComponents/IndustriesLetsBuildTogether/IndustriesLetsBuildTogether";
import OurSixStepProvendevelopmentMethodology from "@/components/IndustriesPageComponents/OurSixStepProvendevelopmentMethodology/OurSixStepProvendevelopmentMethodology";
import SmoothAnimatedSection from "@/helpers/SmoothAnimatedSection/SmoothAnimatedSection";
import TechStackFuture from "@/components/HomepageComponents/TechStackFuture/TechStackFuture";
import ServicesInternalPageBanner from "@/components/ServicesPageComponents/ServicesInternalPageComponents/ServicesOthersInternalPageComponents/ServicesInternalPageBanner/ServicesInternalPageBanner";
import { hardwareServicesPageContent } from "@/constants/ServicesPageContent/HardwareServicesPageContent/HardwareServicesPageContent";

export async function getStaticPaths() {
  const paths = [
    { params: { slug: "iot-device-integration" } },
    { params: { slug: "rfid-and-barcode-scanner-integration" } },
    { params: { slug: "security-and-surveillance-systems" } },
    { params: { slug: "wearable-health-devices-integration" } },
    { params: { slug: "pos-terminal-integration" } },
    { params: { slug: "biometric-devices-integration" } },
    { params: { slug: "smart-buildings-and-real-estate" } },
    { params: { slug: "custom-hardware-integration-solutions" } },
    { params: { slug: "robotics-and-automation-systems" } },
  ];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const services = hardwareServicesPageContent[params.slug];

  return {
    props: { services, slug: params.slug },
  };
}

export default function Page({ services, slug }) {
  return (
    <Layout seo={services?.seoData}>
      <SmoothAnimatedSection>
        <ServicesInternalPageBanner
          title={services.title}
          description={services.description}
          stats={services.stats}
          image={services.image}
          isFromInternalServicePage={true}
        />
        <IndustriesStartupApproach
          itUnitedApproachData={services?.itUnitedApproachData}
        />
        <OurSixStepProvendevelopmentMethodology data={services.provenDevelopmentMethodologyData} isIndustriesPage={true} />
        <TechStackFuture data={services?.techStackFutureData} />
        <IndustriesLetsBuildTogether />
        <IndustriesFlexibleEngagementModels data={services?.engagementModelsData} />
        <IndustriesOurInsights data={services?.ourInsightsData} />
        <IndustriesLetsBuildTogether />
        <IndustriesFaqs faqData={services?.faqData} />
        <ContactusComponent />
      </SmoothAnimatedSection>
    </Layout>
  );
}
