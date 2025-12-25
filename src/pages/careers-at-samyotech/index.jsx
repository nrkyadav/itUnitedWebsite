import CarrersComponent from "@/components/CarrersComponents/CarrersComponent";
import Layout from "@/components/CommonComponents/Layout";
import SmoothAnimatedSection from "@/helpers/SmoothAnimatedSection/SmoothAnimatedSection";



export default function Career({ components }) {
  return (
    <Layout>
      <SmoothAnimatedSection>
        <CarrersComponent data={components}/>
      </SmoothAnimatedSection>
    </Layout>
  );
}


export async function getStaticProps() {
  const resourcesContent = await import("@/constants/ResourcesPageContent/Resourcespage.json");
  
  return {
    props: {
      components: resourcesContent.components,
    }
  };
}