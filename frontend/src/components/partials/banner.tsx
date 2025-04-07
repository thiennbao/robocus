"use client";
import { useRef, useState } from "react";

const Banner = () => {
  const video = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="grid">
      <div className="header-text col-start-1 row-start-1 w-full">
        <h3 className="text-[#d8d8d8]">CUỘC THI ROBOTICS</h3>
        <h1 className="gradient-text text-5xl md:text-6xl font-medium">ROBOCUS 2025</h1>
        <h2 className="text-4xl md:text-6xl font-medium mt-4 md:mt-6">Sáng tạo và năng động</h2>
        <p className="max-w-[750px] text-[#d8d8d8] font-light mt-3">
          Cuộc thi ROBOCUS 2025 do Câu lạc bộ Robotics - IoT, Trường ĐH KHTN,
          ĐHQGHCM phối hợp với Trung tâm đào tạo quốc tế ITEC chính thức được
          khởi động năm thứ 3 liên tiếp
        </p>

        <button
          type="button"
          className="call-to-action w-max bg-indigo-400 text-sm font-medium py-4 px-6 rounded-full m-4 lg:mt-44 cursor-pointer"
        >
          TÌM HIỂU THÊM
        </button>
      </div>

      <div className="vid-card w-full col-start-1 lg:row-start-1 row-start-2 flex lg:flex-row-reverse relative">
        <div className="h-[32rem] w-[100%] max-w-[44rem] bg-blue-950 rounded-3xl absolute -z-10 overflow-clip">
          <video
            ref={video}
            controls={false}
            preload="metadata"
            className="w-full h-full object-cover"
          >
            <source src={"/robocus24 (1).mp4#t=.1"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="h-[32rem] w-[100%] max-w-[44rem] rounded-3xl relative flex justify-center items-end overflow-clip">
          <div className="play-button flex items-center gap-2 absolute right-10 top-28">
            <button
              type="button"
              className="h-[50px] w-[50px] bg-[#7b8ce5] rounded-full z-20 cursor-pointer"
              onClick={(e) => {
                if (video.current?.paused) {
                  video.current?.play();
                  setIsPlaying(true);
                } else {
                  video.current?.pause();
                  setIsPlaying(false);
                }
              }}
            >
              {!isPlaying ? "▶" : "❚❚"}
              {/* {">"} */}
            </button>
            <p className="font-light text-xs h-min">
              Cùng xem lại <br /> hành trình
            </p>
          </div>
          
          <div className="intro-card bg-[#151721] w-[22rem] p-4">
            <h2 className="gradient-text text-6xl font-medium">3 năm</h2>
            <h3 className="font-medium mt-4">
              Hành trình hình thành và phát triển
            </h3>
            <p className="text-xs font-light mt-2">
              Năm thứ 3 cuộc thi được tổ chức với nhiều sự đổi mới và sáng tạo
              mang lại sân chơi bổ ích cho các bạn học sinh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
