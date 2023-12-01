import { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const Bags = () => {
  return (
    <div className="h-[200px] max-sm:h-[130px] my-1 rounded-lg border flex -z-10 flex-col items-center justify-center">
      <div className="text-[50px] font-bold">0</div>
      <div className="text-[14px] font-bold text-center max-sm:text-[12px]">
        You've brought 0 bags of pet bottles
      </div>
    </div>
  );
};

const History = () => {
  return (
    <div className="h-[200px] max-sm:h-[130px] my-1 rounded-lg border -z-10 flex flex-col items-center justify-center">
      <div className="text-[16px] font-bold"></div>
    </div>
  );
};

const Balance = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const onVisible = () => {
    setVisible(!visible);
  };
  return (
    <div className="h-[200px] max-sm:h-[130px] my-1 rounded-lg border flex flex-col items-center justify-center relative">
      <div className="font-bold text-[25px] max-sm:text-[18px] flex">
        ₦
        <span className="ml-1">
          {visible ? <div>2,000</div> : <div>*****</div>}
        </span>
      </div>
      <div
        onClick={() => {
          onVisible();
        }}
      >
        {!visible ? (
          <IoMdEye className="text-3xl hover:cursor-pointer " />
        ) : (
          <IoMdEyeOff className="text-3xl hover:cursor-pointer " />
        )}
      </div>
    </div>
  );
};

const HubScreen = () => {
  return (
    <div className="grid md:grid-cols-3 gap-2 max-sm:gap-3   sm:grid-cols-2 mx-3 max-sm:grid-cols-1">
      <Balance />
      <Bags />
      <History />
    </div>
  );
};

export default HubScreen;
