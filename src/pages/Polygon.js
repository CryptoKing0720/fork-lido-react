import Header from "../components/Header";
import NetworkHeaderSection from "../components/polygon/NetworkHeaderSection";
import RewardCalculatorSection from "../components/polygon/RewardCalculatorSection";
import Ecosystem from "../components/polygon/Ecosystem";
import Validators from "../components/polygon/Validators";
import BlogPosts from "../components/BlogPosts";
import Community from "../components/Community";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

export default function Polygon() {
  return (
    <div className="hpaewZ">
      <Header />
      <NetworkHeaderSection />
      <RewardCalculatorSection />
      <Ecosystem />
      <Validators />
      <BlogPosts />
      <Community />
      <Subscribe />
      <Footer />
    </div>
  );
}
