import { Codesandbox, Cpu } from "lucide-react";

const Lookback = () => {
  return (
    <>
      <h3 className="text-[#d8d8d8]" id="lookback">HÀNH TRÌNH ROBOCUS</h3>
      <div className="flex gap-4 *:grow">
        <div className="left-text">
          <h1 className="gradient-text text-5xl font-medium w-[38rem] text-balance">
            CÙNG NHÌN LẠI HÀNH TRÌNH HÌNH THÀNH VÀ PHÁT TRIỂN ROBOCUS
          </h1>

          <div className="flex flex-col gap-8 mt-10">
            <div className="flex items-start">
              <Cpu className="w-24 h-auto mx-10" color="#a6efff" />
              <div className="h-auto">
                <h3 className="text-3xl font-medium">Robotics</h3>
                <p className="font-light mt-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto, pariatur at quidem a mollitia veniam vel vitae
                  quis. Qui debitis nulla, dolorum quam voluptatem adipisci
                  mollitia cum quod esse eum.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Cpu className="w-24 h-auto mx-10" color="#a6efff" />
              <div className="h-auto">
                <h3 className="text-3xl font-medium">Robotics</h3>
                <p className="font-light mt-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto, pariatur at quidem a mollitia veniam vel vitae
                  quis. Qui debitis nulla, dolorum quam voluptatem adipisci
                  mollitia cum quod esse eum.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Codesandbox className="w-24 h-auto mx-10" color="#a6efff" />
              <div className="h-auto">
                <h3 className="text-3xl">Programming</h3>
                <p className="font-light mt-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto, pariatur at quidem a mollitia veniam vel vitae
                  quis. Qui debitis nulla, dolorum quam voluptatem adipisci
                  mollitia cum quod esse eum.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-img">
          <div className="h-[40rem] w-[34rem] bg-gray-900 mx-auto"></div>
        </div>
      </div>
    </>
  );
};

export default Lookback;