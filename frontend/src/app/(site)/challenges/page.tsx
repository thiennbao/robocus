import Header from "@/components/partials/header";
import HeroImage from "@/components/partials/hero-image"
import Overview from "@/components/partials/overview";
import Spacer from "@/components/partials/spacer";

const Challenges = () => {
    const challengesData = [
        {
            name: "BẢNG A",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quam quo dolorem repudiandae vero ipsa necessitatibus",
            link: "/challenges/A",
        },
        {
            name: "BẢNG B",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quam quo dolorem repudiandae vero ipsa necessitatibus",
            link: "/challenges/B",
        },
        {
            name: "BẢNG C",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quam quo dolorem repudiandae vero ipsa necessitatibus",
            link: "/challenges/C",
        }
    ];
    
    return (
        <div className="max-w-[74rem] mx-auto">
            <Header />
            <HeroImage />   
            
            <Spacer />
            
            <Overview />
        </div>
    )
}

export default Challenges;