import Layout from "@/components/CommonComponents/Layout";
import ContactusComponent from "@/components/HomepageComponents/ContactusComponent/ContactusComponent";
import TechStackFuture from "@/components/HomepageComponents/TechStackFuture/TechStackFuture";
import IndustriesFlexibleEngagementModels from "@/components/IndustriesPageComponents/IndustriesFlexibleEngagementModels/IndustriesFlexibleEngagementModels";
import IndustriesOurInsights from "@/components/IndustriesPageComponents/IndustriesOurInsights/IndustriesOurInsights";
import IndustriesFaqs from "@/components/IndustriesPageComponents/IndustriesStartupsComponents/IndustriesFaqs/IndustriesFaqs";
import IndustriesLetsBuildTogether from "@/components/IndustriesPageComponents/IndustriesStartupsComponents/IndustriesLetsBuildTogether/IndustriesLetsBuildTogether";
import OurSixStepProvendevelopmentMethodology from "@/components/IndustriesPageComponents/OurSixStepProvendevelopmentMethodology/OurSixStepProvendevelopmentMethodology";
import FutureReadySolutionsServices from "@/components/ServicesPageComponents/ServicesInternalPageComponents/ServicesOthersInternalPageComponents/FutureReadySolutionsServices/FutureReadySolutionsServices";
import OurServicesLandscapes from "@/components/ServicesPageComponents/ServicesInternalPageComponents/ServicesOthersInternalPageComponents/OurServicesLandscapes/OurServicesLandscapes";
import ServicesInternalPageBanner from "@/components/ServicesPageComponents/ServicesInternalPageComponents/ServicesOthersInternalPageComponents/ServicesInternalPageBanner/ServicesInternalPageBanner";
import { servicesInternalPageData } from "@/constants/ServicesPageContent/ServicesPageContent";
import SmoothAnimatedSection from "@/helpers/SmoothAnimatedSection/SmoothAnimatedSection";

export async function getStaticPaths() {
  const paths = [
    { params: { category: "software-development-services" } },
    { params: { category: "app-development-services" } },
    { params: { category: "hardware-integration-services" } },
    { params: { category: "dedicated-development-teams" } },
    { params: { category: "blockchain-development-services" } },
    { params: { category: "remote-software-development-teams" } },
  ];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const services = servicesInternalPageData[params.category];

  if (!services) {
    return { notFound: true };
  }

  return {
    props: { services },
  };
}

export default function Page({ services }) {
  return (
    <Layout seo={services?.seoData}>
      <SmoothAnimatedSection>
        <ServicesInternalPageBanner
          title={services.title}
          description={services.description}
          stats={services.stats}
          image={services.image}
        />
        {services?.title !== "Remote Software Development Teams" && (
          <OurServicesLandscapes
            servicesLandscapesData={services?.servicesLandscapesData}
          />
        )}
        <OurSixStepProvendevelopmentMethodology data={services.provenDevelopmentMethodologyData} isIndustriesPage={true} />
        <FutureReadySolutionsServices
          futureReadySolutionsData={services?.futureReadySolutionsData}
        />
        <IndustriesLetsBuildTogether isServicesPage={true} />
        <TechStackFuture data={services?.techStackFutureData} />
        <IndustriesFlexibleEngagementModels data={services?.engagementModelsData} />
        <IndustriesOurInsights data={services?.ourInsightsData} />
        <IndustriesFaqs faqData={services?.faqData} />
        <ContactusComponent />
      </SmoothAnimatedSection>
    </Layout>
  );
}
