import React from 'react'
import CaseStudyBanner from './CaseStudyBanner'
import FeatureSection from './FeatureSection'
import OurInsights from '../HomepageComponents/OurInsights/OurInsights'
import FaqComponent from '../ServicesPageComponents/ServicesInternalPageComponents/AIAutomationPageComponents/FaqComponent/FaqComponent'
import ContactusComponent from '../HomepageComponents/ContactusComponent/ContactusComponent'
import SubscribeToNewsLetter from '../ResourcesPageComponents/SubscribeToNewsLetter/SubscribeToNewsLetter'

const CaseStudyDetails = ({components}) => {
  return (
    <>
    <CaseStudyBanner />
    <FeatureSection />
    <OurInsights data={components?.ourInsightsData} />
    <FaqComponent />
    <ContactusComponent />
    <SubscribeToNewsLetter />
    </>
  )
}

export default CaseStudyDetails



