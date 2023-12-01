import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { logOut } from "../../global/globalState";

const DropDown = () => {
  const dispatch = useDispatch();

  const mainVariant = {
    hidden: {
      y: "50px",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      duration: {
        // delay: 0.2,
      },
    },
  };

  const typeVariant = {
    hidden: {
      x: "-50px",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  };
  return (
    <>
      <motion.div
        className="w-[150px] h-[70px] rounded-md bg-black flex-col flex items-center"
        variants={mainVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex items-center flex-col"
          variants={typeVariant}
        >
          <div className="text-white mt-2 hover:cursor-pointer hover:scale-110 transition-all duration-500">
            Update Profile
          </div>
          <div
            className="text-white mt-1 hover:cursor-pointer hover:scale-110 transition-all duration-500"
            onClick={() => {
              dispatch(logOut());
            }}
          >
            Logout
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default DropDown;
