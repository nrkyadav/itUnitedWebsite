import Layout from "@/components/CommonComponents/Layout";
import EbookComponent from "@/components/EbooksComponents/EbookComponent";
import React from "react";

const Ebooks = ({ components, seoData }) => {
  return (
    <Layout seo={seoData}>
      <EbookComponent data={components}/>
    </Layout>
  );
};

export default Ebooks;


export async function getStaticProps() {
  const resourcesContent = await import("@/constants/ResourcesPageContent/Resourcespage.json");
  
  return {
    props: {
      components: resourcesContent.components,
      seoData: resourcesContent.components.ebooksSeoData,
    }
  };
}