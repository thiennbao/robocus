export const Organizer = () => {
  const organizers = [
    {
      name: "Trường ĐH KHTN, ĐHQG - HCM",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quam quo dolorem repudiandae vero ipsa necessitatibus",
    },
    {
      name: "CLB Robotics - IoT",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quam quo dolorem repudiandae vero ipsa necessitatibus",
    },
    {
      name: "TT Đào tạo Quốc tế ITEC",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quam quo dolorem repudiandae vero ipsa necessitatibus",
    },
  ];
  const sponsors = [
    {
      logoUrl:
        "https://talentmind.edu.vn/wp-content/uploads/2015/03/ITEC-logo.jpg",
      sponsorLink: "https://example.com/sponsor2",
    },
  ];

  return (
    <div className="m-auto">
      <h3 className="text-[#d8d8d8]" id="organizer">
        ĐƠN VỊ
      </h3>
      <h1 className="gradient-text text-3xl font-medium mt-4">
        ĐƠN VỊ TỔ CHỨC
      </h1>
      <div className="flex gap-10 [&>*]:grow-0 flex-wrap md:flex-nowrap justify-center mt-8">
        {organizers.map((organizer, index) => (
          <OrganizerCard
            key={index}
            name={organizer.name}
            desc={organizer.desc}
          />
        ))}
      </div>
      <br />
      <h1 className="gradient-text text-3xl font- mt-4">ĐƠN VỊ TÀI TRỢ</h1>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-0 mt-8">
        {sponsors.map((sponsor, index) => (
          <SponsorCard key={index} logoUrl={sponsor.logoUrl} />
        ))}
      </div>
    </div>
  );
};
const OrganizerCard = ({
  name,
  desc,
  logo,
}: {
  name: string;
  desc: string;
  logo?: string;
}) => {
  return (
    <>
      <div className="w-[30rem]">
        <div className="logo w-16 h-16 bg-slate-900"></div>
        <h4 className="text-2xl font-medium mt-4">{name}</h4>
        <p className="w-auto font-light mt-4">{desc}</p>
      </div>
    </>
  );
};

const SponsorCard = ({ logoUrl }: { logoUrl: string }) => {
  return (
    <div className="h-40 -m-[0.5px] border border-blue-900 flex items-center justify-center group">
      <img
        className="h-[3rem] w-auto grayscale group-hover:filter-none"
        src={logoUrl}
        alt=""
      />
    </div>
  );
};

export default Organizer;
