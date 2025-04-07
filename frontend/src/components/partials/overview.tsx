import Link from "next/link";

const Overview = () => {
  return (
    <div className="">
      <h3 className="text-[#d8d8d8]" id="overview">THỂ LỆ CUỘC THI</h3>
      <h1 className="gradient-text text-5xl md:text-6xl font-medium">NỘI DUNG BẢNG ĐẤU</h1>

      <div className="mt-8 flex flex-wrap justify-center gap-6">
        <OverviewCard
          name="BẢNG A"
          link="/challenges/A"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quam quo dolorem repudiandae vero ipsa necessitatibus"
        />
        <OverviewCard
          name="BẢNG B"
          link="/challenges/B"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quam quo dolorem repudiandae vero ipsa necessitatibus"
        />
        <OverviewCard
          name="BẢNG C"
          link="/challenges/C"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quam quo dolorem repudiandae vero ipsa necessitatibus"
        />
      </div>
    </div>
  );
};

const OverviewCard = ({
  name,
  desc,
  link,
}: {
  name: string;
  desc: string;
  link: string;
}) => {
  return (
    <div className="w-[24rem] min-h-[18rem] bg-gray-900 hover:bg-blue-950 p-6">
      <div className="w-12 h-12 gradient-text text-6xl font-medium">{name.charAt(name.length - 1)}</div>
      <h2 className="text-3xl font-medium mt-4">{name}</h2>
      <p className="font-light mt-4">{desc}</p>
      <Link href={link} className="text-[#7b8ce5] inline-block mt-6">TÌM HIỂU THÊM</Link>
    </div>
  );
};

export default Overview;