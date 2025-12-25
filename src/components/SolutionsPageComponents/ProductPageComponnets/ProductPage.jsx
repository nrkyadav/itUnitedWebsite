"use client";
import React from "react";
import Layout from "@/components/CommonComponents/Layout";
import ContactusComponent from "@/components/HomepageComponents/ContactusComponent/ContactusComponent";
import IndustriesOurInsights from "@/components/IndustriesPageComponents/IndustriesOurInsights/IndustriesOurInsights";
import SmoothAnimatedSection from "@/helpers/SmoothAnimatedSection/SmoothAnimatedSection";
import ProductBanner from "./ProductBanner";

const ProductPage = ({ industry }) => {
  return (
    <Layout seo={industry?.seoData}>
      <SmoothAnimatedSection>
        <ProductBanner />
        <IndustriesOurInsights data={industry?.ourInsightsData} />
        <ContactusComponent />
      </SmoothAnimatedSection>
    </Layout>
  );
};

export default ProductPage;
