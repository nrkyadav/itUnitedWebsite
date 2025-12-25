import Layout from "@/components/CommonComponents/Layout";
import PrivacyPolicyBanner from "@/components/PrivacyPolicyComponents/PrivacyPolicyBanner/PrivacyPolicyBanner";
import PrivacyPolicyDetails from "@/components/PrivacyPolicyComponents/PrivacyPolicyDetails/PrivacyPolicyDetails";
import SmoothAnimatedSection from "@/helpers/SmoothAnimatedSection/SmoothAnimatedSection";

export default function PrivacyPolicy({ seoData }) {
  return (
    <Layout seo={seoData}>
      <SmoothAnimatedSection>
        <PrivacyPolicyBanner />
        <PrivacyPolicyDetails />
      </SmoothAnimatedSection>
    </Layout>
  );
}

export async function getStaticProps() {
  const resourcesContent = await import("@/constants/ResourcesPageContent/Resourcespage.json");
  
  return {
    props: {
      seoData: resourcesContent.components.privacyPolicySeoData,
    }
  };
}
