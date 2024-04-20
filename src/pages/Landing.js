import Header from "../components/Header";
import ComingSoon from "../components/landing/ComingSoon";
import Networks from "../components/landing/Networks";
import HowItWorks from "../components/landing/HowItWorks";
import LidoDAO from "../components/landing/LidoDAO";
import NotificationBot from "../components/landing/NotificationBot";
import Ecosystem from "../components/landing/Ecosystem";
import Autits from "../components/landing/Autits";
import Validators from "../components/landing/Validators";
import BlogPosts from "../components/BlogPosts";
import Community from "../components/Community";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

import "../components/landing/style.css";

export default function Landing() {
  const data = {
    rewards: 1684287081.389827,
    staked: 31707788189.314014,
    stakers: 395420,
  };

  return (
    <div className="sc-5c3143c4-0 hpaewZ">
      <Header date={Date()} />
      <ComingSoon data={data} />
      <Networks />
      <HowItWorks />
      <LidoDAO />
      <NotificationBot />
      <Ecosystem />
      <Autits />
      <Validators />
      <BlogPosts />
      <Community />
      <Subscribe />
      <Footer />
    </div>
  );
}
