const Banner = () => {
  return (
    <div className="grid">
      <div className="header-text col-start-1 row-start-1 w-max">
        <h3 className="text-[#d8d8d8]">CUỘC THI ROBOTICS</h3>
        <h1 className="gradient-text text-6xl font-medium">ROBOCUS 2025</h1>
        <h2 className="text-6xl font-medium mt-6">Sáng tạo và năng động</h2>
        <p className="max-w-[750px] text-[#d8d8d8] font-light mt-3">Cuộc thi ROBOCUS 2025 do Câu lạc bộ Robotics - IoT, Trường ĐH KHTN, ĐHQGHCM phối hợp với Trung tâm đào tạo quốc tế ITEC chính thức được khởi động năm thứ 3 liên tiếp</p>

        <button type="button" className="call-to-action w-max bg-indigo-400 text-sm font-medium py-4 px-6 rounded-full mt-44 cursor-pointer">
          TÌM HIỂU THÊM
        </button>
      </div>

      <div className="vid-card w-full col-start-1 row-start-1 flex flex-row-reverse">
        <div className="h-[32rem] w-[44rem] bg-blue-950 rounded-3xl absolute -z-10">
        </div>

        <div className="h-[32rem] w-[44rem] rounded-3xl relative flex justify-center items-end">
          <div className="play-button flex items-center gap-2 absolute right-10 top-28">
            <button type="button" className="h-[50px] w-[50px] bg-[#7b8ce5] rounded-full z-20 cursor-pointer">
              {">"}
            </button>
            <p className="font-light text-xs h-min">Cùng xem lại <br /> hành trình</p>
          </div>
          <div className="intro-card bg-[#151721] w-[22rem] p-8">
            <h2 className="gradient-text text-6xl font-medium">3 năm</h2>
            <h3 className="font-medium mt-4">Hành trình hình thành và phát triển</h3>
            <p className="text-xs font-light mt-2">Năm thứ 3 cuộc thi được tổ chức với nhiều sự đổi mới và sáng tạo mang lại sân chơi bổ ích cho các bạn học sinh.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Banner;