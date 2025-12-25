import Layout from "@/components/CommonComponents/Layout";
import ContactUsPage from "@/components/ContactUsComponents/ContactUsComponent";
import SmoothAnimatedSection from "@/helpers/SmoothAnimatedSection/SmoothAnimatedSection";

export default function Home({ seoData }) {
  return (
    <Layout seo={seoData}>
      <SmoothAnimatedSection>
        <ContactUsPage />
      </SmoothAnimatedSection>
    </Layout>
  );
}

export async function getStaticProps() {
  const resourcesContent = await import("@/constants/ResourcesPageContent/Resourcespage.json");
  
  return {
    props: {
      seoData: resourcesContent.components.contactUsSeoData,
    }
  };
}
