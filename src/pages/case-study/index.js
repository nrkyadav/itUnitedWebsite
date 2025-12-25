import CaseStudyComponent from '@/components/CaseStudyComponents/CaseStudy'
import Layout from '@/components/CommonComponents/Layout'
import React from 'react'

const CaseStudy = ({ components }) => {
  return (
      <Layout>
          <CaseStudyComponent data={components}/>
      </Layout>
  )
}

export default CaseStudy


export async function getStaticProps() {
  const resourcesContent = await import("@/constants/ResourcesPageContent/Resourcespage.json");
  
  return {
    props: {
      components: resourcesContent.components,
    }
  };
}


