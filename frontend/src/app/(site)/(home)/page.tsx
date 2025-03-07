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

const Footer = () => {
  return (
    <div className="w-full flex justify-between bg-slate-600">
      <div className="flex gap-8">
        <NavigationCol />
        <NavigationCol />
        <NavigationCol />
      </div>

      <div className="flex flex-col">
        <h3>Email</h3>
        <div className="flex">
          <input type="email" name="" id="" className="h-min" />
          <button type="submit" className="">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

const NavigationCol = ({}:{}) => {
  return (
    <div className="">
          <h3>Tổng quan</h3>
          <ul>
            <li>Trang chu</li>
            <li>Gioi thieu</li>
          </ul>
        </div>
  )
}