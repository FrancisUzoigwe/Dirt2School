const AdminHistoryScreen = () => {
  return (
    <>
      <div className="flex w-full h-auto justify-center items-center flex-col">
        <div className="w-[95%] h-full bg-white mt-5 rounded-md justify-between flex items-center">
          <div className="w-[20%]  flex items-center justify-center font-bold">
            ID
          </div>
          <div className="w-[20%]  flex items-center justify-center font-bold">
            Date
          </div>
          <div className="w-[10%]  flex items-center justify-center font-bold">
            Bags
          </div>
          <div className="w-[20%] flex items-center justify-center font-bold">
            Recipient
          </div>
          <div className="w-[30%]  flex items-center justify-center font-bold">
            Email
          </div>
        </div>
        <div className="w-[95%] h-full bg-white mt-5 rounded-md justify-between flex items-center">
          <div className="w-[20%]  flex items-center justify-center font-bold text-[13px]">
            63463891937939230
          </div>
          <div className="w-[20%]  flex items-center justify-center font-bold text-[14px] ">
            11th-Nov-23
          </div>
          <div className="w-[10%]  flex items-center justify-center font-bold">
            2
          </div>
          <div className="w-[20%] flex items-center justify-center font-bold">
            Kossyrisochukwu
          </div>
          <div className="w-[30%]  flex items-center justify-center text-[13px] font-bold">
            kossyuzoigwe@gmail.com
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHistoryScreen;
