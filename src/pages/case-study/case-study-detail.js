import CaseStudyDetails from "@/components/CaseStudyComponents/CaseStudyDetail";
import Layout from "@/components/CommonComponents/Layout";
import React from "react";

const CaseStudyDetail = ({components}) => {
  return (
    <Layout>
      <CaseStudyDetails components={components} />
    </Layout>
  );
};

export default CaseStudyDetail;


export async function getStaticProps() {
  const homeContent = await import("@/constants/HomePageContent/Homepage.json");
  
  return {
    props: {
      components: homeContent.components,
    }
  };
}