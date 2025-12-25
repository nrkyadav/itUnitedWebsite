import Layout from "@/components/CommonComponents/Layout";
import ContactusComponent from "@/components/HomepageComponents/ContactusComponent/ContactusComponent";
import LetsBuildTogether from "@/components/HomepageComponents/LetsBuildTogether/LetsBuildTogether";
import EbooksResources from "@/components/ResourcesPageComponents/EbooksResources/EbooksResources";
import IndsutrySolutionsLandscapeResources from "@/components/ResourcesPageComponents/IndsutrySolutionsLandscapeResources/IndsutrySolutionsLandscapeResources";
import OurInsightsResources from "@/components/ResourcesPageComponents/OurInsightsResources/OurInsightsResources";
import ResourcesBanner from "@/components/ResourcesPageComponents/ResourcesBanner/ResourcesBanner";
import ResourcesEvents from "@/components/ResourcesPageComponents/ResourcesEvents/ResourcesEvents";
import SubscribeToNewsLetter from "@/components/ResourcesPageComponents/SubscribeToNewsLetter/SubscribeToNewsLetter";
import SmoothAnimatedSection from "@/helpers/SmoothAnimatedSection/SmoothAnimatedSection";



export default function Resources({ seoData }) {
  return (
    <Layout seo={seoData}>
      <SmoothAnimatedSection>
        <ResourcesBanner />
        <OurInsightsResources />
        <LetsBuildTogether />
        <ResourcesEvents />
        <EbooksResources />
        <IndsutrySolutionsLandscapeResources />
        <SubscribeToNewsLetter />
        <ContactusComponent />
      </SmoothAnimatedSection>
    </Layout>
  );
}

export async function getStaticProps() {
  const resourcesContent = await import("@/constants/ResourcesPageContent/Resourcespage.json");

  return {
    props: {
      seoData: resourcesContent.components.resourcesSeoData,
    }
  };
}
