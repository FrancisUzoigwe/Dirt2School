import axios from "axios";

const URL: string = "http://localhost:3400/api";

export const registerUser = async (data: any) => {
  try {
    // const config: any = {
    //   "content-type": "multipart/formdata",
    // };
    return await axios.post(`${URL}/register-student`, data).then((res) => {
      return res.data?.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const signinApi = async (data: any) => {
  try {
    return await axios.post(`${URL}/sign-in-student`, data).then((res) => {
      return res.data?.data;
    });
  } catch (error) {
    console.log(error);
  }
};


export const verifyApi = async (token: string) => {
    try {
        return await axios.patch(`${URL}/:${token}/student-secret-key`).then((res) => {
            return res.data?.data
        })
    } catch (error) {
        console.log(error);
        
    }
}