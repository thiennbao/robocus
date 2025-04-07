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
  const pastEventImages = [
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/481907481_1055630206372555_1296425555820948762_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/481907481_1055630206372555_1296425555820948762_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/481907481_1055630206372555_1296425555820948762_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/481907481_1055630206372555_1296425555820948762_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/481907481_1055630206372555_1296425555820948762_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/481907481_1055630206372555_1296425555820948762_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/481907481_1055630206372555_1296425555820948762_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/481907481_1055630206372555_1296425555820948762_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/481907481_1055630206372555_1296425555820948762_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/481907481_1055630206372555_1296425555820948762_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/481907481_1055630206372555_1296425555820948762_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/481907481_1055630206372555_1296425555820948762_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/481907481_1055630206372555_1296425555820948762_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/481907481_1055630206372555_1296425555820948762_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/481907481_1055630206372555_1296425555820948762_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/481907481_1055630206372555_1296425555820948762_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/481907481_1055630206372555_1296425555820948762_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/481907481_1055630206372555_1296425555820948762_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/481907481_1055630206372555_1296425555820948762_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/481907481_1055630206372555_1296425555820948762_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/481907481_1055630206372555_1296425555820948762_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/481907481_1055630206372555_1296425555820948762_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/481907481_1055630206372555_1296425555820948762_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/481907481_1055630206372555_1296425555820948762_n.jpg",
  ]
  return (
    <div className="container mx-auto px-4 xl:px-24">
      <Spacer count={1} />
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
      <Lookback images={pastEventImages}/>
      <Spacer count={4} />
      <Awards />
    </div>
  );
}
