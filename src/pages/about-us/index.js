import AboutUsComponent from "@/components/AboutUsComponents/AboutUsComponent";
import Layout from "@/components/CommonComponents/Layout";
import SmoothAnimatedSection from "@/helpers/SmoothAnimatedSection/SmoothAnimatedSection";
import React from "react";

const index = ({components}) => {
  return (
    <>
      <Layout seoData={components?.aboutUsSeoData}>
        <SmoothAnimatedSection>
          <AboutUsComponent components={components} />
        </SmoothAnimatedSection>
      </Layout>
    </>
  );
};

export default index;


export async function getStaticProps() {
  const resourcesContent = await import("@/constants/ResourcesPageContent/Resourcespage.json");
  
  return {
    props: {
      components: resourcesContent.components,
    }
  };
}