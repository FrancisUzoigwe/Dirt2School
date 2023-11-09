import vite from "../../assets/react.svg";
import { useSelector } from "react-redux";
const ViewAllScreen = () => {
  const toggle = useSelector((state: any) => state.toggle);

  return (
    <>
      <div className="w-full h-auto flex-wrap">
        <div className="my-2 mx-2 flex-wrap">
          <div
            className={` ${
              toggle ? "w-[250px]" : "w-[200px]"
            } h-[180px] border mx-2 rounded-xl flex items-center justify-evenly`}
          >
            <div className="flex flex-col items-center">
              <div className="w-[80px] max-sm:w-[50px] max-sm:h-[50px] h-[80px] rounded-full border">
                <img
                  src={vite}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="text-[15px] font-bold mt-1 max-sm:text-[12px]">
                Kossyrisochukwu
              </div>
              <div className="text-[12px] max-sm:text-[10px]">
                kossyuzoigwe@gmail.com
              </div>
              <div className="text-red-500 font-bold">₦2,000</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewAllScreen;
