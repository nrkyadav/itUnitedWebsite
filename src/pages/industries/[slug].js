import Layout from "@/components/CommonComponents/Layout";
import ContactusComponent from "@/components/HomepageComponents/ContactusComponent/ContactusComponent";
import IndustriesFlexibleEngagementModels from "@/components/IndustriesPageComponents/IndustriesFlexibleEngagementModels/IndustriesFlexibleEngagementModels";
import IndustriesOurInsights from "@/components/IndustriesPageComponents/IndustriesOurInsights/IndustriesOurInsights";
import IndsutriesOurExpertise from "@/components/IndustriesPageComponents/IndustriesStartupsComponents/IndsutriesOurExpertise/IndsutriesOurExpertise";
import IndustriesStartupApproach from "@/components/IndustriesPageComponents/IndustriesStartupsComponents/IndsutriesStartupApproach/IndustriesStartupApproach";
import IndustriesFaqs from "@/components/IndustriesPageComponents/IndustriesStartupsComponents/IndustriesFaqs/IndustriesFaqs";
import IndustriesInternalPageBanner from "@/components/IndustriesPageComponents/IndustriesStartupsComponents/IndustriesInternalPageBanner/IndustriesInternalPageBanner";
import IndustriesLetsBuildTogether from "@/components/IndustriesPageComponents/IndustriesStartupsComponents/IndustriesLetsBuildTogether/IndustriesLetsBuildTogether";
import OurSixStepProvendevelopmentMethodology from "@/components/IndustriesPageComponents/OurSixStepProvendevelopmentMethodology/OurSixStepProvendevelopmentMethodology";
import { industriesInternalPageData } from "@/constants/IndustriesPageContent/IndustriesPageContent";
import SmoothAnimatedSection from "@/helpers/SmoothAnimatedSection/SmoothAnimatedSection";

export async function getStaticPaths() {
  const paths = [
    { params: { slug: "startups" } },
    { params: { slug: "education" } },
    { params: { slug: "healthcare" } },
    { params: { slug: "fintech" } },
    { params: { slug: "realEstate" } },
    { params: { slug: "retail" } },
    { params: { slug: "travel-and-hospitality" } },
    { params: { slug: "logistics" } },
    { params: { slug: "food-and-restaurant" } },
    { params: { slug: "gaming" } },
    { params: { slug: "entertainment" } },
    { params: { slug: "sports" } },
    { params: { slug: "agriculture" } },
    { params: { slug: "government" } },
    { params: { slug: "sailpoint-solutions-consultancy" } },
  ];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const industry = industriesInternalPageData[params.slug];

  return {
    props: { industry },
  };
}

export default function Page({ industry }) {
  return (
    <Layout seo={industry?.seoData}>
      <SmoothAnimatedSection>
        <IndustriesInternalPageBanner
          title={industry.title}
          description={industry.description}
          stats={industry.stats}
          image={industry.image}
        />
        <IndustriesStartupApproach
          itUnitedApproachData={industry?.itUnitedApproachData}
        />
        <IndsutriesOurExpertise expertiseData={industry?.expertiseData} />
        <OurSixStepProvendevelopmentMethodology data={industry?.provenDevelopmentMethodologyData} isIndustriesPage={true} />
        <IndustriesLetsBuildTogether />
        <IndustriesFlexibleEngagementModels data={industry?.engagementModelsData} />
        <IndustriesOurInsights data={industry?.ourInsightsData} />
        <IndustriesFaqs faqData={industry?.faqData} />
        <ContactusComponent />
      </SmoothAnimatedSection>
    </Layout>
  );
}
