import Layout from "../../components/Layout/Layout";
import Technologies from "../../components/Technologies/Technologies";
import Portfolio from "../../components/Portfolio/Portfolio";
import Hero from "../../components/Hero/Hero";

const MainPage = () => {
  return (
    <Layout>
      <Hero />
      <Technologies />
      <Portfolio />
    </Layout>
  );
};

export default MainPage;
