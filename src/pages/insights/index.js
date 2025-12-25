import Layout from "@/components/CommonComponents/Layout";
import InsightComponents from "@/components/InsightComponents/InsightComponents";
import SmoothAnimatedSection from "@/helpers/SmoothAnimatedSection/SmoothAnimatedSection";

export default function Insights({ components, seoData }) {
  return (
    <Layout seo={seoData}>
      <SmoothAnimatedSection>
        <InsightComponents data={components} />
      </SmoothAnimatedSection>
    </Layout>
  );
}

export async function getStaticProps() {
  const resourcesContent = await import("@/constants/ResourcesPageContent/Resourcespage.json");
  
  return {
    props: {
      components: resourcesContent.components,
      seoData: resourcesContent.components.insightsSeoData,
    }
  };
}