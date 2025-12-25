import Layout from "@/components/CommonComponents/Layout";
import ContactusComponent from "@/components/HomepageComponents/ContactusComponent/ContactusComponent";
import IndustriesFlexibleEngagementModels from "@/components/IndustriesPageComponents/IndustriesFlexibleEngagementModels/IndustriesFlexibleEngagementModels";
import IndustriesOurInsights from "@/components/IndustriesPageComponents/IndustriesOurInsights/IndustriesOurInsights";
import IndustriesStartupApproach from "@/components/IndustriesPageComponents/IndustriesStartupsComponents/IndsutriesStartupApproach/IndustriesStartupApproach";
import IndustriesFaqs from "@/components/IndustriesPageComponents/IndustriesStartupsComponents/IndustriesFaqs/IndustriesFaqs";
import IndustriesLetsBuildTogether from "@/components/IndustriesPageComponents/IndustriesStartupsComponents/IndustriesLetsBuildTogether/IndustriesLetsBuildTogether";
import OurSixStepProvendevelopmentMethodology from "@/components/IndustriesPageComponents/OurSixStepProvendevelopmentMethodology/OurSixStepProvendevelopmentMethodology";
import SmoothAnimatedSection from "@/helpers/SmoothAnimatedSection/SmoothAnimatedSection";
import StaffAugumentationServices from "@/components/ServicesPageComponents/StaffAugumentationService/StaffAugumentationService";
import TechStackFuture from "@/components/HomepageComponents/TechStackFuture/TechStackFuture";
import { dedicatedTeamsContent } from "@/constants/ServicesPageContent/SoftwareDevelopmentService/DedicatedTeamsContent";
import ServicesInternalPageBanner from "@/components/ServicesPageComponents/ServicesInternalPageComponents/ServicesOthersInternalPageComponents/ServicesInternalPageBanner/ServicesInternalPageBanner";

export async function getStaticPaths() {
    const paths = [
        { params: { slug: "hire-remote-developers" } },
        { params: { slug: "remote-development-teams" } },
        { params: { slug: "staff-augmentation-services" } },
        { params: { slug: "offshore-development-centre" } },
    ];

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const industry = dedicatedTeamsContent[params.slug];

    return {
        props: { industry, slug: params.slug },
    };
}

export default function Page({ industry, slug }) {

    if (slug === 'staff-augmentation-services') {
        return <StaffAugumentationServices />;
    }

    return (
        <SmoothAnimatedSection>
            <Layout seo={industry?.seoData}>
                <ServicesInternalPageBanner
                    title={industry.title}
                    description={industry.description}
                    stats={industry.stats}
                    image={industry.image}
                />
                <IndustriesStartupApproach itUnitedApproachData={industry?.itUnitedApproachData} />
                <OurSixStepProvendevelopmentMethodology data={industry?.provenDevelopmentMethodologyData} isIndustriesPage={true} />
                <TechStackFuture data={industry?.techStackFutureData} />
                <IndustriesLetsBuildTogether />
                <IndustriesFlexibleEngagementModels data={industry?.engagementModelsData} />
                <IndustriesOurInsights data={industry?.ourInsightsData} />
                <IndustriesLetsBuildTogether />
                <IndustriesFaqs faqData={industry?.faqData} />
                <ContactusComponent />
            </Layout>
        </SmoothAnimatedSection>
    );
}
