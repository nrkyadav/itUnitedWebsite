import Layout from "@/components/CommonComponents/Layout";
import TermsConditionsBanner from "@/components/TermsConditionsComponents/TermsConditionsBanner/TermsConditionsBanner";
import TermsConditionsDetails from "@/components/TermsConditionsComponents/TermsConditionsDetails/TermsConditionsDetails";
import SmoothAnimatedSection from "@/helpers/SmoothAnimatedSection/SmoothAnimatedSection";



export default function TermsConditions() {
  return (
    <Layout>
      <SmoothAnimatedSection>
        <TermsConditionsBanner />
        <TermsConditionsDetails />
      </SmoothAnimatedSection>
    </Layout>
  );
}
