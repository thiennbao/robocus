import { HTMLAttributes } from "react";
import NewsCard from "./newsCard";

const NewsArchive = async ({
  searchParams,
  ...props
}: { searchParams: { search: string; take: string } } & HTMLAttributes<HTMLDivElement>) => {
  return (
    <section {...props}>
      <div className="container mx-auto px-4 xl:px-24">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {news.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsArchive;

// Mock data
const news = [
  {
    id: "1",
    title: "ROBOCUS hợp tác với các trường đại học hàng đầu",
    description:
      "Chương trình hợp tác mới nhằm phát triển thế hệ kỹ sư robotics tương lai và thúc đẩy nghiên cứu đột phá.",
    thumbnail: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    content: "",
    images: [],
    date: new Date(),
  },
];
