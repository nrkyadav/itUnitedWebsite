import Layout from "@/components/CommonComponents/Layout";
import AboutSamyotechComponent from "@/components/HomepageComponents/AboutSamyotechComponent/AboutSamyotechComponent";
import ContactusComponent from "@/components/HomepageComponents/ContactusComponent/ContactusComponent";
import EngagementModels from "@/components/HomepageComponents/EngagementModels/EngagementModels";
import HomeBanner from "@/components/HomepageComponents/HomeBannerComponet/HomeBanner";
import LetsBuildTogether from "@/components/HomepageComponents/LetsBuildTogether/LetsBuildTogether";
import OurIndustriesSolutionsLandscape from "@/components/HomepageComponents/OurIndustriesSolutionsLandscape/OurIndustriesSolutionsLandscape";
import OurSoftwareServicesLandscape from "@/components/HomepageComponents/OurSoftwareServicesLandscape/OurSoftwareServicesLandscape";
import OurSoftwareSolutionsLandscape from "@/components/HomepageComponents/OurSoftwareSolutionsLandscape/OurSoftwareServicesLandscape";
import ProvenDevelopmentMethodology from "@/components/HomepageComponents/ProvenDevelopmentMethodology/ProvenDevelopmentMethodology";
import SuccessStories from "@/components/HomepageComponents/SuccessStories/SuccessStories";
import TechStackFuture from "@/components/HomepageComponents/TechStackFuture/TechStackFuture";
import SmoothAnimatedSection from "@/helpers/SmoothAnimatedSection/SmoothAnimatedSection";

export default function Home({ components, seo }) {
  return (
    <Layout seo={seo}>
      <SmoothAnimatedSection>
        <HomeBanner banner={components.bannerData} />
        <AboutSamyotechComponent data={components.aboutSamyotechData} />
        <ProvenDevelopmentMethodology data={components.provenDevelopmentMethodologyData} />
        <EngagementModels data={components.engagementModelsData} />
        <TechStackFuture data={components.techStackFutureData} />
        <LetsBuildTogether />
        <OurIndustriesSolutionsLandscape data={components.ourIndustriesSolutionsLandscapeData} />
        <OurSoftwareServicesLandscape data={components.ourSoftwareServicesLandscapeData} />
        <OurSoftwareSolutionsLandscape data={components.ourSoftwareSolutionsLandscapeData} />
        <SuccessStories data={components.successStoriesData} />
        <LetsBuildTogether />
        <ContactusComponent />
      </SmoothAnimatedSection>
    </Layout>
  );
}



export async function getStaticProps() {
  const homeContent = await import("@/constants/HomePageContent/Homepage.json");

  return {
    props: {
      components: homeContent.components,
      seo: homeContent.seoData
    }
  };
}