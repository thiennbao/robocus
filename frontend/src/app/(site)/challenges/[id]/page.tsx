import { Tabs } from "radix-ui";

const Challenge = () => {
  return (
    <div className="max-w-[74rem] mx-auto">
      <h1 className="gradient-text text-6xl font-medium">BẢNG A - WEDO 2.0</h1>

      <Tabs.Root
        defaultValue="tab1"
        orientation="vertical"
        className="flex flex-col"
      >
        <Tabs.List className="flex gap-4">
          <Tabs.Trigger value="tab1" className="data-[state=active]:underline">
            Sa bàn
          </Tabs.Trigger>
          <Tabs.Trigger value="tab2" className="data-[state=active]:underline">
            Thuyết trình
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">
          <BangASaBan />
        </Tabs.Content>

        <Tabs.Content value="tab2">
          <BangAThuyetTrinh />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

export default Challenge;

const BangASaBan = () => {
  return (
    <div className="border border-blue-900">
      <h3 className="text-3xl mt-6 border-b border-blue-900 pb-5 px-4">Nội dung</h3>

      <Tabs.Root
        orientation="vertical"
        defaultValue="tab3"
        className="grid grid-cols-5 gap-4"
      >
        <Tabs.List className="flex flex-col items-start gap-4 [&>*]:text-left p-4 border-r border-blue-900 col-span-1">
          <Tabs.Trigger value="tab3" className="data-[state=active]:underline">
            Quy định chung
          </Tabs.Trigger>
          <Tabs.Trigger value="tab4" className="data-[state=active]:underline">
            Mô tả
          </Tabs.Trigger>
          <Tabs.Trigger value="tab5" className="data-[state=active]:underline">
            Giải thưởng
          </Tabs.Trigger>
        </Tabs.List>
        
        <Tabs.Content value="tab3" className="col-span-4 p-4">
          <p className="font-light">
            <span className="font-medium">Độ tuổi:</span> 5 - 10 tuổi
          </p>
          <p className="font-light">
            <span className="font-medium">Số lượng thành viên:</span> 2 - 3
            thành viên/đội
          </p>
          <p className="font-light">Mỗi đội chơi tham gia 2 nội dung thi đấu</p>
          <span className="font-medium">Tỷ lệ điểm:</span>
          <ul>
            <li>
              <p className="font-light">
                Tìm hiểu vấn đề & Xây dựng giải pháp [Thuyết trình]: 80%
              </p>
            </li>
            <li>
              <p className="font-light">
                Xây dựng lập trình Robot [Sa bàn Bowlings]: 20%
              </p>
            </li>
          </ul>
        </Tabs.Content>
        <Tabs.Content value="tab4" className="col-span-4  p-4">
          Mô tả: Nhóm học sinh lắp ráp Robot, lập trình tham gia phần thi
          Bowling. <br />
          Dụng cụ thi đấu: LEGO WEDO 2.0, Máy tính bảng, Laptop. <br />
          Quy định: <br />
          <ul className="list-disc">
            <li>
              Kích thước Robot: không giới hạn <br />
            </li>
            <li>
              Robot phải được tháo rời trước khi thi đấu. <br />
            </li>
            <li>
              Chương trình lập trình có thể được chuẩn bị sẵn. <br />
            </li>
          </ul>
          Luật chơi:
          <ul className="list-disc">
            <li>
              Trước khi thi đấu chính thức, nhóm học sinh sẽ có thời gian lắp
              ráp Robot.
            </li>
            <li>
              Robot phải được đặt ngay sau vạch thi đấu và các bộ phận của Robot
              (trừ dây điện) phải nằm sau vạch thi đấu theo góc nhìn từ trên
              xuống.
            </li>
            <li>
              Mỗi nhóm học sinh dùng máy tính bảng điều khiển Robot và thả banh
              bowling.
            </li>
            <li>Điểm = Số trụ Bowling bị ngã.</li>
          </ul>
          Sa bàn thi đấu
          <ul className="list-disc">
            <li>Sa bàn có kích thước: 50 cm x 100 cm</li>
            <li>
              Vạch xuất phát là một thanh ngăn cách được lắp bằng LEGO có kích
              thước X cm x Y cm x Z cm và được gắn cố định.
            </li>
            <li>
              Có 10 trụ bowling được đặt tại các vị trí đánh dấu. Đường kính đáy
              X cm. Chiều cao trụ Y cm
            </li>
          </ul>
        </Tabs.Content>
        <Tabs.Content value="tab5" className="col-span-4 p-4"></Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

const BangAThuyetTrinh = () => {
  return (
    <div className="border border-blue-900">
      <h3 className="text-3xl mt-6 border-b border-blue-900 pb-5 px-4">Nội dung</h3>

      <Tabs.Root
        orientation="vertical"
        defaultValue="tab3"
        className="grid grid-cols-5 gap-4"
      >
        <Tabs.List className="flex flex-col items-start gap-4 [&>*]:text-left p-4 border-r border-blue-900 col-span-1">
          <Tabs.Trigger value="tab3" className="data-[state=active]:underline">
            Quy định chung
          </Tabs.Trigger>
          <Tabs.Trigger value="tab4" className="data-[state=active]:underline">
            Mô tả
          </Tabs.Trigger>
          <Tabs.Trigger value="tab5" className="data-[state=active]:underline">
            Giải thưởng
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab3" className="col-span-4 p-4">
          <p className="font-light">
            <span className="font-medium">Độ tuổi:</span> 5 - 10 tuổi
          </p>
          <p className="font-light">
            <span className="font-medium">Số lượng thành viên:</span> 2 - 3
            thành viên/đội
          </p>
          <p className="font-light">Mỗi đội chơi tham gia 2 nội dung thi đấu</p>
          <span className="font-medium">Tỷ lệ điểm:</span>
          <ul>
            <li>
              <p className="font-light">
                Tìm hiểu vấn đề & Xây dựng giải pháp [Thuyết trình]: 80%
              </p>
            </li>
            <li>
              <p className="font-light">
                Xây dựng lập trình Robot [Sa bàn Bowlings]: 20%
              </p>
            </li>
          </ul>
        </Tabs.Content>
        <Tabs.Content value="tab4" className="col-span-4 p-4">
          Chủ đề: Animals <br />
          Mô tả: Nhóm học sinh tìm hiểu ít nhất 2 loài động vật khác nhau và đưa
          ra so sánh giữa chúng. Sản phẩm của nhóm là một mô hình và một poster
          minh họa ý tưởng của nhóm. <br />
          Dụng cụ thi đấu: Bao gồm nhưng không giới hạn LEGO WEDO 2.0, Máy tính
          bảng, Laptop và các vật dụng khác. <br />
          Quy định: <br />
          Kích thước Mô hình: 50cm x 50cm <br />
          Kích thước Poster: 80 cm x 120 cm <br />
          Luật chơi: Nhóm học sinh thuyết trình cho Ban giám khảo về giải
          pháp,mô hình và về poster của nhóm.
        </Tabs.Content>
        <Tabs.Content value="tab5" className="col-span-4 p-4"></Tabs.Content>
      </Tabs.Root>
    </div>
  );
};
