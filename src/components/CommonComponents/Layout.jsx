import SEO from "../SeoComponent/SEO";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default function Layout({ children, seo }) {
  return (
    <div>
      <SEO seoData={seo} />
      <Header />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}
