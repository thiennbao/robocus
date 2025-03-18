import Banner from "@/components/partials/banner";
import Header from "@/components/partials/header";
import Intro from "@/components/partials/intro";
import Spacer from "@/components/partials/spacer";
import Organizer from "@/components/partials/organizer";
import Stats from "@/components/partials/stats";
import Overview from "@/components/partials/overview";
import Timeline from "@/components/partials/timeline";
import Lookback from "@/components/partials/lookback";
import Awards from "@/components/partials/awards";
import Footer from "@/components/partials/footer";

export default function HomePage() {
  return (
    <div className="max-w-[74rem] mx-auto">
      <Header />
      <Spacer count={1} />
      <Spacer count={4} />
      <Banner />
      <Spacer count={4} />
      <Intro />
      <Spacer count={4} />
      <Organizer />
      <Spacer count={4} />
      <Stats />
      <Spacer count={4} />
      <Overview />
      <Spacer count={2} />
      <Timeline />
      <Lookback />
      <Spacer count={4} />
      <Awards />
      <Footer />
    </div>
  );
}
