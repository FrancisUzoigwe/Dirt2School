import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerUser } from "../../apis/authApi";
import LoadingScreen from "./LoadingScreen";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
// import { FaCamera } from "react-icons/fa";
// import vite from "../../assets/react.svg"

const Reg = () => {
  // const [image, setImage] = useState<string>(vite);
  // const [avatar, setAvatar] = useState<string>("");
  // const onHandleImage = (e: any) => {
  //   const file = e.target.files[0];
  //   const save = URL.createObjectURL(file);
  //   setAvatar(file);
  //   setImage(save);
  // };

  const [eye, setEye] = useState<boolean>(false);
  const onEye = () => {
    setEye(!eye);
  };
  const [checked, setChecked] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const Schema = yup.object({
    email: yup.string().required(),
    // name: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const onHandleSubmit = handleSubmit(async (data: any) => {
    setLoading(true);
    const { email, password } = data;
    registerUser({ email, password }).then((res) => {
      console.log(res);

      navigate("/auth/email");
    });
    setLoading(false);
  });

  return (
    <>
      <div>
        {loading && <LoadingScreen />}
        <form onSubmit={onHandleSubmit}>
          <div className="flex flex-col items-center w-full h-auto">
            {/* <div className="w-[100px] h-auto flex items-center flex-col relative">
              <img
                src={image? image: avatar}
                alt="Profile"
                className="w-[90px] h-[90px] rounded-full border object-cover "
              />
              <input type="file" id="upload" hidden onChange={onHandleImage} />
              <label htmlFor="upload">
                <div className="absolute bottom-1 right-1">
                  <FaCamera className="text-2xl hover:cursor-pointer hover:text-gray-700 transition-all duration-300" />
                </div>
              </label>
            </div> */}
          </div>
          {/* <div className="mt-[15px] relative rounded-md">
            <div className="absolute bg-white px-2 text-[13px] max-sm:text-[10px] max-sm:mt-[-8px] font-semibold ml-[15px] mt-[-10px] text-gray-500">
              Enter Name:
            </div>
            <div className="min-w-[290px] h-[40px] border flex justify-center items-center rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="JohnDoe"
                className="w-full h-full outline-none  pl-5 placeholder:text-[13px] text-[13px]"
                {...register("name")}
              />
            </div>
            {errors.name?.message && (
              <div className="text-[11px] text-red-500 flex justify-end items-center mt-[-4px] font-semibold">
                Please provide a name
              </div>
            )}
          </div> */}
          <div className="mt-[25px] relative rounded-md">
            <div className="absolute bg-white px-1 text-[13px] max-sm:text-[10px] max-sm:mt-[-8px] font-semibold ml-[15px] mt-[-10px] text-gray-500">
              Enter Email:
            </div>
            <div className="min-w-[290px] h-[40px] border flex justify-center items-center rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="example@gmail.com"
                className="w-full h-full outline-none  pl-5 placeholder:text-[13px] text-[13px]"
                {...register("email")}
              />
            </div>
            {errors.email?.message && (
              <div className="text-[11px] text-red-500 flex justify-end items-center mt-[-4px] font-semibold">
                Please provide a valid email address
              </div>
            )}
          </div>
          <div className="mt-[25px] relative rounded-md ">
            <div
              className="absolute top-[30%] right-6 hover:scale-[1.2] transition-all duration-500 hover:cursor-pointer"
              onClick={() => {
                onEye();
              }}
            >
              {!eye ? <FaEye /> : <FaEyeSlash />}
            </div>
            <div className="absolute bg-white px-1 text-[13px] max-sm:text-[10px] max-sm:mt-[-8px] font-semibold ml-[15px] mt-[-10px] text-gray-500">
              Enter Password:
            </div>
            <div className="min-w-[290px] h-[40px] border flex justify-center items-center rounded-full overflow-hidden">
              <input
                type={`${!eye ? "password" : "text"}`}
                placeholder="JohnDoe123"
                className="w-full h-full outline-none  pl-5 placeholder:text-[13px] text-[13px]"
                {...register("password")}
              />
            </div>
            {errors.password?.message && (
              <div className="text-[11px] text-red-500 flex justify-end items-center mt-[-4px] font-semibold">
                Please provide a password
              </div>
            )}
          </div>
          <div className="flex text-[13px] font-semibold items-center">
            <input
              type="checkbox"
              onClick={(e: any) => {
                setChecked(e.target.checked);
              }}
            />
            <div className=" ml-4 mt-[6px] ">Agree to Terms and Conditions</div>
          </div>{" "}
          <div className="w-full flex items-center justify-center mt-3 mb-3">
            <button
              className={`px-5 py-2 text-white text-[14px] transition-all duration-500 ${
                checked ? "bg-green-400" : "bg-gray-400"
              } rounded-sm rounded-tl-[20px] rounded-br-[20px]  font-semibold `}
              type="submit"
              disabled={!checked}
            >
              SignUp
            </button>
          </div>
          {/* <div>Have an account? <Link to="/signin">Signin</Link></div> */}
        </form>
      </div>
    </>
  );
};

export default Reg;
