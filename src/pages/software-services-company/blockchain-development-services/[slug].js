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
import { blockchainServicesPageContent } from "@/constants/ServicesPageContent/BlockchainServicesPageContent/BlockchainServicesPageContent";

export async function getStaticPaths() {
  const paths = [
    { params: { slug: "custom-blockchain-development" } },
    { params: { slug: "decentralized-applications-dapps" } },
    { params: { slug: "blockchain-consulting" } },
    { params: { slug: "token-development" } },
    { params: { slug: "blockchain-consulting" } },
    { params: { slug: "private-blockchain-development" } },
    { params: { slug: "smart-contract-development" } },
  ];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const services = blockchainServicesPageContent[params.slug];

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
