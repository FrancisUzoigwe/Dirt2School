import { useState } from "react";
import IMAGE from "../../../public/vite.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
const ProfileScreen = () => {
  const [image, setImage] = useState("");
  const [avatar, setAvatar] = useState(IMAGE);

  const onHandleImage = (e: any) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setAvatar(file);
    setImage(save);
  };

  const Schema = yup.object({
    schoolName: yup.string().required(),
    fullName: yup.string().required(),
    motivation: yup.string().required(),
    address: yup.string().required(),
    phoneNumber: yup.string().required(),
    gender: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  return (
    <div className="w-full h-full flex flex-col items-center relative">
      <div className="mt-2 w-[150px] max-sm:w-[100px] max-sm:h-[100px] h-[150px] rounded-full border">
        <img
          src={image ? image : avatar}
          alt=""
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <input type="file" id="image" hidden onChange={onHandleImage} />
      <label
        htmlFor="image"
        className="mt-3 px-4 py-2 rounded-md text-white bg-green-600 hover:cursor-pointer max-sm:text-[14px]"
      >
        Upload Image
      </label>
    </div>
  );
};

export default ProfileScreen;
