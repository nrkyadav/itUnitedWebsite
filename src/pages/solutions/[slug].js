import Layout from "@/components/CommonComponents/Layout";
import ContactusComponent from "@/components/HomepageComponents/ContactusComponent/ContactusComponent";
import IndustriesFlexibleEngagementModels from "@/components/IndustriesPageComponents/IndustriesFlexibleEngagementModels/IndustriesFlexibleEngagementModels";
import IndustriesOurInsights from "@/components/IndustriesPageComponents/IndustriesOurInsights/IndustriesOurInsights";
import IndsutriesOurExpertise from "@/components/IndustriesPageComponents/IndustriesStartupsComponents/IndsutriesOurExpertise/IndsutriesOurExpertise";
import IndustriesStartupApproach from "@/components/IndustriesPageComponents/IndustriesStartupsComponents/IndsutriesStartupApproach/IndustriesStartupApproach";
import IndustriesFaqs from "@/components/IndustriesPageComponents/IndustriesStartupsComponents/IndustriesFaqs/IndustriesFaqs";
import IndustriesLetsBuildTogether from "@/components/IndustriesPageComponents/IndustriesStartupsComponents/IndustriesLetsBuildTogether/IndustriesLetsBuildTogether";
import OurSixStepProvendevelopmentMethodology from "@/components/IndustriesPageComponents/OurSixStepProvendevelopmentMethodology/OurSixStepProvendevelopmentMethodology";
import SolutionsInternalPageBanner from "@/components/SolutionsPageComponents/SolutionsInternalPageBanner/SolutionsInternalPageBanner";
import { solutionInternalPageData } from "@/constants/SolutionPageContent/SolutionPageConetent";
import SmoothAnimatedSection from "@/helpers/SmoothAnimatedSection/SmoothAnimatedSection";
import ProductPage from "@/components/SolutionsPageComponents/ProductPageComponnets/ProductPage";

export async function getStaticPaths() {
  const paths = [
    { params: { slug: "crm" } },
    { params: { slug: "e-commerce-solutions" } },
    { params: { slug: "vehicle-tracking-system" } },
    { params: { slug: "transport-management" } },
    { params: { slug: "hrms" } },
    { params: { slug: "sales-and-invoice" } },
    { params: { slug: "smart-assist" } },
    { params: { slug: "payroll-management-solution" } },
    { params: { slug: "employee-performance" } },
    { params: { slug: "recruitment-management" } },
    { params: { slug: "inventory-and-warehouse" } },
  ];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const industry = solutionInternalPageData[params.slug];

  return {
    props: { industry, slug: params.slug },
  };
}

export default function Page({ industry, slug }) {


  return (
    <Layout seo={industry?.seoData}>
      <SmoothAnimatedSection>
        <SolutionsInternalPageBanner
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
