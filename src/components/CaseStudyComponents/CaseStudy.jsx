import React from "react";
import InsideHeader from "../InsightComponents/InsideHeader";
import SomeCaseStudies from "../HomepageComponents/SomeCaseStudies/SomeCaseStudies";
import IndustriesOurInsights from "../IndustriesPageComponents/IndustriesOurInsights/IndustriesOurInsights";
import SubscribeToNewsLetter from "../ResourcesPageComponents/SubscribeToNewsLetter/SubscribeToNewsLetter";
import ContactusComponent from "../HomepageComponents/ContactusComponent/ContactusComponent";

const CaseStudyComponent = ({ data }) => {
  return (
    <>
      <InsideHeader Title="Case Study" />
      <SomeCaseStudies data={data?.someCaseStudiesData} />
      <IndustriesOurInsights data={data?.ourInsightsData} />
      <SubscribeToNewsLetter />

      <ContactusComponent inSight={true} />

    </>
  );
};

export default CaseStudyComponent;
