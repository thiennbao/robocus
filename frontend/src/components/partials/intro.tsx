import { Codesandbox, Cpu } from "lucide-react";

const Intro = () => {
  const data = [
    {
      topic: "Robotics",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, pariatur at quidem a mollitia veniam vel vitae quis. Qui debitis nulla, dolorum quam voluptatem adipisci mollitia cum quod esse eum.",
    },
    {
      topic: "Programming",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, pariatur at quidem a mollitia veniam vel vitae quis. Qui debitis nulla, dolorum quam voluptatem adipisci mollitia cum quod esse eum.",
    },
  ];

  return (
    <div className="m-auto">
      <h3 className="text-[#d8d8d8]" id="#intro">
        GIỚI THIỆU
      </h3>
      <h1 className="gradient-text text-5xl md:text-6xl font-medium">ROBOCUS 2025</h1>
      <p className="max-w-[46rem] text-[#d8d8d8] font-light mt-3">
        Cuộc thi Robocus được CLB Robotics - IoT, Trường ĐH KHTN, ĐHQGHCM tổ
        chức và thực hiện với sự đồng hành của Trung tâm Đào tạo Quốc tế ITEC
      </p>

      <div className="mt-8 flex flex-wrap lg:flex-nowrap gap-3">
        <div className="h-[24rem] w-[120rem] bg-gray-900"></div>

        <div className="flex flex-col flex-wrap gap-8">
          {data.map((item, index) => (
            <div className="flex items-start" key={index}>
              <Cpu
                size={1}
                className="w-8 h-auto mx-4 flex-none"
                color="#a6efff"
              />
              <div className="h-auto">
                <h3 className="text-3xl">{item.topic}</h3>
                <p className="font-light mt-6">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro;
