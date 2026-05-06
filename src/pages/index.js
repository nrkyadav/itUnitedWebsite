import Layout from "@/components/CommonComponents/Layout";
import AboutSamyotechComponent from "@/components/HomepageComponents/AboutSamyotechComponent/AboutSamyotechComponent";
import BrandPartners from "@/components/HomepageComponents/BrandPartners/BrandPartners";
import ContactusComponent from "@/components/HomepageComponents/ContactusComponent/ContactusComponent";
import HomeBanner from "@/components/HomepageComponents/HomeBannerComponet/HomeBanner";
import OurIndustriesSolutionsLandscape from "@/components/HomepageComponents/OurIndustriesSolutionsLandscape/OurIndustriesSolutionsLandscape";
import OurSoftwareServicesLandscape from "@/components/HomepageComponents/OurSoftwareServicesLandscape/OurSoftwareServicesLandscape";
import ProvenDevelopmentMethodology from "@/components/HomepageComponents/ProvenDevelopmentMethodology/ProvenDevelopmentMethodology";
import SuccessStories from "@/components/HomepageComponents/SuccessStories/SuccessStories";
import SmoothAnimatedSection from "@/helpers/SmoothAnimatedSection/SmoothAnimatedSection";

export default function Home({ components, seo }) {
  return (
    <Layout seo={seo}>
      <SmoothAnimatedSection>
        <HomeBanner banner={components.bannerData} />
        <AboutSamyotechComponent data={components.aboutSamyotechData} />
        <BrandPartners />
        <OurSoftwareServicesLandscape data={components.ourSoftwareServicesLandscapeData} />
        <OurIndustriesSolutionsLandscape data={components.ourIndustriesSolutionsLandscapeData} />
        <ProvenDevelopmentMethodology data={components.provenDevelopmentMethodologyData} />
        <SuccessStories data={components.successStoriesData} />
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
