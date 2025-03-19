export const Organizer = () => {
  const sponsors = [
    {
      logoUrl: "https://api.iconify.design/logos:cloudflare-icon.svg",
      sponsorLink: "https://example.com/sponsor1",
    },
    {
      logoUrl: "https://api.iconify.design/logos:cloudflare-icon.svg",
      sponsorLink: "https://example.com/sponsor2",
    },
    {
      logoUrl: "https://api.iconify.design/logos:cloudflare-icon.svg",
      sponsorLink: "https://example.com/sponsor3",
    },
    {
      logoUrl: "https://api.iconify.design/logos:cloudflare-icon.svg",
      sponsorLink: "https://example.com/sponsor4",
    },
    {
      logoUrl: "https://api.iconify.design/logos:cloudflare-icon.svg",
      sponsorLink: "https://example.com/sponsor5",
    },
    {
      logoUrl: "https://api.iconify.design/logos:cloudflare-icon.svg",
      sponsorLink: "https://example.com/sponsor6",
    },
    {
      logoUrl: "https://api.iconify.design/logos:cloudflare-icon.svg",
      sponsorLink: "https://example.com/sponsor7",
    },
    {
      logoUrl: "https://api.iconify.design/logos:cloudflare-icon.svg",
      sponsorLink: "https://example.com/sponsor8",
    },
  ];

  return (
    <div className="m-auto">
      <h3 className="text-[#d8d8d8]">ĐƠN VỊ</h3>
      <h1 className="gradient-text text-3xl font-medium mt-4">
        ĐƠN VỊ TỔ CHỨC
      </h1>
      <div className="flex gap-8 [&>*]:grow-0 mt-8">
        <OrganizerCard
          name="Trường ĐH KHTN, ĐHQG - HCM"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quam
          quo dolorem repudiandae vero ipsa necessitatibus"
        />
        <OrganizerCard
          name="CLB Robotics - IoT"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quam
          quo dolorem repudiandae vero ipsa necessitatibus"
        />
        <OrganizerCard
          name="TT Đào tạo Quốc tế ITEC"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quam
          quo dolorem repudiandae vero ipsa necessitatibus"
        />
      </div>
      <br />
      <h1 className="gradient-text text-3xl font- mt-4">ĐƠN VỊ TÀI TRỢ</h1>
      <div className="grid grid-cols-4 gap-0 mt-8">
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
      <div className="">
        <div className="logo w-16 h-16"></div>
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
        className="h-[1.5rem] grayscale group-hover:filter-none"
        src={logoUrl}
        alt=""
      />
    </div>
  );
};

export default Organizer;
