export const Organizer = () => {
  return (
    <div className="m-auto">
      <h3 className="text-[#d8d8d8]">ĐƠN VỊ</h3>
      <h1 className="gradient-text text-3xl font-medium mt-4">
        ĐƠN VỊ TỔ CHỨC
      </h1>
      <div className="flex gap-2 mt-8">
        <OrganizerCard
          name="Trường ĐH KHTN, ĐHQG - HCM"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quam
          quo dolorem repudiandae vero ipsa necessitatibus"/>
        <OrganizerCard
          name="CLB Robotics - IoT"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quam
          quo dolorem repudiandae vero ipsa necessitatibus"/>
        <OrganizerCard
          name="TT Đào tạo Quốc tế ITEC"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quam
          quo dolorem repudiandae vero ipsa necessitatibus"/>
      </div>
      <br />
      <h1 className="gradient-text text-3xl font- mt-4">ĐƠN VỊ TÀI TRỢ</h1>
      <div className="grid grid-cols-4 gap-0 mt-8">
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
      </div>
    </div>
  );
};
const OrganizerCard = ({
  name, desc, logo,
}: {
  name: string;
  desc: string;
  logo?: string;
}) => {
  return (
    <>
      <div className="">
        <div className="logo w-16 h-16 bg-gray-900"></div>
        <h4 className="text-2xl font-medium mt-4">{name}</h4>
        <p className="font-light mt-4 text-balance">{desc}</p>
      </div>
    </>
  );
};
const SponsorCard = () => {
  return (
    <div className="h-40 border border-blue-900 flex items-center justify-center">
      <img
        className=""
        src="https://api.iconify.design/logos:cloudflare-icon.svg"
        alt="" />
    </div>
  );
};

export default Organizer;