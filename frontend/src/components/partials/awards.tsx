const Awards = () => {
  return (
    <div className="bg-[#151721] p-10">
      <h2 className="gradient-text text-4xl font-medium text-center w-full mt-10">
        BẢNG VINH DANH
      </h2>

      <div className="grid grid-cols-2 gap-10 w-max mt-14 mx-auto">
        <AwardCard
          name="Trần Nguyễn Phúc Khang"
          award="Giải nhất toàn cuộc thi"
          quote="Em cảm thấy cuộc thi này khá là dễ"
        />
        <AwardCard
          name="Trần Nguyễn Phúc Khang"
          award="Giải nhất toàn cuộc thi"
          quote="Em cảm thấy cuộc thi này khá là dễ"
        />
        {/* <AwardCard /> */}
      </div>
    </div>
  );
};

const AwardCard = ({
  name,
  award,
  quote,
  imageURL,
}: {
  name: string;
  award: string;
  quote: string;
  imageURL?: string;
}) => {
  return (
    <div className="w-max bg-black p-14 flex flex-col items-center">
      <div className="h-[8rem] w-[8rem] bg-gray-800 rounded-full border-[3px] border-blue-950 overflow-hidden">
        {imageURL ? (
          <img src="{imageURL}" className="w-full h-full object-cover" alt="" />
        ) : (
          <div className="w-full h-full bg-gray-900"></div>
        )}
      </div>
      <h3 className="text-xl mt-8">{name}</h3>
      <p className="text-sm font-extralight mt-2">{award}</p>
      <p className="font-light mt-4">
        {'"'}
        {quote}
        {'"'}
      </p>
    </div>
  );
};

export default Awards;