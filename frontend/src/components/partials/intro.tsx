import { Codesandbox, Cpu } from "lucide-react";

const Intro = () => {
  return (
    <div className="m-auto">
      <h3 className="text-[#d8d8d8]" id="#intro">GIỚI THIỆU</h3>
      <h1 className="gradient-text text-6xl ">ROBOCUS 2025</h1>
      <p className="max-w-[46rem] text-[#d8d8d8] font-light mt-3">
        Cuộc thi Robocus được CLB Robotics - IoT, Trường ĐH KHTN, ĐHQGHCM tổ
        chức và thực hiện với sự đồng hành của Trung tâm Đào tạo Quốc tế ITEC
      </p>

      <div className="mt-8 flex">
        <div className="h-[24rem] w-[120rem] bg-gray-900"></div>

        <div className="flex flex-col gap-8">
          <div className="flex items-start">
            <Cpu size={120} className="w-40 h-auto mx-10" color="#a6efff"/>
            <div className="h-auto">
              <h3 className="text-3xl font-medium">Robotics</h3>
              <p className="font-light mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, pariatur at quidem a mollitia veniam vel vitae quis.
                Qui debitis nulla, dolorum quam voluptatem adipisci mollitia cum
                quod esse eum.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <Codesandbox size={120} className="w-40 h-auto mx-10" color="#a6efff"/>
            <div className="h-auto">
              <h3 className="text-3xl">Programming</h3>
              <p className="font-light mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, pariatur at quidem a mollitia veniam vel vitae quis.
                Qui debitis nulla, dolorum quam voluptatem adipisci mollitia cum
                quod esse eum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
