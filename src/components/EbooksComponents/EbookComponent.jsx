import React from "react";
import InsideHeader from "../InsightComponents/InsideHeader";
import EbooksResources from "../ResourcesPageComponents/EbooksResources/EbooksResources";
import IndustriesOurInsights from "../IndustriesPageComponents/IndustriesOurInsights/IndustriesOurInsights";
import SubscribeToNewsLetter from "../ResourcesPageComponents/SubscribeToNewsLetter/SubscribeToNewsLetter";
import ContactusComponent from "../HomepageComponents/ContactusComponent/ContactusComponent";

const EbookComponent = ({ data }) => {
  return (
    <div>
      <InsideHeader Title="Ebooks" />
      <EbooksResources />
      <IndustriesOurInsights data={data?.ourInsightsData} />
      <SubscribeToNewsLetter />

      <ContactusComponent inSight={true} />

    </div>
  );
};

export default EbookComponent;
