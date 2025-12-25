import React from "react";
import InsideHeader from "../InsightComponents/InsideHeader";
import ResourcesEvents from "../ResourcesPageComponents/ResourcesEvents/ResourcesEvents";
import IndustriesOurInsights from "../IndustriesPageComponents/IndustriesOurInsights/IndustriesOurInsights";
import SubscribeToNewsLetter from "../ResourcesPageComponents/SubscribeToNewsLetter/SubscribeToNewsLetter";
import ContactusComponent from "../HomepageComponents/ContactusComponent/ContactusComponent";

const EventsComponents = ({ data }) => {
  return (
    <>
      <InsideHeader Title="All Events" />
      <ResourcesEvents />
      <IndustriesOurInsights data={data?.ourInsightsData} />
      <SubscribeToNewsLetter />

      <ContactusComponent inSight={true} />

    </>
  );
};

export default EventsComponents;
