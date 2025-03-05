const Overview = () => {
  return (
    <div className="">
      <h3 className="text-[#d8d8d8]">THỂ LỆ CUỘC THI</h3>
      <h1 className="gradient-text text-6xl font-medium">NỘI DUNG BẢNG ĐẤU</h1>

      <div className="mt-8 flex justify-center gap-6">
        <OverviewCard
          name="BẢNG A"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quam quo dolorem repudiandae vero ipsa necessitatibus"
        />
        <OverviewCard
          name="BẢNG B"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quam quo dolorem repudiandae vero ipsa necessitatibus"
        />
        <OverviewCard
          name="BẢNG C"
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
  link?: string;
}) => {
  return (
    <div className="w-[24rem] min-h-[24rem] bg-gray-900 hover:bg-blue-950 p-10">
      <div className="w-16 h-16 bg-black"></div>
      <h2 className="text-3xl font-medium mt-8">{name}</h2>
      <p className="font-light mt-4">{desc}</p>
      <a href="" className="text-[#7b8ce5] inline-block mt-6">TÌM HIỂU THÊM</a>
    </div>
  );
};

export default Overview;