import Layout from '@/components/CommonComponents/Layout'
import EventsComponents from '@/components/EventsComponents/EventsComponents'
import React from 'react'

const event = ({ components, seoData }) => {
  return (
    <Layout seo={seoData}>
      <EventsComponents data={components}/>
    </Layout>  )
}

export default event


export async function getStaticProps() {
  const resourcesContent = await import("@/constants/ResourcesPageContent/Resourcespage.json");
  
  return {
    props: {
      components: resourcesContent.components,
      seoData: resourcesContent.components.eventsSeoData,
    }
  };
}