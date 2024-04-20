import Header from "../components/Header";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import Community from "../components/Community";
import BlogPosts from "../components/BlogPosts";
import Validators from "../components/ethereum/Validators";
import Ecosystem from "../components/ethereum/Ecosystem";
import NetworkHeaderSection from "../components/ethereum/NetworkHeaderSection";
import AprInfo from "../components/ethereum/AprInfo";
import RewardCalculatorSection from "../components/ethereum/RewardCalculatorSection";
import L2Section from "../components/ethereum/L2Section";
import Withdrawals from "../components/ethereum/Withdrawals";

import "../components/ethereum/style.css";

export default function Ethereum() {
  return (
    <div className="hpaewZ">
      <Header />
      <NetworkHeaderSection />
      <AprInfo />
      <RewardCalculatorSection />
      <L2Section />
      <Ecosystem />
      <Withdrawals />
      <Validators />
      <BlogPosts />
      <Community />
      <Subscribe />
      <Footer />
    </div>
  );
}
