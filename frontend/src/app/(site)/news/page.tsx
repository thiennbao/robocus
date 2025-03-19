import Header from "@/components/partials/header";

const News = () => {
  return (
    <div className="max-w-[74rem] mx-auto">
      <Header />
      <div className="h-[26rem] w-[100vw] relative left-[calc(-50vw+50%)] p-4">
        <img
          src="https://robocus.org/images/slider-image/test-02.jpg"
          alt=""
          className="h-full w-full object-cover rounded-xl"
        />
      </div>

      <div className="flex">
        <NewsCard />
      </div>
    </div>
  );
};

export default News;

const NewsCard = () => {
  return (
    <div className="w-[24rem] bg-gray-900">
      <div className="text-[#22d3ee]">{new Date().toLocaleDateString()}</div>
      <h2 className="text-lg">ROBOCUS hợp tác với các trường đại học hàng đầu</h2>
      <p className="font-light">
        Chương trình hợp tác mới nhằm phát triển thế hệ kỹ sư robotics tương lai
        và thúc đẩy nghiên cứu đột phá.
      </p>
    </div>
  );
};
