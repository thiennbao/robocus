const Stats = () => {
  return (
    <div className="flex justify-center gap-6 flex-wrap">
      <StatBlock number={3} content="Năm hình thành và phát triển" />
      <StatBlock number={40} content="Đội thi đấu" />
      <StatBlock number={100} content="Thí sinh tham gia" />
      <StatBlock number={6} over content="Hạng mục thi đấu" />
    </div>
  );
};

const StatBlock = ({
  number,
  over,
  content,
}: {
  number: number;
  over?: boolean;
  content: string;
}) => {
  return (
    <div className="aspect-square w-[16rem] hover:bg-indigo-400 bg-gray-900 flex flex-col items-center justify-center text-center">
      <span className="text-5xl font-medium">
        {number} {over && "+"}
      </span>
      <p className="font-light mt-4">{content}</p>
    </div>
  );
};

export default Stats;