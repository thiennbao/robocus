import Header from "@/components/partials/header";
import Spacer from "@/components/partials/spacer";

const News = () => {
  const news = [
    {
      title: "ROBOCUS hợp tác với các trường đại học hàng đầu",
      description:
        "Chương trình hợp tác mới nhằm phát triển thế hệ kỹ sư robotics tương lai và thúc đẩy nghiên cứu đột phá.",
      date: new Date(),
      link: "",
      imgUrl:
        "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    },
    {
      title: "ROBOCUS hợp tác với các trường đại học hàng đầu",
      description:
        "Chương trình hợp tác mới nhằm phát triển thế hệ kỹ sư robotics tương lai và thúc đẩy nghiên cứu đột phá.",
      date: new Date(),
      link: "",
      imgUrl:
        "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    },
    {
      title: "ROBOCUS hợp tác với các trường đại học hàng đầu",
      description:
        "Chương trình hợp tác mới nhằm phát triển thế hệ kỹ sư robotics tương lai và thúc đẩy nghiên cứu đột phá.",
      date: new Date(),
      link: "",
      imgUrl:
        "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    },
    {
      title: "ROBOCUS hợp tác với các trường đại học hàng đầu",
      description:
        "Chương trình hợp tác mới nhằm phát triển thế hệ kỹ sư robotics tương lai và thúc đẩy nghiên cứu đột phá.",
      date: new Date(),
      link: "",
      imgUrl:
        "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    },
  ];

  return (
    <div className="max-w-[74rem] mx-auto">
      <Header />
      <div className="h-[26rem] w-[98vw] relative left-[calc(-49vw+50%)] box-border">
        <img
          src="https://robocus.org/images/slider-image/test-02.jpg"
          alt=""
          className="h-full w-full object-cover rounded-md"
        />
      </div>

      <Spacer />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {news.map((news, index) => (
          <NewsCard
            key={index}
            title={news.title}
            description={news.description}
            date={news.date}
            imgUrl={news.imgUrl}
            link={news.link}
          />
        ))}
      </div>

      <Spacer />
    </div>
  );
};

export default News;

const NewsCard = ({
  title,
  description,
  imgUrl = "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
  link,
  date,
}: {
  title: string;
  description: string;
  imgUrl: string;
  link: string;
  date: Date;
}) => {
  return (
    <div className="bg-gray-900 rounded-md overflow-hidden">
      <div className="h-[12rem]">
        <img src={imgUrl} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="p-4">
        <a href={link}>
          <div className="text-[#22d3ee] text-xs">
            {new Date().toLocaleDateString()}
          </div>
          <h2 className="text-lg mt-2">{title}</h2>
          <p className="font-light mt-2">{description}</p>
        </a>
      </div>
    </div>
  );
};
